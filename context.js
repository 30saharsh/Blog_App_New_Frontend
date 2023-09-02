"use client"
import React, { createContext } from 'react'
import { useState } from 'react';


export const DataContext = createContext(null); 

const DataStore = (props) => {
    const [data, setdata] = useState([]);
  return (
    <div>
        <DataContext.Provider value={[data, setdata]} >{props.children}</DataContext.Provider>
      
    </div>
  )
}

export default DataStore;
