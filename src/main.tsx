import React from 'react'
import ReactDOM from 'react-dom/client'
import {  
  RouterProvider,
} from "react-router-dom";
import './index.scss'
import { router } from './Routes/Index';
import {app} from "./firebaseConfig"
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import store from './Store/store';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <ToastContainer/>
     <Provider store={store}>

   <RouterProvider router={router} />  
     </Provider>
  </React.StrictMode>,
)
