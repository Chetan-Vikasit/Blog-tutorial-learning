import React from 'react'

export default function userData(users:any) {
  return (
    <div>{
        users.map((item:any) =>
        {
         const {id,title,price,description} = item;
         return <tr className='bg-gray-400 h-12 align-middle border'> 
            <td>{id}</td>
            <td>{title}</td>
            <td>{price}</td>
            <td>{description}</td>
            </tr>
        
        })
    }</div>
  )
}
