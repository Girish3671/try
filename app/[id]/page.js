"use client"
import axios from 'axios';
import { stringify } from 'postcss';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
  const [pagecontent, setpagecontent] = useState([])
  const {id}=params;
  const nam= async()=>{
    const response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setpagecontent(response.data);
  }
  
  
 useEffect(() => {
   nam();
 }, [])
 
  return (
    <div> {
      <li>{JSON.stringify(pagecontent)}</li>
      }</div>
  )
}

export default page