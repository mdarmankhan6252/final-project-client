import MenuItem from "../../components/MenuItem";

const MenuCategory = ({items}) => {
   return (
      <div className="space-y-6 grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {
               items.map((item, i) => <MenuItem key={i} item={item}></MenuItem>)
            }
         </div>
   );
};

export default MenuCategory;