
const MenuItem = ({item}) => {
   const {name, image, price, recipe} = item;
   return (
      <div className="flex space-x-5 justify-between items-center">
         <div>
            <img src={image} alt="" className="w-[120px] h-[80px] rounded-tr-[35px] rounded-br-[35px] rounded-bl-[35px]"/>
         </div>
         <div>
            <h3 className="uppercase md:text-lg text-[14px]">{name} ------------</h3>
            <p className="text-sm md:text-[15px]">{recipe}</p>
         </div>
         <p className="text-amber-600 font-semibold">${price}</p>
      </div>
   );
};

export default MenuItem;