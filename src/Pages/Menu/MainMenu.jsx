import { Helmet } from "react-helmet-async";
import SharedCover from "../../components/SharedCover";
import img_1 from '../../assets/menu/banner3.jpg'

const MainMenu = () => {
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Menu</title>
         </Helmet>
         <SharedCover img_1={img_1}/>
      </div>
   );
};

export default MainMenu;