import { useContext } from 'react';
import bg from '../assets/others/authentication.png'
import login_img from '../assets/others/authentication2.png'
import { CiFacebook } from "react-icons/ci";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()

    const { loginUser } = useContext(AuthContext)

    const from = location.state?.form?.pathname || '/'

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password);
        loginUser(email, password)
            .then(result => {
                console.log(result.user)
                toast.success("Welcome here !")
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='w-full h-screen pt-[5%]' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>

            <div className='max-w-7xl mx-auto p-24 flex items-center justify-between border shadow-[0px_0px_7px_0px] shadow-gray-400 '>
                <img src={login_img} alt="login_img" className='basis-1/2' />
                <form onSubmit={handleLogin} className=' *:w-full basis-1/2 space-y-6'>
                    <h1 className='text-2xl lg:text-4xl font-semibold text-center pb-5'>Login</h1>
                    <input type="email" name="email" className='p-2.5 outline-yellow-800' placeholder='Email' />
                    <input type="password" name="password" className='p-2.5 outline-yellow-800' placeholder='Password' />
                    <input type="submit" name="capture" className='p-2.5 bg-amber-600 text-white font-semibold active:scale-[98%] duration-300' value="Login" />
                    <div className='text-center space-y-4'>
                        <p className='font-semibold '>New here ? <Link to='/register' className='text-amber-600'>Create an account</Link></p>
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

export default Login;