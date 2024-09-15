import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const { user } = useContext(AuthContext)
    return (

        <div className="flex items-center justify-center w-full h-[50vh]">
            <Helmet>
                <title>Bistro Boss | Profile</title>
            </Helmet>
            <div className="border p-8 space-y-5 *:text-2xl sm:text-4xl font-semibold shadow-[0px_0px_7px_0px] shadow-gray-300">
                <h2 className="text-center border-b-2 pb-1 border-gray-400">User Details</h2>
                <h3>Name : {user?.displayName}</h3>
                <h3>Email : {user?.email}</h3>

            </div>

        </div>
    );
};

export default Profile;