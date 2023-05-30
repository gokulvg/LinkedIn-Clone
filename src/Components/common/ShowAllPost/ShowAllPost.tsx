import React, { useMemo, useState } from 'react'
import { getAllStatus } from '../../../api/fireBaseStore'
import SinglePostCard from './SinglePostCard';

const ShowAllPost = () => {
    const [posts,setPost] = useState([]);
    const [count,setCount] =useState("");
    useMemo(async()=>{
       const res = await getAllStatus()
       console.log(res)
       
    
    },[])   
    console.log(posts)
  return (
    <>
    {posts.length >0 ? posts.map(post=>{
        console.log(post.post.time);
        <SinglePostCard post={post.post.post} time={post.post.time} key={post.id} count={count}/>
    }):
    <SinglePostCard post='No Post to display.. please update your status' time='null'/>
    }
    </>
  )
}

export default ShowAllPost