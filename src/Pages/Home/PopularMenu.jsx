import MenuItem from "../../components/MenuItem";
import useMenu from "../../Hooks/useMenu";

const PopularMenu = () => {

   const [menu] = useMenu()
   const popular = menu.filter(item => item.category === 'popular')
   
   return (
      <div>

         <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {
               popular.map((item, i) => <MenuItem key={i} item={item}></MenuItem>)
            }
         </div>

         
      </div>
   );
};

export default PopularMenu;