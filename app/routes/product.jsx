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
        <h1 className="text-[30px] mb-[30px] text-[#ccff02]">
          {loaderData.title}
        </h1>
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
