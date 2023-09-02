"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect  , useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import JoditEditor from "jodit-react";


const write = () => {

  const router = useRouter();


const [formdata, setformdata] = useState({
content:'',
title:''
});


const [Data, setData] = useState([]);

 const ViewData = async () =>{
  try {
   const response1 = await axios.get("http://localhost:3000/viewdata");
   setData(response1.data);
  } catch (error) {
    console.log(error);
  }
 }
    const ChangeHandler = (e) =>{
      const {name , value} = e.target;
    setformdata({...formdata , [name] : value});
    // console.log(formdata);
  
    }
    const handleSubmit = async (e) =>{
      e.preventDefault();
      try {
      const response = await fetch("http://localhost:3000/adddata" , {
            
      method:'POST',
      headers:{
      'Content-Type': 'application/json'
       },
       body:JSON.stringify(formdata)
      });
      if(response.ok){
        console.log("Data submitted successfully");
        ViewData();
       
      }
      else{
        console.log("Error")
      }


      } catch (error) {
        console.error('Error:'); 
      }
      
    }
  useEffect(()=>{
ViewData();
  },[])
  const ReadMore = () =>{
   
  }


  return (
    <div>
    <div className="write">
      <h2>Start Writing Your Thoughts Today...</h2>
      <div className="all">
        <form onSubmit={handleSubmit} >
          <JoditEditor
          value={formdata.content}
          onChange={(newContent)=>setformdata({...formdata , content:newContent})}
          className="my-jodit-editor"
          />
           {/* <textarea placeholder="Start Writing" name="content" type="text" onChange={ChangeHandler}></textarea>      */}
           <input  onChange={ChangeHandler} name="title" type="text" placeholder="Blog Title.." />
            <input className="submit" type="submit"value='Publish' />
          </form>
      </div>
      <h2>Your Blog List Will Appear Down Here...</h2>
      <ul>
        {Data.map((item) => (
          <li key={item._id}>
            <p><b>Title : {item.Title}</b></p>
            {/* <p>Age: {item.Description}</p> */}
          <Link href={`/data/${item._id}`}><button className="btn btn-danger">Read More...</button></Link> 
            {/* Add other properties as needed */}
          </li>
        ))}
      </ul>

    </div>

    </div>
  );
};

export default write;
