import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Menu from './pages/Menu.jsx';
import Checkout from './pages/Checkout.jsx';
import Payment from './pages/Payment.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div><App/></div>,
  },
  {
    path: "/menù",
    element: <div><Menu/></div>,
  },
  {
    path: "/ordine",
    element: <div><Checkout/></div>,
  },
  {
    path: "/pagamento",
    element: <div><Payment/></div>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
