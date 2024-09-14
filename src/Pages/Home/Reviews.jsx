import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Reviews = () => {

   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/review')
         .then(res => res.json())
         .then(data => setReviews(data))
   }, [])
   return (
      <>
         <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
         >
            {
               reviews.map((review, i) => <SwiperSlide key={i}>
                  <div className='text-center md:px-24 px-8 space-y-4'>
                     <div className='flex justify-center py-4'>
                        <Rating
                           style={{ maxWidth: 180 }}
                           value={review.rating}
                           readOnly
                        />
                     </div>
                     <p>{review.details}</p>
                     <h3 className='text-2xl text-orange-500 font-semibold'>{review.name}</h3>
                  </div>
               </SwiperSlide>)
            }
         </Swiper>
      </>
   );
};

export default Reviews;