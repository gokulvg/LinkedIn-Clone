import React from 'react'
import { Spin } from 'antd';
import "./common.scss"

const Loader = () => {
  return (
    <div className='loader'>
        <p>Loading... Please wait</p>
        <Spin/>
    </div>
  )
}

export default Loader