import React from "react";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";


// type posts =
// {
//     id:Number,
//     title:String,
//     price:Number,
//     description:String
    
// }
const API = "https://api.escuelajs.co/api/v1/products";
export const loader: LoaderFunction = async () => {
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
    return json({ data});
};






export default function Tabel() 
{
  const {data} = useLoaderData<typeof loader>();
  
  
  return (
    <> 
    <div>

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
            <tr className="h-12 border bg-gray-100 align-middle text-black border" key={item.id}>
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
