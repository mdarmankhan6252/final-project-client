
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

//import images

import img_1 from '../../assets/home/slide1.jpg'
import img_2 from '../../assets/home/slide2.jpg'
import img_3 from '../../assets/home/slide3.jpg'
import img_4 from '../../assets/home/slide4.jpg'
import img_5 from '../../assets/home/slide5.jpg'


const Items = () => {
   return (
      <div className='pb-20'>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='border border-green-500 *:w-full relative'>
            <img src={img_1} alt="" />
            <h3 className='text-white md:text-2xl absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center font-light font-serif'>SALADS</h3>
        </SwiperSlide>
        <SwiperSlide className='border border-green-500 *:w-full'>
            <img src={img_2} alt="" />
            <h3 className='text-white md:text-2xl absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center font-light font-serif'>SOUPS</h3>
        </SwiperSlide>
        <SwiperSlide className='border border-green-500 *:w-full'>
            <img src={img_3} alt="" />
            <h3 className='text-white md:text-2xl absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center font-light font-serif'>PIZZAS</h3>
        </SwiperSlide>
        <SwiperSlide className='border border-green-500 *:w-full'>
            <img src={img_4} alt="" />
            <h3 className='text-white md:text-2xl absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center font-light font-serif'>DESSERTS</h3>
        </SwiperSlide>
        <SwiperSlide className='border border-green-500 *:w-full'>
            <img src={img_5} alt="" />
            <h3 className='text-white md:text-2xl absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center font-light font-serif'>BURGER</h3>
        </SwiperSlide>
        <SwiperSlide className='border border-green-500 *:w-full'>
            <img src={img_3} alt="" />
            <h3 className='text-white md:text-2xl absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center font-light font-serif'>SALADS</h3>
        </SwiperSlide>
        <SwiperSlide className='border *:w-full'>
            <img src={img_2} alt="" />
            <h3 className='text-white md:text-2xl absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center font-light font-serif'>SALADS</h3>
        </SwiperSlide>
      </Swiper>
    </div>
   );
};

export default Items;