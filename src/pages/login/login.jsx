import React, { useState, useEffect } from 'react'
import './login.css'
import { useHistory } from 'react-router-dom';

export default function Login() {
    const history = useHistory();
    const url = "";
    const[Response, setResponse]= useState("cashier")
    const[loginLink, setLoginLink]= useState("/owner")
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

   
     
  

      const handleclick=()=>{
        if(Response==="owner"){history.push("/owner");}
            else if(Response==="cashier"){history.push("/cashier");}
            else if(Response==="stock keeper"){history.push("/stock_keeper");}
            else{history.push("/log_in");}
      }
  return (
    <div className='Login'>
        <p className='login_shopname'>ABC shopping center</p>
        <div className='login_frame'>
          
            <p className='login_title'>log in to the system</p>
            <form onSubmit={(e)=>handlesubmit(e)}>
            <p className='input_label'>name   :    <input className='name_input'   id='name' onChange={(e)=>handlechange(e)} value={data.name} type='text'/></p>
            <p className='input_label'>password: <input id='password' onChange={(e)=>handlechange(e)} value={data.password} type="text"/></p>
            <button className='login_btn' onClick={handleclick} >logIn</button>
            <p>{Response}</p>
            </form>
        </div>
    </div>
  )
}
