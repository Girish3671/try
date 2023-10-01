"use client"
import React, { useState } from 'react'
import axios from 'axios';
import Link from 'next/link'


const page = () => {
  const [ans, setans] = useState([])

  const user= async ()=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/posts")
    setans(res.data);
  }
 

  return (
    <>
     <button className='bg-red-500 text-white px-2 py-2 m-3 rounded font-bold 'onClick={()=>{
      user();
     }}>Get Data</button>
     <div className='bg-slate-300 text-black px-1 '><ul>
      {
        ans.map((e)=>{
              return <li>{e.title}--- <Link href={`/${e.id}`}>Explore</Link></li>
          
        })
        
      }
      </ul>
      </div>
    </>
  )
}

export default page
