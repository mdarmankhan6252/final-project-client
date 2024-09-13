import { useEffect, useState } from "react";
import MenuItem from "../../components/MenuItem";

const PopularMenu = () => {

   const [menu, setMenu] = useState([])
   useEffect(() =>{
      fetch('fake.json')
      .then(res => res.json())
      .then(data =>{
         const popularItems = data.filter(item => item.category === 'popular');
         setMenu(popularItems)
      })
   },[])
   return (
      <div>

         <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {
               menu.map((item, i) => <MenuItem key={i} item={item}></MenuItem>)
            }
         </div>

         
      </div>
   );
};

export default PopularMenu;