import { log } from "node:console";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Form() {
  const [price, setPrice] = useState("");
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");


  function changeHanderButton(event: any) {
    event.preventDefault();
    console.log( `Id: ${id}`, `Title:${title}`,`Price:${price}`,
    );
    // JSON.stringify()
  }

  return (
    <div className="justify-center content-between py-6 flex flex-row ...">
      <div className="formContainer justify-center  px-2 py-2 bg-gray-200 w-96 border rounded-lg">
        <h1 className="py-0.5 pt-6 text-2xl ">Update Products</h1>
        <p className="pb-6 text-gray-500">
          Update your products details here.
        </p>
        <hr className="py-2" />
        <form
          className="items-center justify-center focus:outline-none"
          onSubmit={changeHanderButton}
        >
          <div className="grid gap-2">
            <label className="text-lg " htmlFor="Id">
              Id
            </label>
            <input
              className="w-80 rounded-lg border py-2 outline-none "
              type="text"
              name="Id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              id="id"
              placeholder="Your Id"
              autoComplete="off"
            />
            <p className="text-l pb-6 text-gray-500">
              This is your products id it should be unique always.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="text-lg " htmlFor="Title">
              Title
            </label>
            <input
              className="w-80 rounded-lg border py-2 outline-none"
              type="text"
              name="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="Title"
              placeholder="Your Title"
              autoComplete="off"
            />
            <p className="text-l pb-6 text-gray-500">
              This is your products title.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="text-lg " htmlFor="Price">
              Price
            </label>
            <input
              className="w-80 rounded-lg border py-2 outline-none"
              type="text"
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="Price"
              placeholder="Your Price"
              autoComplete="off"
            />
            <p className="text-l pb-6 text-gray-500">
              Set the price of your products.
            </p>
          </div>
           <div className="grid gap-2">
            <label className="text-lg " htmlFor="Desc">
              Description
            </label>
            <input
              className="w-80 rounded-lg border py-2 outline-none"
              type="text"
              name="Desc"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              id="Desc"
              placeholder="Your Name"
              autoComplete="off"
            />
            <p className="text-l pb-6 text-gray-500">
              Add description of.
            </p>
          </div>
          <button
            className="w-40 rounded-lg border bg-black py-2 pb-4 text-white"
            type="submit"
            onChange={changeHanderButton}
          >
            Update Products
          </button>
        </form>
      </div>
      
    </div>
  );
}
//  function changeHanderName(event:any) {
//     const names =(event.target.value)
//     setname(names);
//     console.log(names);
//   }

//   function changeHanderLanguage(event:any) {
//     const lanx =(event.target.value)
//     setlan(lanx);
//     console.log(lanx);
//   }
{
  /* <svg  
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mx-6 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg> */
}
// const [user,setUser] = useState({
//   name:"",DateOfBirth:null,Languages:""
// });
// let name,value;
// const handleInputs=(event:any) =>
// {
//   const name =event.target.name;
//   const  value =event.target.value;

//    setUser({...user,[name]:value});
// }
