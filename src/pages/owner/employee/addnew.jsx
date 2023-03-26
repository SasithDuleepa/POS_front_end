import React, { useState } from 'react'

export default function Addnew() {
  const[data,setData]= useState({
    name:"",
    email:"",
    mobile:"",
    address:"",
    Id:"",
    user:"",
    password:""

  })
  const handlechange=(e)=>{
    const newdata = {...data}
    newdata[e.target.id]= e.target.value
    setData(newdata)        
 }
 const handlesubmit=(e)=>{
    console.log(data)
 }
  return (
    <div className='add_employee'>
      <form onSubmit={(e)=>handlesubmit(e)}>
      <p className='add_head'>enter deatails</p>
      <p className='add_lable'>name:<input id='name' value={data.name} onChange={(e)=>handlechange(e)} className='add_input0' type='text'/></p>
      <p className='add_lable'>E-mail:<input id='email' value={data.email} onChange={(e)=>handlechange(e)} className='add_input1' type='text'/></p>
      <p className='add_lable'>mobile no.:<input id='mobile' value={data.mobile} onChange={(e)=>handlechange(e)} className='add_input2' type='text'/></p>
      <p className='add_lable'>address:<input id='address' value={data.address} onChange={(e)=>handlechange(e)} className='add_input3' type='text'/></p>
      <p className='add_lable'>Id. no. :<input id='Id' value={data.Id} onChange={(e)=>handlechange(e)} className='add_input4' type='text'/></p>
      <p className='add_lable'>user type:<input id='user' value={data.user} onChange={(e)=>handlechange(e)} className='add_input5' type='text'/></p>
      <p className='add_lable'>password:<input id='password' value={data.password} onChange={(e)=>handlechange(e)} className='add_input6' type='text'/></p>
      

      <button className='add_btn'>Submit</button>
      </form>
    </div>
  )
}
