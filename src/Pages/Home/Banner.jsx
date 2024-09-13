import { useEffect, useState } from "react";

const Banner = () => {
   const [currentSlider, setCurrentSlider] = useState(0);
   const sliders = [{ img: "https://i.ibb.co.com/x5twcnG/01.jpg" }, { img: "https://i.ibb.co.com/V2c8mpG/02.jpg" }, { img: "https://i.ibb.co.com/8x45hfv/03.png" }, { img: "https://i.ibb.co.com/Nr1x9VN/04.jpg" }, { img: "https://i.ibb.co.com/1Z0kkvZ/05.png" }, { img: "https://i.ibb.co.com/9hh2vhz/06.png" }];

   useEffect(() => {
      const intervalId = setInterval(() => setCurrentSlider(currentSlider === sliders.length - 1 ? 0 : currentSlider + 1), 5000);
      return () => clearInterval(intervalId);
   }, [currentSlider]);

   return (
      <div className="my-6">
         <div className="w-full h-60 sm:h-96 md:h-[640px] flex flex-col items-center justify-center gap-5 lg:gap-10 bg-cover bg-center before:absolute rounded-xl  before:inset-0 transform duration-1000 ease-linear"
            style={{ backgroundImage: `url(${sliders[currentSlider].img})` }}>

         </div>
         {/* slider container */}
         <div className="flex justify-center items-center gap-3 p-2">
            {/* sliders */}
            {sliders.map((slide, inx) => (
               <img onClick={() => setCurrentSlider(inx)} key={inx}
                  src={slide.img} className={`w-10 md:w-20 h-6 sm:h-8 md:h-12 bg-black/20 ${currentSlider === inx ? 'border-2 border-orange-500 p-px' : ''} rounded-md md:rounded-lg box-content cursor-pointer`}
                  alt={slide.title} />
            ))}
         </div>
      </div>
   )
};
export default Banner;