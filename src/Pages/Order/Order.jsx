import order_cover from '../../assets/shop/banner2.jpg'
import SharedCover from '../../components/SharedCover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Order.css'
import useMenu from '../../Hooks/useMenu';
import FoodCard from './FoodCard';

const Order = () => {

   const [menu] = useMenu()

   const desserts = menu.filter(item => item.category === 'dessert')
   const pizza = menu.filter(item => item.category === 'pizza')
   const salad = menu.filter(item => item.category === 'salad')
   const soup = menu.filter(item => item.category === 'soup')
   const drinks = menu.filter(item => item.category === 'drinks')

   return (
      <div>
         <SharedCover img_1={order_cover} title="Order Food" />

         <Tabs className="my-20">
            <TabList className="text-center mb-8 flex items-center justify-center space-x-6 *:font-semibold *:cursor-pointer">
               <Tab>SALAD</Tab>
               <Tab>PIZZA</Tab>
               <Tab>SOUPS</Tab>
               <Tab>DESSERTS</Tab>
               <Tab>DRINKS</Tab>
            </TabList>

            <TabPanel>

               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {
                     salad.map((item, i) => <FoodCard item={item} key={i}></FoodCard>)
                  }
               </div>

            </TabPanel>
            <TabPanel>
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {
                     pizza.map((item, i) => <FoodCard item={item} key={i}></FoodCard>)
                  }
               </div>
            </TabPanel>
            <TabPanel>
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {
                     soup.map((item, i) => <FoodCard item={item} key={i}></FoodCard>)
                  }
               </div>
            </TabPanel>
            <TabPanel>
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {
                     desserts.map((item, i) => <FoodCard item={item} key={i}></FoodCard>)
                  }
               </div>
            </TabPanel>
            <TabPanel>
               <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {
                     drinks.map((item, i) => <FoodCard item={item} key={i}></FoodCard>)
                  }
               </div>
            </TabPanel>
         </Tabs>

      </div>
   );
};

export default Order;