import React from 'react'
import ReactDOM from 'react-dom/client'
import {  
  RouterProvider,
} from "react-router-dom";
import './index.scss'
import { router } from './Routes/Index';
import {app} from "./firebaseConfig"
import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <ToastContainer/>
   <RouterProvider router={router} />  
  </React.StrictMode>,
)
