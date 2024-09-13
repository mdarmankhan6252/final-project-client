import {
   createBrowserRouter
 } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import MainMenu from "../Pages/Menu/MainMenu";


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
      }
     ]
   },
 ]);