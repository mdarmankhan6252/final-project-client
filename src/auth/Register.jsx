import { useContext } from 'react';
import bg from '../assets/others/authentication.png'
import login_img from '../assets/others/authentication2.png'
import { CiFacebook } from "react-icons/ci";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';


const Register = () => {

    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const { createUser, UpdateUserProfile, user,
        setUser, logOut } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                UpdateUserProfile(name)
                setUser({ ...user, displayName: name })
                const userInfo = {
                    name,
                    email
                }
                fetch('http://localhost:5000/users', {
                    method:'POST',
                    headers:{
                        'content-type' : 'application/json'
                    },
                    body: JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data => {
                    if(data.insertedId){
                        Swal.fire({
                            position:'center',
                            icon:'success',
                            title:'Welcome',
                            timer:1500
                        })
                        logOut()
                        navigate('/login')
                        

                    }
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    if(user){
        return 
    }

    return (
        <div className='w-full h-screen pt-[5%]' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>

            <div className='max-w-7xl mx-auto p-24 flex items-center justify-between border shadow-[0px_0px_7px_0px] shadow-gray-400 '>
                <img src={login_img} alt="login_img" className='basis-1/2' />
                <form onSubmit={handleLogin} className=' *:w-full basis-1/2 space-y-6'>
                    <h1 className='text-2xl lg:text-4xl font-semibold text-center pb-5'>Create an Account</h1>
                    <input type="text" name="name" className='p-2.5 outline-yellow-800' placeholder='Your Name' required />
                    <input type="email" name="email" className='p-2.5 outline-yellow-800' placeholder='Email' required />
                    <input type="password" name="password" className='p-2.5 outline-yellow-800' placeholder='Password' required />
                    <input type="submit" className='p-2.5 bg-amber-600 text-white font-semibold active:scale-[98%] duration-300' value="Register" />
                    <div className='text-center space-y-4'>
                        <p className='font-semibold '>Already have an account ? <Link to='/login' className='text-amber-600'>CLogin</Link></p>
                        <p>Or sign in with</p>
                        <div className='flex items-center justify-center space-x-5 *:text-3xl'>
                            <CiFacebook className='cursor-pointer' />
                            <FaGoogle className='cursor-pointer' />
                            <FaGithub className='cursor-pointer' />
                        </div>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default Register;