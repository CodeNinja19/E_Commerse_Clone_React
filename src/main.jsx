import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Contact from "./pages/Contact.jsx"
import Groceries from "./pages/Groceries.jsx"
import Juices from "./pages/Juices.jsx"
import Everything from './pages/Everything.jsx'
import Purchases from './pages/Purchases.jsx'

import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/About",
        element:<About/>,
      },
      {
        path:"/Contact",
        element:<Contact/>,
      },
      {
        path:"/Everything",
        element:<Everything/>,
      },
      {
        path:"/Juices",
        element:<Juices/>,
      },
      {
        path:"/Groceries",
        element:<Groceries/>,
      },
      {
        path:"/Purchases",
        element:<Purchases/>,
      }
    ]
  },
  
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)











