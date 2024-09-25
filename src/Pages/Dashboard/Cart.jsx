import { MdDelete } from "react-icons/md";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if(res.data.deletedCount > 0){
                            Swal.fire({
                                title: "DELETED!",
                                text: "Your product is deleted",
                                icon: "success"
                              });
                        }
                        
                    })
            }
        });

    }
    return (
        <div className="px-10">

            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-semibold"> Total Price : {totalPrice}</h1>
                <h2 className="text-3xl  font-semibold text-center py-10">Total Orders : <span className="text-white bg-yellow-500 px-2 rounded-md">{cart.length}</span></h2>
                <button className="mt-6 font-semibold bg-yellow-500 px-4 py-2.5 text-white rounded-md duration-200 active:scale-[97%]">Pay Now</button>
            </div>

            {/* table  */}

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Items Photo</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            cart.map((item, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item?.image}
                                                    alt={item.name || 'demo text'} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="font-semibold">{item.name}</td>
                                <td className="font-semibold">{item.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        title="Delete" className="text-3xl text-red-500 hover:text-red-600"><MdDelete /></button>
                                </th>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Cart;