import React from 'react'
import LoginFormCompoent from '../Components/LoginFormCompoent'
import {signInApi} from "../api/AuthAPI"
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const SignUpPage = () => {
  const navigate = useNavigate()
  const signupFormHandler =async (email:string,password:any ) =>{
   try{
    const res = await signInApi(email,password)
    toast.success("sign up sucessful");
    navigate("/home")

   }catch(err){
    toast.error("something error")
   }
  }
  return (
    <div className='sign-up-form-container'>
        <h3>New to Linked in?</h3>
        <h4>Sign-up here</h4>
        <LoginFormCompoent config="signup" onFormSubmit= {signupFormHandler}/></div>
  )
}

export default SignUpPage