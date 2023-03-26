import React, { useState } from 'react'

export default function Add_item() {
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
  const submithandler = (e)=>{
    console.log(data)

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
