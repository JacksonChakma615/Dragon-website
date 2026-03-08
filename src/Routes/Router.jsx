import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Layout/Pages/Home";
import CategoryNews from "../Layout/Pages/CategoryNews";

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
        },
    ]
    
  },
  {
    path: "/auth",
    element: <h1>Authentication Layout </h1>,
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