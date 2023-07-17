import { log } from 'console';
import React from 'react'
import { useEffect,useState } from 'react'
import userData from "./userData";
const API = "https://api.escuelajs.co/api/v1/products";


export default function overview() 
{ 
  const [users,setUsers]= useState([]);
  const fetchUser = async(url: RequestInfo | URL)=>{
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("data",data);
      if(data.length>0)
      {
        setUsers(data);
      }
      
      
    } catch (error) {
      console.log(error);
    }
    
  }
  useEffect(() => {
    fetchUser(API);
  },[])

  return ( 
  <div className='grid grid-cols-1 w-3/2 pb-12 bg-gray-100 place-items-center ...'> 
    <h1 className='text-2xl pb-4 pt-4 font-mono text-black '>PRODUCTS</h1>
        <table className="table-auto border w-1/2 text-center place-items-center text-white">
            <thead className=' text-xl pb-4 h-14 bg-gray-700 align-middle ' > 
             <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
             </tr>
             </thead>
            <tbody>
              {/* <userData users = {users} /> */}
             {
               users.map((item:any) =>(
        
        //  const {id,title,price,description} = item;
          <tr className='bg-gray-400 h-12 align-middle border' key={item.id}> 
             <td>{item.id}</td>
             <td>{item.title}</td>
             <td>{item.price}</td>
             <td>{item.description}</td>
          </tr>
        
        ))
    }
            </tbody>
            
            {/* <tr className='bg-gray-400 h-12 align-middle border' > 
            <td>9876</td>
            <td>Car</td>
            <td>10000</td>
            <td>Very fast driving car</td>
            </tr>
            <tr className='bg-gray-400 h-12 align-middle border'> 
            <td>9877</td>
            <td>Bus</td>
            <td>90000</td>
            <td>Very fast driving car</td>
            </tr>
            <tr className='bg-gray-400 h-12 align-middle border'> 
            <td>9877</td>
            <td>Truck</td>
            <td>100000</td>
            <td>Very fast driving car</td>
            </tr>
            <tr className='bg-gray-400 h-12 align-middle border'> 
            <td>9877</td>
            <td>Truck</td>
            <td>100000</td>
            <td>Very fast driving car</td>
            </tr>
            <tr className='bg-gray-400 h-12 align-middle border'> 
            <td>9877</td>
            <td>Truck</td>
            <td>100000</td>
            <td>Very fast driving car</td>
            </tr>
            <tr className='bg-gray-400 h-12 align-middle border'> 
            <td>9877</td>
            <td>Truck</td>
            <td>100000</td> 
            <td>Very fast driving car</td>
            </tr>
            <tr className='bg-gray-400 h-12 align-middle border'> 
            <td>9877</td>
            <td>Truck</td>
            <td>100000</td>
            <td>Very fast driving car</td>
            </tr> */}
        </table>
    </div>
  
  )
}
