import React from "react";
import { ActionFunction, json } from "@remix-run/node";
import { Link, useActionData, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { request } from "https";
import Form from "./Form";


const API = "https://api.escuelajs.co/api/v1/products";
export const loader: LoaderFunction = async () => {
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
    return json({ data});
};

export const action: ActionFunction =async () => {
  let FormData = useActionData<typeof request>() ;
  let values=Object.fromEntries(FormData);
  
}




export default function Tabel() 
{
  const {data} = useLoaderData<typeof loader>();
  
  
  return (
    <> 
    <div className="flex flex-row justify-between align-middle">
         <div className="text-2xl px-10 py-2 mt-2">
              <h1>Products</h1>
         </div>
         <div className="py-2">
          <Link to="/Form"> 
          <button  className="text-lg bg-indigo-200 py-4 align-middle px-4 mx-8 rounded-full ... ">Add Product</button>

          </Link>
          {/* <button  className="text-lg bg-indigo-200 py-4 align-middle px-4 mx-8 rounded-full ... ">Add Product</button> */}
          
         </div>
    </div>
    <div className="px-6">
      <table className="w-full table-auto text-center text-white   ">
        <thead className="h-14 bg-gray-500 pb-4 align-middle text-xl border">
          <tr>
            <th className="px-6">Id</th>
            <th>Title</th>
            <th>Price</th>
            <th className="text-left px-10">Description</th>
          </tr>
        </thead>
        <tbody className="border ">
          {data.slice(0,12).map((item: any) => (
            <tr className="h-12 border align-middle text-black border odd:bg-gray-200" key={item.id}>
              <td >{item.id}</td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td className="text-left px-8">{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
