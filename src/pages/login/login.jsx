import React, { useState } from 'react'
import './login.css'

export default function Login() {
    const[Response, setResponse]= useState("")
    const[data,setData]= useState({
        name:"",
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
    <div className='Login'>
        <p className='login_shopname'>ABC shopping center</p>
        <div className='login_frame'>
          
            <p className='login_title'>log in to the system</p>
            <form onSubmit={(e)=>handlesubmit(e)}>
            <p className='input_label'>name   :    <input className='name_input'   id='name' onChange={(e)=>handlechange(e)} value={data.name} type='text'/></p>
            <p className='input_label'>password: <input id='password' onChange={(e)=>handlechange(e)} value={data.password} type="text"/></p>
            <button className='login_btn'>logIn</button>
            <p>{Response}</p>
            </form>
        </div>
    </div>
  )
}
