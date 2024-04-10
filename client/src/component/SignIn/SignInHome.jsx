import React, { useState } from 'react';
import './Home.css';
import { FaRegUserCircle,FaLock } from "react-icons/fa";
import {Link} from 'react-router-dom'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

function SignInHome () {
 const [name,setName]=useState()
 const [password, setPassword] = useState()
 const navigate=useNavigate()
 
 const handleSubmit =(e)=>{
  e.preventDefault()
    axios.post('http://localhost:4000/login',{name,password})
    .then(result=>{console.log(result)
      if (result.data==="Success"){
        navigate('/home')
      }
     
    })
    .catch(err=>console.log(err))
 }
  
  return (
    <div className="login-form">
      <form onSubmit={handleSubmit}>
        <h1 className="login-title">SIGN IN</h1>
        <FaRegUserCircle className='user-icon'/>
        <div className="text-field">
          <input type="text" placeholder="Username"onChange={(e)=>setName(e.target.value)} required />
          <FaRegUserCircle className='icon'/>

        </div>
        <div className="text-field">
          <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
          <FaLock className='icon'/>

        </div>
        <div className="remember-forgot">
          <label><input type="checkbox"/>Remember me</label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">
          Login
        </button>
        <div className='register-link'>
          <p>Don't have an account? <a href='#'><Link to="/register">Register </Link></a> </p>
        </div>
      </form>
     
    </div>
  );
}

export default SignInHome;


