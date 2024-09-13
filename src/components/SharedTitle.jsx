const SharedTitle = ({title, subTitle, white}) => {
   return (
      <div className={`text-center my-16 space-y-4`}>
         <h3 className="text-yellow-500 font-light text-xl font-serif">---{title}---</h3>
         <h1 className={`uppercase text-3xl font-semibold text-gray-700 ${white}`}>{subTitle}</h1>
      </div>
   );
};

export default SharedTitle;