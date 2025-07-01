import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider} from "react-router";
import router from './routers/router.jsx';
import { Toaster } from 'react-hot-toast';
import './App.css'
import AuthProvider from './Context/AuthProvider.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AuthProvider>
    <Toaster/>
     <RouterProvider router={router} />
    </AuthProvider>
  // </StrictMode>,
)
