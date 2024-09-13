import img_1 from '../../assets/menu/banner3.jpg'
import img_2 from '../../assets/menu/pizza-bg.jpg'
import img_3 from '../../assets/menu/salad-bg.jpg'

const Chefs = () => {
   return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
         <div className=" space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B] border">
            <div className='flex items-center justify-center'>
               <img  className="rounded-lg object-cover" src={img_1} alt="items" />
            </div>
            <div className="grid gap-2">
               <h1 className="text-lg font-semibold ">Ceaser Salad</h1>
               <p className="text-sm text-gray-500 dark:text-white/60">This is a brief description of the product. It highlights the key features and benefits.</p>
               <div className="text-lg font-semibold">$99.99</div>
            </div>
            <div className="">
               <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button>
            </div>
         </div>
         <div className=" space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B] border">
            <div className='flex items-center justify-center'>
               <img  className="rounded-lg object-cover" src={img_2} alt="items" />
            </div>
            <div className="grid gap-2">
               <h1 className="text-lg font-semibold ">Ceaser Salad</h1>
               <p className="text-sm text-gray-500 dark:text-white/60">This is a brief description of the product. It highlights the key features and benefits.</p>
               <div className="text-lg font-semibold">$99.99</div>
            </div>
            <div className="">
               <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button>
            </div>
         </div>
         <div className=" space-y-4 rounded-lg bg-white p-6 shadow-lg dark:bg-[#18181B] border">
            <div className='flex items-center justify-center'>
               <img  className="rounded-lg object-cover" src={img_3} alt="items" />
            </div>
            <div className="grid gap-2">
               <h1 className="text-lg font-semibold ">Ceaser Salad</h1>
               <p className="text-sm text-gray-500 dark:text-white/60">This is a brief description of the product. It highlights the key features and benefits.</p>
               <div className="text-lg font-semibold">$99.99</div>
            </div>
            <div className="">
               <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button>
            </div>
         </div>

      </div>
   );
};

export default Chefs;