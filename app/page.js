"use client"
import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { DataContext } from '@/context';
import axios from 'axios';

const page = () => {
  const router = useRouter();

  const [Info, setInfo] = useContext(DataContext);


  const WriteHandler = () =>{
    router.push("/write");
  }
  const OurBlogsHandler = () =>{
router.push("/my");

  }
  return (
    <div className='whole' >
      <div className="box">
      <h1>React Based  Blog Application</h1>
      <h3>"Being your true self is the most effective formula for success in Blogging"</h3>
    </div>
 <div className="container">
  <div className="buttonz">
  <button  onClick={WriteHandler}  className='btn btn-warning m-4' >Write Blogs</button>
  </div>
 </div>
    </div>
  )
}

export default page
