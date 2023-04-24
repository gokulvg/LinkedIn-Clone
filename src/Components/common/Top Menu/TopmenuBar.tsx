import React from 'react'
import linkedInLogo from "../../../assets/linkedInLogo.png"
import {FaHome} from "react-icons/fa";
import {BsFillPeopleFill} from "react-icons/bs";
import {RiSuitcaseFill} from "react-icons/ri";
import {AiFillMessage} from "react-icons/ai";
import {IoIosNotifications} from "react-icons/io";
import user from  "../../../assets/user.png"
import "./TopmenuBar.scss"
import { useNavigate } from 'react-router-dom';

const TopmenuBar = () => {
  const navigate = useNavigate()
  
  const iconNavigationRoute = ( route:string) =>{
    navigate(route)
  }
 
  return (
    <div className='top-menu-bar'>
     <div className='logo-search-section'> 
        <img src={linkedInLogo} alt="linked in logo" className='linkedInLogoIcon' />
        <input type='text' placeholder='search' id='linkedInSearch-input' className='linkedInSearch' />
     </div>
     <div className='linkedInIcons-section'>
      <div className="linkedInIcons" onClick={()=>iconNavigationRoute('/home')}>
        <FaHome size='1.3rem'  className='icon'/>
        Home
      </div>
      <div className="linkedInIcons" onClick={()=>iconNavigationRoute('/networks')}>
        <BsFillPeopleFill size='1.3rem' />
       Networks
      </div>
      <div className="linkedInIcons" onClick={()=>iconNavigationRoute('/jobs')}>
        <RiSuitcaseFill size='1.3rem' />
        Jobs
      </div>
      <div className="linkedInIcons" onClick={()=>iconNavigationRoute('/message')}>
        <AiFillMessage size='1.3rem' />
        Message
      </div>
      <div className="linkedInIcons" onClick={()=>iconNavigationRoute('/notification')}>
        <IoIosNotifications size='1.3rem' />
        Notifications
      </div>
      <div className="linkedInIcons" onClick={()=>iconNavigationRoute('/profile')}>
        <img src={user} alt="user icon" className='user-icon'/>
        User
      </div>
     </div>

    </div>
  )
}

export default TopmenuBar