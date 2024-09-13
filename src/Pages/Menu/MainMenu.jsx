import { Helmet } from "react-helmet-async";
import SharedCover from "../../components/SharedCover";
import img_1 from '../../assets/menu/banner3.jpg'
import img_2 from '../../assets/menu/pizza-bg.jpg'
import img_3 from '../../assets/menu/salad-bg.jpg'
import img_4 from '../../assets/menu/soup-bg.jpg'
import img_5 from '../../assets/menu/dessert-bg.jpeg'

import PopularMenu from "../Home/PopularMenu";

const MainMenu = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Menu</title>
         </Helmet>
         <SharedCover img_1={img_1} title="our menu" />
         <div className="my-20">
            <PopularMenu />
            <div className="my-6 text-center">
               <button className="border-b-4 rounded-xl border-black py-2 px-4 hover:bg-black hover:text-white font-semibold duration-200">order your favorite food</button>
            </div>
         </div>

         <SharedCover img_1={img_2} title="disserts" />
         
         <div className="my-20">
            <PopularMenu />
            <div className="my-6 text-center">
               <button className="border-b-4 rounded-xl border-black py-2 px-4 hover:bg-black hover:text-white font-semibold duration-200">order your favorite food</button>
            </div>
         </div>


         <SharedCover img_1={img_3} title="pizza" />
         
         <div className="my-20">
            <PopularMenu />
            <div className="my-6 text-center">
               <button className="border-b-4 rounded-xl border-black py-2 px-4 hover:bg-black hover:text-white font-semibold duration-200">order your favorite food</button>
            </div>
         </div>

         <SharedCover img_1={img_4} title="salads" />

         <div className="my-20">
            <PopularMenu />
            <div className="my-6 text-center">
               <button className="border-b-4 rounded-xl border-black py-2 px-4 hover:bg-black hover:text-white font-semibold duration-200">order your favorite food</button>
            </div>
         </div>

         <SharedCover img_1={img_5} title="soups" />

         <div className="my-20">
            <PopularMenu />
            <div className="my-6 text-center">
               <button className="border-b-4 rounded-xl border-black py-2 px-4 hover:bg-black hover:text-white font-semibold duration-200">order your favorite food</button>
            </div>
         </div>

      </div>
   );
};

export default MainMenu;