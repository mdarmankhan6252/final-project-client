import banner from '../../assets/home/banner.jpg'
import SharedTitle from '../../components/SharedTitle';
import banner_img from '../../assets/menu/salad-bg.jpg'
const Featured = () => {
   return (
      <div className='h-72 sm:h-96 lg:h-[600px] bg-center bg-cover rounded-xl duration-500 flex items-center flex-col justify-center mt-20' style={{
         background: `url(${banner})`
      }}>
         <SharedTitle title="Should Try" subTitle="CHEF RECOMMENDS" white='text-white' margin='my-6px'/>

         <div className='flex items-center space-x-6 px-[5%]'>
            <div className='basis-[48%]'>
               <img src={banner_img} className='rounded-xl'/>
            </div>
            <div className='basis-[48%] space-y-3 text-white'>
               <h3 className='font-semibold'>March, 20, 2024</h3>
               <h2 className='uppercase font-semibold'>Where can i get some ?</h2>
               <p className='text-[#ebe2e2]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium placeat perspiciatis ullam saepe sit est veritatis ipsa cum fugit sunt?</p>
               <button className='bg-amber-600 py-1.5 px-4 hover:bg-amber-700'>Read More</button>
            </div>
         </div>

      </div>
   );
};

export default Featured;