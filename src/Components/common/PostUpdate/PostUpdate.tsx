import React, { useRef, useState } from 'react';
import user from "../../../assets/user.png"
import { HiPhoto } from 'react-icons/hi2';
import { FcVideoCall } from 'react-icons/fc';
import { MdEventRepeat } from 'react-icons/md';
import { BsNewspaper } from 'react-icons/bs';
import "./PostUpdate.scss"
import ModalComponent from '../Modal/ModalComponent';
import { postStatus } from '../../../api/fireBaseStore';
import { toast } from 'react-toastify';

const PostUpdate = () => {
  const [statusUpdated,setStatusUpdate] = useState('');

  const modalRef = useRef();

  const onPostUpdateBtnClickhandler = ( ) =>{
    modalRef.current.onSetModalOpen()
  }
  const setStatusUpdateHandler = (status:string) =>{
    setStatusUpdate(status)
  }
  const postStautusHandler = async() =>{
    const res = await postStatus(statusUpdated);
    console.log(res?.id)
    if(res?.id){
      toast.success("Post has been added")
      setStatusUpdate("")
    }
  }

  return (
    <>
    <div className='post-update-section'> 
      <div className="post-update-section-header">
        <img src={user} alt="user logo" className='user-logo'/>
        <button className='post-update-btn' onClick={onPostUpdateBtnClickhandler}>Start a post</button>
      </div>
      <div className="post-update-section-bottom">
       <span className='post-update-section-upload'>
        <HiPhoto color='blue'/>
        Photo
       </span>
       <span className='post-update-section-upload'>
        <FcVideoCall color='green'/>
        Video
       </span>
       <span className='post-update-section-upload'>
        <MdEventRepeat color='orange'/>
        Event
       </span>
       <span className='post-update-section-upload'>
        <BsNewspaper color='red'/>
        Write an article
       </span>
      </div>
    </div>
    <ModalComponent ref={modalRef} statusUpdate = {statusUpdated} setStatusUpdate={setStatusUpdateHandler} onSetModalOpen = {onPostUpdateBtnClickhandler} postStautusHandler={postStautusHandler}/>
    </>
  )
}

export default PostUpdate