import React from "react";
import {Form, redirect} from "react-router";
import {updateProducts, getProductById} from "../models/products";
import {useNavigate} from "react-router";
import {validateText, validateAmount, validateImage} from "./server/validation";

export async function loader({params}) {
  console.log({params});
  let id = params.id;
  let product = await getProductById(id);
  console.log({product});
  return product;
}

//action function for handling form submission
export async function action({request, params}) {
  let formData = await request.formData();
  let name = formData.get("name");
  let price = formData.get("price");
  let quantity = formData.get("quantity");
  let image = formData.get("image");
  //   console.log({name, price, quantity, image});

  let fieldErrors = {
    name: validateText(name),
    quantity: validateAmount(quantity),
    price: validateAmount(price),
    image: validateImage(image),
  };

  if (Object.values(fieldErrors).some((error) => error)) {
    return {fieldErrors};
  }

  let id = params.id;
  let result = await updateProducts(id, name, price, image, quantity);
  console.log({result});

  //   let id = result.insertedId.toString();

  return redirect(`/products/${id}`);
}
export default function Edits({actionData}) {
  console.log({result: actionData});
  const navigate = useNavigate();
  return (
    <main>
      <div>
        <div className="flex items-center justify-between ">
          <button
            className="bg-[#01203f] p-[10px] font-light hover:cursor-pointer w-[100px] border border-[#e0fe08] hover:bg-[#e0fe08] hover:text-black hover:transition-colors duration-[0.2s]"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
          <h1 className="text-[#e0fe08] text-[30px] mb-[20px]">Edit Product</h1>
        </div>
        <Form method="post">
          <FormSpacer>
            <Label htmlFor="name" text="Title" />
            <Input
              hasError={actionData?.fieldErrors.name}
              type="text"
              name="name"
            ></Input>
            {actionData?.fieldErrors.name ? (
              <p className="text-red-700 text-[10px] mt-[0px]">
                {actionData?.fieldErrors.name}
              </p>
            ) : null}
          </FormSpacer>

          <FormSpacer>
            <Label htmlFor="name" text="Price" />
            <Input
              hasError={actionData?.fieldErrors.price}
              type="number"
              name="price"
            ></Input>
            {actionData?.fieldErrors.price ? (
              <p className="text-red-700 text-[10px] mt-[0px]">
                {actionData?.fieldErrors.price}
              </p>
            ) : null}
          </FormSpacer>

          <FormSpacer>
            <Label htmlFor="name" text="Quantity" />
            <Input
              hasError={actionData?.fieldErrors.quantity}
              type="number"
              name="quantity"
            ></Input>
            {actionData?.fieldErrors.quantity ? (
              <p className="text-red-600 text-[10px]">
                {actionData?.fieldErrors.quantity}
              </p>
            ) : null}
          </FormSpacer>

          <FormSpacer>
            <Label htmlFor="name" text="Image Url" />
            <Input
              hasError={actionData?.fieldErrors.image}
              type="text"
              name="image"
            ></Input>
            {actionData?.fieldErrors.image ? (
              <p className="text-red-600 text-[10px] mt-[0px]">
                {actionData?.fieldErrors.image}
              </p>
            ) : null}
          </FormSpacer>

          <button
            className="p-[10px] bg-[#182641] mt-[20px] w-[100px] border border-[#e0fe08] hover:bg-[#e0fe08] hover:text-black hover:cursor-pointer hover:transition-colors duration-[0.2s]"
            type="submit"
          >
            Finish
          </button>
        </Form>
      </div>
    </main>
  );
}

export function Input({type, name, text, id, hasError}) {
  return (
    <input
      className={`border ${
        hasError ? "border-red-600" : "border-white"
      } bg-[#182641] p-[10px] font-light w-[700px] mt-[10px]`}
      type={type}
      name={name}
      id={id}
    >
      {text}
    </input>
  );
}

export function Label({htmlFor, text}) {
  return <label htmlFor={htmlFor}>{text}</label>;
}

export function FormSpacer({children}) {
  return <div className="flex flex-col gap-2 w-full">{children}</div>;
}
