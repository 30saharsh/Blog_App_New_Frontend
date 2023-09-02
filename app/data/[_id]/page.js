


"use client";
import React from 'react'
import { useParams } from 'next/navigation'
import { useState , useEffect } from 'react';
import axios from 'axios';


const page = () => {
const params = useParams();

const [Data, setData] = useState([]);

const handleSendData = async () => {
    try {
    
      const jsonData = JSON.stringify(params);

    
      const response = await fetch('http://localhost:3000/datafromfe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', 
        },
        body: jsonData, 
      });
   
      const data = await response.json();
      setData(data.Description)
    //   console.log('Response from backend:', data);
    } catch (error) {
      console.error('Error sending data to the backend:', error);
    }
  };
useEffect(()=>{
handleSendData();
},[])

  return (
    <div className='dynamic' >
      {/* <div className="up">
        <h1>{Data.Title}</h1>
        </div> */}
      <div className="down">
      <div dangerouslySetInnerHTML={{ __html: Data }} />

      </div>
    </div>
 
  )
}

export default page
