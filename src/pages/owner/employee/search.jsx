import React, { useState } from "react";
import Axios from 'axios';
export default function FindItem() {
  const[nameList,SetEmployee]= useState([
   
  ])
  
  const [filteredList, setFilteredList] = new useState(nameList);
  
  const filterBySearch = async(event) => {
   
    const query = event.target.value;
    event.preventDefault();
  try{
      const resp =await Axios.post('http://localhost:8080/users/find',{            
          name:query,
             });
      var respData = resp.data;      
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
          {nameList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
