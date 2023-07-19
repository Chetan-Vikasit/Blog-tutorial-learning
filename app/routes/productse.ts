
import { LoaderFunction } from "@remix-run/node";
import { json } from "node:stream/consumers";

type posts =
{
    id:Number,
    title:String,
    price:Number,
    description:String
    
}
const API = "https://api.escuelajs.co/api/v1/products";
export const loader: LoaderFunction = async () => {
    const res = await fetch(API);
    const data = await res.json();
    console.log(data);
    return json({ data});
};

