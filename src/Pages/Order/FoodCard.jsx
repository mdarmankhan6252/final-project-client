import useAuth from "../../Hooks/useAuth";
import Swal from 'sweetalert2'
import {useLocation, useNavigate} from 'react-router-dom'
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const FoodCard = ({ item }) => {
   const { name, recipe, image, price, _id } = item;

   const navigate = useNavigate()
   const location = useLocation()
   const axiosSecure = useAxiosSecure()

   const {user} = useAuth()

   const [,refetch] = useCart()

   const handleAddToCart = food => {
      console.log(food)
      if(user && user.email){
         console.log(user.email);
         const cartItem = {
            menuId: _id,
            email:user.email,
            name,
            image,
            price
         }
         axiosSecure.post('/carts', cartItem)
         .then(res =>{
            console.log(res.data);
            if(res.data.insertedId){
               Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${name} added your cart`,
                  showConfirmButton: false,
                  timer: 1500
                });
                refetch()
            }
         })

      }
      else{
         /////////
         Swal.fire({
           title: "Your are not logged in.",
           text: "You won't be able to revert this!",
           icon: "warning",
           showCancelButton: true,
           confirmButtonColor: "#3085d6",
           cancelButtonColor: "#d33",
           confirmButtonText: "Yes, Login"
         }).then((result) => {
           if (result.isConfirmed) {
             navigate('/login', {state: {from:location}})
           }
         });
      }

   }
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
            <button
               onClick={() => handleAddToCart(item)}
               className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button>
         </div>
      </div>
   );
};

export default FoodCard;