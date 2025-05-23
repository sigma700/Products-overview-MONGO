import React from "react";
import {getProducts} from "../models/products";
import {Link} from "react-router";
import {IndivProd} from "./product";

export async function loader() {
  let result = await getProducts();
  let products = result.map((item) => ({
    ...item,
    _id: item._id.toString(),
  }));

  return products;
}

export default function Products({loaderData}) {
  return (
    <main className="p-[30px]">
      <div>
        <div className="nav flex items-center justify-between">
          <Link
            className="bg-[#898a8e] font-light p-[10px] border-[2px] border-[#e6ff2a] hover:bg-[#e6ff2a] hover:text-black hover:transition-colors duration-[0.2s]"
            to={"/newProduct"}
          >
            New Product
          </Link>
          <h1 className="text-center m-[30px] text-[30px] text-[#e6ff2a]">
            Products Available
          </h1>
        </div>
        <ul className="grid grid-cols-3 gap-[20px]">
          {loaderData.map((item) => (
            <li key={item._id}>
              <img
                className="w-[300px] h-[300px] object-cover rounded-[10px]"
                src={item.image}
                alt=""
              />
              <p>{item.title}</p>
              <small>{item.quantity}</small>
              <p>{item.price}</p>
              <Link
                className="bg-[#ccff02] p-[10px] w-[100px] text-black font-light mt-[20px] hover:bg-transparent hover:text-white border border-[#ccff02] hover:transition-all duration-[0.3s] hover:cursor-pointer active:bg-[#ccff02] active:text-black hover:rounded-[30px] active:rounded-[0px]"
                to={`/products/${item._id}`}
                rel="prefetch"
              >
                Details
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
