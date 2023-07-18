import React, { useEffect, useState } from "react";
import Form from "./Form.tsx";
const API = "https://api.escuelajs.co/api/v1/products";

export default function Overview() {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const fetchUser = async (url: RequestInfo | URL) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchUser(API);
  }, []);
  const openForm = () => {
    setShowForm(true);
  };
  return (
    <>
      {/* // < className="lg:w-3/2 ... grid grid-cols-1 place-items-center bg-gray-900 lg:pb-12 pb-4"> */}
      <h1 className="pb-4 pt-4 text-center font-mono text-2xl text-black ">
        PRODUCTS
      </h1>
      <div className="grid grid-cols-1 place-items-center">
        <table className="w-[1/2] table-auto text-center text-white lg:w-[3/2] ">
          <thead className="h-14 bg-gray-700 pb-4 align-middle text-xl ">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {users.slice(0, 8).map((item: any) => (
              <tr
                className="h-12 border bg-gray-400 align-middle"
                key={item.id}
              >
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pt-4">
          <button className="h-12 w-36 rounded-lg bg-sky-200 font-famiy-sanrif" onClick={openForm}>
            Add Products
          </button>
          

        </div>
      </div> {showForm && <Form />}
    </>
   
  );
}
