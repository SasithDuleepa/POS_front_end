import React, { useState } from "react";
import './find.css'
import Axios from 'axios';

export default function Findbill() {

  const[billList,SetEmployee]= useState([
   
  ])
  
  const [filteredList, setFilteredList] = new useState(billList);
  
  const filterBySearch = async(event) => {
    // Access input value
    const query = event.target.value;

    event.preventDefault();
    try{
        const resp =await Axios.post('http://localhost:8080/bills/find',{            
            billname:query,
               });
        var respData = resp.data;   
        console.log(query)   
        SetEmployee(respData)
    } catch(error){console.log(error);} 
    
  };

  
  
  return (
    <div className="App">
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" onChange={filterBySearch} />
      </div>
      <div id="item-list">
        <ol>
          {billList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
