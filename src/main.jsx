import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Home from './Components/HomePage/Home/Home.jsx';
import LogIn from './Components/LogIn/LogIn/LogIn.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Register from './Components/LogIn/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('http://localhost:5000/chefs')
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path : 'blog',
        element: <Blog></Blog>
      },
      {
        path:"register",
        element: <Register></Register>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}> </RouterProvider>
  </React.StrictMode>,
)
