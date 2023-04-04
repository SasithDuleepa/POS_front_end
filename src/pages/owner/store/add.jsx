import React, { useState } from 'react'
import Axios from 'axios';

import './store.css'
export default function Addnewitem() {
  const[data,setData]= useState({
    itemName:"",
    rentalPrice:"",
    takenPrice:"",
    quantity:""
  })

  const changehandler=(e)=>{
    const newdata = {...data}
    newdata[e.target.id]=e.target.value
    setData(newdata)

  }
  const submithandler = async(e)=>{
    e.preventDefault();
  try{
      const resp =await Axios.post('http://localhost:8080/items',{            
          item:data.itemName,
          sale_price:data.rentalPrice,
          taken_price:data.takenPrice,
          quantity:data.quantity     });
     
      console.log(resp.data)
      // history.push("../v4u");
  } catch(error){console.log(error);
  } 

  }
  return (
    <div className='add_item'>
      <form onSubmit={(e)=>submithandler(e)}>
      <p className='add_head'>add a new item</p>
      <p className='storeadd'>item name:<input id='itemName' value={data.itemName} onChange={(e)=>changehandler(e)} className='storeadd_1'/></p>
      <p className='storeadd'>rentel price:<input id='rentalPrice' value={data.rentalPrice} onChange={(e)=>changehandler(e)} className='storeadd_2'/></p>
      <p className='storeadd'>taken price:<input id='takenPrice' value={data.takenPrice} onChange={(e)=>changehandler(e)} className='storeadd_3'/></p>
      <p className='storeadd'>quantity:<input id='quantity' value={data.quantity} onChange={(e)=>changehandler(e)} className='storeadd_4'/></p>
      <button className='srore_add'>Submit</button>
      </form>
    </div>
  )
}
