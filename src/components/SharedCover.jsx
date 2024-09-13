

const SharedCover = ({img_1}) => {
   return (
      <div>
         <div
            className="hero  py-28 mt-8 mb-20"
            style={{
               backgroundImage: `url(${img_1})`,
            }}>
            <div className="hero-overlay bg-opacity-60  py-28 w-[70%]"></div>
            <div className="hero-content text-neutral-content text-center">
               <div className="max-w-md py-8">
                  <h1 className="mb-5 text-2xl sm:text-3xl lg:text-5xl font-bold uppercase font-serif text-white">Our Menu</h1>
                  <p className="mb-5 text-sm w-[70%] mx-auto sm:w-full sm:text-[15px]">
                     Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                     quasi. In deleniti eaque aut repudiandae et a id nisi.
                  </p>
               </div>
            </div>
         </div>

      </div>
   );
};

export default SharedCover;