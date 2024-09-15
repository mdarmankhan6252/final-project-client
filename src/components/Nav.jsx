import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { IoCartOutline } from "react-icons/io5";

const Nav = () => {
   const { user, logOut } = useContext(AuthContext)

   const navOptions = <>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/menu'>Our Menu</NavLink>
      <NavLink to='/order'>Order Food</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <button className="flex items-center space-x-1 relative">
         <IoCartOutline className="text-2xl"/>
         <span className="absolute -right-5 -top-3 bg-pink-600 px-2 text-white font-semibold rounded-md">0</span>
      </button>
   </>
   return (
      <div className="navbar bg-base-100">
         <div className="navbar-start">
            <div className="dropdown">
               <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-5 py-4 px-2">

                  {
                     navOptions
                  }
               </ul>
            </div>
            <Link to='/' className="font-semibold">
               <h1 className="text-xl">BISTRO BOSS</h1>
               <h3>RESTAURANT</h3>
            </Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 space-x-5">
               {
                  navOptions
               }
            </ul>
         </div>
         <div className="navbar-end">
            {user && <div className="mr-5 space-x-3">
               <Link to='/profile' className=" font-semibold hover:underline">{user?.displayName}</Link>
               <button onClick={() => logOut()} className="btn-sm bg-red-500 font-semibold text-white rounded-sm active:scale-[98%] duration-150">LogOut</button>
            </div>}
            {!user && <a className="btn">Button</a>}
         </div>
      </div>
   );
};

export default Nav;