import React, { useEffect, useState } from 'react'
import HomeComponent from '../Components/HomeComponent'
import {onAuthStateChanged } from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebaseConfig'

import Loader from '../Components/common/Loader'

const HomePage = () => {
    const[loader,setLoader] = useState(true);
    let navigate = useNavigate();
    useEffect(()=>{
        onAuthStateChanged(auth,(res)=>{
            if(!res?.accessToken){                
                navigate("/")
            }else{
                setLoader(false)
              }
        })
    },[])
  return (
    loader?<Loader/>:<HomeComponent/>
  )
}

export default HomePage