import React, { useEffect, useState } from 'react'
import LoginComponent from '../Components/LoginComponent'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebaseConfig'
import { useNavigate } from 'react-router-dom'
import { Spin } from 'antd';


const LoginPage = () => {
  const[loader,setLoader] = useState(true);
  const navigate = useNavigate()
useEffect(()=>{
  onAuthStateChanged(auth,(res)=>{
    if(res?.accessToken){
      navigate("/home")
    }else{
      setLoader(false)
    }
  })
},[])
  
  return (
    loader?<Spin/>:<LoginComponent/> 
  )
}

export default LoginPage