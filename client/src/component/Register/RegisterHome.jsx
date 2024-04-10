import React, {useState} from 'react';
import './RegisterHome.css';
import { FaRegUserCircle,FaLock,FaCalendarAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom'


function CustomInput({value,onClick}){
  return(
    <div className='input-group'>
        <input type='text'  className='form-control' value={value} onClick={onClick} placeholderText="Select Date" readOnly></input>

        <FaCalendarAlt className='icon'/>
    </div>
  );
}

function RegisterHome () {

   const [name,setName]=useState()
   const [email,setEmail]=useState()
   const [password,setPassword]=useState()
   const [date,setDate]=useState()
   const navigate =useNavigate()

   const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:4000/register',{name,email,selectedDate,password})
    .then(result=>{console.log(result)
     navigate('/login')
    })
    .catch(err=>console.log(err))
   }
  



  const[selectedDate,setSelectedDate]=useState(null);
  const handleDateChange = date => {
    setSelectedDate(date);
  };
      
  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <h1 className="register-title">Register</h1>
        <FaRegUserCircle className='user-icon'/>
        <div className="text-field">
          <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} required />
          <FaRegUserCircle className='icon'/>

        </div>
        
        <div className="datePicker">
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            customInput={<CustomInput />}
            dateFormat="MM/dd/yyyy"

          />
        </div>

        <div className="text-field">
          <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} required/>
          <MdEmail className='icon'/>

        </div>
        <div className="text-field">
          <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required/>
          <FaLock className='icon'/>

        </div>
        <button type="submit" className='register-button'>
          Register
        </button>
        <div className='register-link'>
         <p>Already have an account? <a href='#' ><Link to="/login">SIGN IN  </Link></a>  </p>
        </div>
      </form>
     
    </div>
  );
}

export default RegisterHome;


