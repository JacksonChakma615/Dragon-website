import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Layout/Pages/Home";
import CategoryNews from "../Layout/Pages/CategoryNews";
import Login from "../Layout/Pages/Login";
import Register from "../Layout/Pages/Register";
import AuthLayout from "../Layout/AuthLayout";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
        {
         path:"/",
         element:<Home></Home>
        },
        {
         path:"/category/:id",
         element:<CategoryNews></CategoryNews>,
         loader:()=> fetch("/news.json")
        },
    ]
    
  },
  
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
      {
        path:'/auth/login', 
        Component:Login
      },
      {
        path:'/auth/register', 
        Component:Register
      },

    ]
  },
  {
    path: "/news",
    element: <h1> news layout</h1>,
  },
  {
    path: "/*",
    element: <h1>error</h1>,
  }
]);

export default router