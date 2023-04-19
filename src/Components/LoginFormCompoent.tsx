import React from 'react';
import GoogleButton from 'react-google-button'
import "../Sass/LoginComponent.scss";

const LoginFormCompoent = (props:any) => {

    const onFormSubmitHandler = (e:any) =>{
        e.preventDefault();       
        props.onFormSubmit(e.target.email.value,e.target.password.value)
    }
  return (
    <div className='login-form-container'>
    <form className='login-form' onSubmit={onFormSubmitHandler} >
    <div className='login-in-container'>
      <label className='login-in-label' >Email ID</label>
      <br/>
      <input type='text' name='email' className='login-in-cred'/>
    </div>
    <div className='login-in-container'>
      <label className='login-in-label' >Password</label>
      <br/>
      <input type='password' name='password' className='login-in-cred'/>
    </div>
    {props.config ==="login"?<div className='login-in-container forgot-password'>Forgot Password?</div>:<br/>}
    <button className='sign-in-btn' type='submit'>
     {props.config==="login"? "Sign in" : "sign up"}
    </button>
    </form>
        
          <br/>
          <hr/>
    <GoogleButton className='google-login-btn' onClick={() => { console.log('Google button clicked') }} />     

    </div>
  )
}

export default LoginFormCompoent