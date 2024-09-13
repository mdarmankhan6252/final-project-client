import { Helmet } from "react-helmet-async";
import SharedTitle from "../../components/SharedTitle";
import AboutBistro from "./AboutBistro";
import Banner from "./Banner";
import CallUs from "./CallUs";
import Chefs from "./Chefs";
import Featured from "./Featured";
import Items from "./Items";
import PopularMenu from "./PopularMenu";
import Review from "./Reviews";

const Home = () => {
   return (
      <div className="mb-20">
         <Helmet>
            <title>Bistro Boss | Home</title>
         </Helmet>
         <Banner/>
         <SharedTitle title="From 11:00 am to 10:00 pm" subTitle="order online"/>
         <Items/>
         <AboutBistro/>
         <SharedTitle title="Check it Out" subTitle="form our menu"/>     
         <PopularMenu/> 
         <CallUs/>   
         <SharedTitle title="Should Try" subTitle="CHEF RECOMMENDS"/>
         <Chefs/>
         <Featured/>
         <SharedTitle title="What Our Clients Say" subTitle="TESTIMONIALS"/>
         <Review/>
      </div>
   );
};

export default Home;