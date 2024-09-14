import img_1 from '../../assets/menu/pizza-bg.jpg'
const FoodCard = ({item}) => {
   const { name, recipe, image, price } = item;
   return (
      <div className=" space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B] border">
         <div className='flex items-center justify-center'>
            <img className="rounded-lg object-cover" src={image} alt="items" />
         </div>
         <div className="grid gap-2">
            <h1 className="text-lg font-semibold ">{name}</h1>
            <p className="text-sm text-gray-500 dark:text-white/60">{recipe}</p>
            <div className="text-lg font-semibold">${price}</div>
         </div>
         <div className="">
            <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button>
         </div>
      </div>
   );
};

export default FoodCard;