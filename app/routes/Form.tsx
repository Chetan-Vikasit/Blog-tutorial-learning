import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

export default function Form() {
  const [price, setPrice] = useState("");
  const [categoryId, setCtegoryId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [spin, setSpin] = useState(false);

  function imagesHandel(e: any) {
    const imgurl = e.target.value;
    setImages((prevImage) => [...prevImage, imgurl]);
  }

  function changeHanderButton(e: any) {
  
    setSpin(true); // Hide the spinner
    e.preventDefault(e);
    const CategoryId = categoryId;
    const Title = title;
    const Price = price;
    const Description = description;
    axios
      .post("https://api.escuelajs.co/api/v1/products/", {
        categoryId: CategoryId,
        title: Title,
        price: Price,
        description: Description,
        images: images,
      })
      .then((response) => {
        console.log(response);
        setSpin(false); // Hide the spinner

        window.location.replace("/newTabel");
      })
      .catch((error) => {
        setSpin(false); // Hide the spinner

        console.log(error);
      });
  }

  return (
    <>
     {/* Spinner Overlay */} 
     {spin && <div className="spinner-overlay" />}
      {/* Spinner */}
      {spin && (
        <div className="spinner-container">
          <ClipLoader color="#ffffff" />
        </div>
      )}
    <div className="... flex flex-row px-2">
      <div className="formContainer bg-white-100  w-full justify-center rounded-lg px-2">
        <h1 className="px-2 py-0.5 pt-6 text-2xl">Update Products</h1>
        <p className="px-2 pb-4 text-gray-500">
          Update your products details here.
        </p>
        <hr className="w-1/2 py-2 " />
        <form
          className="items-center justify-center focus:outline-none"
          onSubmit={changeHanderButton}
        >
          <div className="grid gap-2">
            <label className="mx-2 text-lg" htmlFor="categoryId">
              CategoryId
            </label>
            <input
              className="w-96 rounded-lg border px-2 py-2 outline-none"
              type="text"
              name="categoryId"
              value={categoryId}
              onChange={(e) => setCtegoryId(e.target.value)}
              id="categoryId"
              placeholder="Your CatId"
              autoComplete="off"
            />
            <p className="text-l px-2 pb-4 text-gray-500">
              This is your products id it should be unique always.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="px-2 text-lg" htmlFor="Title">
              Title
            </label>
            <input
              className="w-96 rounded-lg border px-2 py-2 outline-none"
              type="text"
              name="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="Title"
              placeholder="Your Title"
              autoComplete="off"
            />
            <p className="text-l px-2 pb-4 text-gray-500">
              This is your products title.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="px-2 text-lg" htmlFor="Price">
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
              Set the price of your products.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="px-2 text-lg" htmlFor="description">
              Description
            </label>
            <input
              className="w-96 rounded-lg border px-2 py-2 outline-none"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              id="description"
              placeholder="Your Name"
              autoComplete="off"
            />
            <p className="text-l px-2 pb-4 text-gray-500">
              Add description of.
            </p>
          </div>
          <div className="grid gap-2">
            <label className="px-2 text-lg" htmlFor="images">
              Images
            </label>
            <input
              className="w-96 rounded-lg border px-2 py-2 outline-none"
              type="text"
              name="images"
              value={images}
              onChange={imagesHandel}
              id="images"
              placeholder="Your Name"
              autoComplete="off"
            />
            <p className="text-l px-2 pb-4 text-gray-500">Add Images URL.</p>
          </div>

          <div className="pb-6 ">
            {" "}
            <button
              className="w-40 rounded-lg border bg-black px-2 py-2 pb-2 text-white "
              type="submit"
              onChange={changeHanderButton}
            >
              Add Products
            </button>{" "}
          </div>
        </form>
      </div>
    </div>
    </>
  );
}


