import React from "react";
import {Link, useParams} from "react-router";
import Products from "./products";
import {getProductById} from "../models/products";

export async function loader({params}) {
  console.log({params});
  let id = params.id;
  //calling function for getting individual item
  let product = await getProductById(id);
  console.log({product});
  return product;
}

export default function IndivProd({loaderData}) {
  return (
    <main className="p-[30px]">
      <div>
        <nav className="flex justify-between items-center gap-[30px] mb-[30px]">
          <h1 className="text-[30px] text-[#ccff02]">{loaderData.name}</h1>
          <Link
            to={`/products/${loaderData._id}/edit/`}
            className="bg-[#e5e6e0] text-black p-[10px] font-extralight hover:bg-[#ccff02] hover:rounded-[20px] hover:transition-all hover:duration-[0.2s] duration-[0.2s]"
          >
            Edit product
          </Link>
        </nav>

        <img
          className="w-[300px] h-[300px] object-cover rounded-[10px]"
          src={loaderData.image}
          alt=""
        />
        <small>{loaderData.quantity}</small>
        <p>{loaderData.price} Dollars</p>
        <Link className="bg-[#ccff02] p-[10px] text-black " rel="prefetch">
          Add to cart
        </Link>
      </div>
    </main>
  );
}
