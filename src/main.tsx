import React from 'react'
import ReactDOM from 'react-dom/client'
import {  
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Index';
import {app} from "./firebaseConfig"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
