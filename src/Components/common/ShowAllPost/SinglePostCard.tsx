import React from 'react'
import user from "../../../assets/user.png"
import moment from 'moment'
import "./SinglePostCard.scss"

const SinglePostCard = ({post,time,count}:{post:string,time:string,count:string}) => {
    console.log(post)
  return (
    <div className='singlePostCard'>
        {time !=="null" ?  <header className='postHeader'>
            <section className='postheadername'>
        <img src={user}/>        
        <div className='user-details'>
            <p>Gokul VG</p>
            <p className='post-time'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
            </section>
        <p className='moreOption'>...</p>
        </header>:""}
      
        <main className='postMainSection'>
            <p className='posts'>{post}</p>
        </main>
    </div>
  )
}

export default SinglePostCard