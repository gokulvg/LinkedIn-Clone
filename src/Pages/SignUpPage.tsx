import React from 'react'
import LoginFormCompoent from '../Components/LoginFormCompoent'
import {signInApi} from "../api/AuthAPI"

const SignUpPage = () => {
  const signupFormHandler =async (email:string,password:any ) =>{
   try{
    const res = await signInApi(email,password)
    console.log(res)
   }catch(err){
    console.log(err.error.message)
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