
import React from 'react';

import './App.css';
import SignInHome from './component/SignIn/SignInHome';
import RegisterHome from './component/Register/RegisterHome';
import Home from './component/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'





function App() {
  return (
   
   <BrowserRouter>
    <Routes>
    <Route path='/' element={<RegisterHome/>}/>
      <Route path='/register' element={<RegisterHome/>}/>
      <Route path='/login' element={<SignInHome/>}/>
      <Route path='/home' element={<Home/>}/>

    </Routes>
   </BrowserRouter>
    
  );
}

export default App;
