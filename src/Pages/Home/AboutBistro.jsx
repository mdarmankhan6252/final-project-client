import banner from '../../assets/home/chef-service.jpg'
const AboutBistro = () => {
   return (
      <div className='h-72 sm:h-96 lg:h-[500px] bg-center bg-cover rounded-xl duration-500 flex items-center justify-center' style={{
         backgroundImage: `url(${banner})`
      }}>
         <div className='bg-white w-[80%] h-40 sm:h-60 lg:h-[320px] rounded-xl border relative'>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center space-y-3'>
            <h1 className='text-xl font-serif font-light sm:text-2xl lg:text-3xl'>Bistro Boss</h1>
            <p className='text-sm sm:text-[15px] text-[#6f6767]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione.</p>
            </div>
         </div>               
      </div>
   );
};

export default AboutBistro;