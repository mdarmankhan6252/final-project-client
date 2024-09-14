import {
   createBrowserRouter
 } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import MainMenu from "../Pages/Menu/MainMenu";
import Order from "../Pages/Order/Order";


export const router = createBrowserRouter([
   {
     path: "/",
     element: <Root/>,
     children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/menu',
        element:<MainMenu/>
      },
      {
        path:'/order',
        element:<Order/>
      }
     ]
   },
 ]);