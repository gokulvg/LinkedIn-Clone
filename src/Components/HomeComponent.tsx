import React from 'react'
import PostUpdate from './common/PostUpdate/PostUpdate'
import "./common/common.scss"
import ShowAllPost from './common/ShowAllPost/ShowAllPost'

const HomeComponent = () => {
  return (
    <div className='home-area-section'>
    <PostUpdate/>
   <ShowAllPost/>
    </div>
  )
}

export default HomeComponent