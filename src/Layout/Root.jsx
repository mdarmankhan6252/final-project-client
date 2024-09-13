import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const Root = () => {
   return (
      <div className="px-3 max-w-7xl mx-auto">
         <Nav/>
         <Outlet/>
         <Footer/>         
      </div>
   );
};

export default Root;