import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
const [data,setData] = useState([]);
useEffect(()=>{
    fetch("http://localhost:4000/")
    .then( (response) => response.json())
    .then((data)=> setData(data));
},[]);
function Student() {
  return (
    <div>
      {
        data.map((result , index)=>(
                <div key={index}>
                    <h4>{result.name}</h4>
                </div>
            )
        )
      }
    </div>
  )
}

export default Student;
