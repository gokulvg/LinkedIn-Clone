import React from 'react';
import "../Sass/LoginComponent.scss"
import { LoginApi, signInApi } from '../api/AuthAPI';
import linkedInLogo from "../assets/linkedInLogo.png"
import {FaRegCompass} from "react-icons/fa";
import {BsPeopleFill} from "react-icons/bs";
import {ImBooks} from "react-icons/im";
import {CgWorkAlt} from "react-icons/cg";
import signupImage from "../assets/singupImage.jpg";
import LoginFormCompoent from './LoginFormCompoent';
import { useNavigate } from "react-router-dom"
import { toast,ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";



const LoginComponent = () => {

  const navigate = useNavigate();

  const onLoginFormSubmitHandler =async ( email:string,password:any) =>{    
    try{
      let res=await LoginApi(email,password);
     toast.success("Signed In Sucessfully")
     navigate("/home")
    }catch(err){
      toast.error("please check email id or password")
    }
  }

  const onSignInClickHandler = ( ) =>{
    navigate("/sign-up")
  }
  return (   
    <div className='login-page-container'>
      <header className='login-header-section'>
        <span className='login-brand-name'>LinkedIn<img src={linkedInLogo} alt='linkedInLogo' className='linkedInLogoIcon'/></span>
        <div className='icon-join-center'>
        <div className='icons-center'>
          <div className='icons'>
            <FaRegCompass/>
            Discover
          </div>
          <div className='icons'>
            <BsPeopleFill/>
            People
          </div>
          <div className='icons'>
            <ImBooks/>
            Learning
          </div>         
          <div className='icons'>
            <CgWorkAlt/>
            Jobs
          </div>
        </div>
        <button className='login-btns' >Join Now</button>
        <button className='login-btns sign-in' onClick={onSignInClickHandler}>Sign In</button>
        </div>
      </header>
      <main className='login-page-main'>
        <section className='login-sign-section'>
          <h5>Welcome to your professional Community</h5>
      <LoginFormCompoent config="login" onFormSubmit= {onLoginFormSubmitHandler}/>
         
        </section>
        <section  className='login-sign-image-section'>
          <img src={signupImage} alt='sign-up' className='sign-up-image'/>
        </section>
      </main>    
    </div> 
   
  )
}

export default LoginComponent