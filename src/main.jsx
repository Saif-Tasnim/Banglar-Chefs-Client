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
import ChefLayout from './layout/ChefLayout.jsx';
import ChefDetails from './Components/ChefDetails/ChefDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import PrivateRoute from './privateRoutes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://banglar-chefs-server-side.vercel.app/chefs'),


      },
      {
        path: 'login',
        element: <LogIn></LogIn>,
      },
      {
        path: 'blog',
        element: <Blog></Blog>,

      },
      {
        path: "register",
        element: <Register></Register>,

      }
    ],
    errorElement: <ErrorPage />
  },
  {
    path: 'chefsDetails',
    element: <ChefLayout></ChefLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoute><ChefDetails></ChefDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://banglar-chefs-server-side.vercel.app/chefsDetails/${params.id}`),

      }

    ],
    errorElement: <ErrorPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}> </RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
