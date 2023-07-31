
import { Link, useActionData, useLoaderData, useLocation } from "@remix-run/react";
import axios from "axios"
import { title } from "process";
import { useState } from "react";
import * as React from 'react';
import ClipLoader from "react-spinners/ClipLoader";

function UpdateForm() {
  
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [spin, setSpin] = useState(false);

  


  function changeHanderUpdate(e:any)
     { setSpin(true); // Show the spinner
      e.preventDefault(e);
      const Title = title;
      const Price = price;
      axios
      .put(`https://api.escuelajs.co/api/v1/products/`+valuesx[2],{
          title: Title,
          price: Price,
        })
        .then((response) => {
          console.log(response);
          setSpin(false); // Hide the spinner
          window.location.replace("/newTabel");
        })
        .catch((error) => {
          console.log(error);
          setSpin(false); // Hide the spinner
          // <PropagateLoader color="#36d7b7" />
        });
    }
    
    let loaction = useLocation();
    const valuesx = (location.pathname.split("/",3))
    
    
  

  return (
    <div>
        {/* Spinner Overlay */}
        {spin && <div className="spinner-overlay" />}
      {/* Spinner */}
      {spin && (
        <div className="spinner-container">
          <ClipLoader color="#ffffff" />
        </div>
      )}
        <div>
        <form
          className="items-center justify-center focus:outline-none"
          onSubmit={changeHanderUpdate}
        >
          <div className="px-6 py-4 pt-6 text-2xl">Update Table</div>
        <div className="grid gap-2 px-4">
            <label className="mx-2 text-lg" htmlFor="Title">
              Title
            </label>
            <input
              className="w-96 rounded-lg border px-2 py-2 outline-none"
              type="text"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              placeholder="Your Title"
              autoComplete="off"
            />
            <p className="text-l px-2 pb-4 text-gray-500">
              give your title here.
            </p>
          </div>
          <div className="grid gap-2 px-4">
            <label className="mx-2 text-lg" htmlFor="Price">
              Price
            </label>
            <input
              className="w-96 rounded-lg border px-2 py-2 outline-none"
              type="text"
              name="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="Price"
              placeholder="Your Price"
              autoComplete="off"
            />
            <p className="text-l px-2 pb-4 text-gray-500">
              give your product price.
            </p>
          </div>
          
          <div> 
          
            <button  className="w-40 rounded-lg border bg-black px-4 ml-4 py-2 pb-2 text-white "
              type="submit"
              onClick={changeHanderUpdate}
            >
              Update Product
            </button>
          
          </div>
           </form>
           
        </div>
    </div>
  )
  }

export default UpdateForm