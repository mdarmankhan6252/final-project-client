import {
  createBrowserRouter
} from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import MainMenu from "../Pages/Menu/MainMenu";
import Order from "../Pages/Order/Order";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Profile from "../components/Profile";
import PrivateRoute from "./PrivateRoute";
import Secret from "./Secret";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import Users from "../Pages/Dashboard/Users";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/menu',
        element: <MainMenu />
      },
      {
        path: '/order',
        element: <Order />
      },
      {
        path: '/profile',
        element: <Profile />
      },
      {
        path: '/secret',
        element: <PrivateRoute><Secret /></PrivateRoute>
      }
    ]
  },
  {
    path:'dashboard',
    element:<PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      {
        path:'cart',
        element:<Cart/>
      },
      {
        path:'add',
        element:<p>add</p>
      },
      {
        path:'allUsers',
        element:<Users/>
      }
    ]

  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  
]);