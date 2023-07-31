import React, { useState } from "react";
import { ActionFunction, LoaderArgs, json } from "@remix-run/node";
import { Link, useActionData, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";

const API = "https://api.escuelajs.co/api/v1/products";

export const loader: LoaderFunction = async ({ params }: LoaderArgs) => {
  const { productid } = params;
  console.log(params);
  const res = await fetch(API);
  const data = await res.json();
  return json({ data });
};

export default function Tabel() {
  const [spin, setSpin] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;

  const { data } = useLoaderData<typeof loader>();

  function deleteButton(value: any) {
    setSpin(true); // Show the spinner

    axios
      .delete(`https://api.escuelajs.co/api/v1/products/${value}`)
      .then((response) => {
        console.log(response.data);
        setSpin(false); // Hide the spinner

        window.location.replace("/newTabel");
      })
      .catch((error) => {
        console.log(error);
        setSpin(false); // Hide the spinner in case of an error
      });
  }

  // Calculate the index range for the current page
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentItems = data.slice(firstIndex, lastIndex);

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

      <div className="flex flex-row justify-between align-middle">
        <div className="mt-2 px-10 py-2 text-2xl md:w-1/2 md:text-xl">
          <h1>Products Table</h1>
        </div>
        <div className="mx-auto max-w-md ">
          <div className="relative mb-2 mt-2 flex h-12 w-full items-center overflow-hidden rounded-lg border bg-white focus-within:shadow-lg">
            <div className="grid h-full w-12 place-items-center text-gray-300 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              className="peer h-full w-full pr-2 text-sm text-gray-900 outline-none"
              type="text"
              id="search"
              placeholder="Search something...."
            />
          </div>
        </div>
        <div className="py-2">
          <Link to="/Form">
            <button className=" ... mr-10 rounded-lg bg-indigo-400  px-4 py-2 align-middle text-base transition delay-150 duration-300 ease-in-out hover:bg-indigo-600 ">
              Add Product
            </button>{" "}
          </Link>
        </div>
      </div>

      <div className="px-10">
        <table className="w-full table-auto text-center text-white">
          <thead className="h-14 border bg-gray-500 pb-4 align-middle text-xl">
            <tr>
              <th className="px-6">Id</th>
              <th>Title</th>
              <th>Price</th>
              <th className="px-12 text-left">Description</th>
              <th className="px-6 text-left"></th>
              <th className="px-6 text-left"></th>
            </tr>
          </thead>
          <tbody className="border">
            {/* Display the current items */}
            {currentItems.map((item: any) => (
              <tr
                className="h-12 border border align-middle text-black odd:bg-gray-200"
                key={item.id}
              >
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td className="px-12 text-left">{item.description}</td>
                <td>
                  <button
                    className="... rounded-lg bg-red-300  px-4 py-2 text-left align-middle text-sm hover:bg-red-500"
                    value={item.id}
                    onClick={() => deleteButton(item.id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <Link to={`/updateForm/${item.id}`}>
                    <button
                      className="... ml-4 mr-2 rounded-lg bg-green-300  px-4 py-2 text-right align-middle text-sm hover:bg-green-500"
                    >
                      Update
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 mx-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Prev
        </button>
        <button
          className="px-4 py-2 mx-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500"
          disabled={currentItems.length < itemsPerPage}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}
