import { CiBookmarkCheck, CiMenuBurger, CiShoppingCart } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { MdHome, MdPayment, MdRateReview } from "react-icons/md";

const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="flex">
            <div className="w-64 min-h-screen bg-orange-500 text-white py-8 px-4">
                <ul className="space-y-6 *:font-semibold">
                    {
                        isAdmin ? <>
                            <NavLink to="/dashboard/allUsers" className="border border-white p-2 flex items-center space-x-3">
                                <IoHomeOutline className="text-3xl" />
                                <span>All Users</span>
                            </NavLink>

                            <NavLink to="/dashboard/reservation" className="border border-white p-2 flex items-center space-x-3">
                                <SlCalender className="text-3xl" />
                                <span>Reservation</span>
                            </NavLink>

                            <NavLink to="/dashboard/payment" className="border border-white p-2 flex items-center space-x-3">
                                <MdPayment className="text-3xl" />
                                <span>Payment History</span>
                            </NavLink>

                            <NavLink to="/dashboard/cart" className="border border-white p-2 flex items-center space-x-3">
                                <CiShoppingCart className="text-3xl" />
                                <span>My Cart</span>
                            </NavLink>

                            <NavLink to="/dashboard/addReview" className="border border-white p-2 flex items-center space-x-3">
                                <MdRateReview className="text-3xl" />
                                <span>Add Review</span>
                            </NavLink>

                            <NavLink to="/dashboard/myBooking" className="border border-white p-2 flex items-center space-x-3">
                                <CiBookmarkCheck className="text-3xl" />
                                <span>My Booking</span>
                            </NavLink>
                        </> :
                            <span></span>

                    }

                    <hr />

                    <NavLink to="/" className="border border-white p-2 flex items-center space-x-3">
                        <MdHome className="text-3xl" />
                        <span>Home</span>
                    </NavLink>

                    <NavLink to="/order" className="border border-white p-2 flex items-center space-x-3">
                        <CiMenuBurger className="text-3xl" />
                        <span>Menu</span>
                    </NavLink>
                </ul>
            </div>
            <div className="bg-[#f2f2ff] flex-1">
                <Outlet />
            </div>

        </div>
    );
};

export default Dashboard;