import React,{useState} from 'react';
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

//component
import Navbar from '../components/Navbar';
import ImageGrid from '../components/Restaurant/ImageGrid';
import RestaurantInfo from '../components/Restaurant/RestaurantInfo';
import InfoButton from '../components/Restaurant/InfoButton';
import Tabs from '../components/Restaurant/Tabs';
import CartContainer from '../components/Cart/CartContainer';

function RestaurantLayout({children}) {

    const [restaurant, setRestaurant] = useState({
        images: [
            "https://b.zmtcdn.com/data/pictures/chains/3/307893/ac9e6b3236967e1e255e14e24cc0c9e7.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg",
            "https://b.zmtcdn.com/data/pictures/chains/3/307893/ab32e4d69281d2eb639cb9ae4850e972.jpg",
        ],
        name: "Bakehouse Comfort",
        cuisine: ["Bakery", "Desserts", "Fast Food"] ,
        address: ["Biryani ", "Chinese ","North Indian ","Hyedrabadi ", "South Indian "],
        restaurantRating: 4.1,
        deliveryRating: 3.2,
      });

      const [images,setImages] = useState([]);

    return (
       <>
        <Navbar/>
        <div className='container mx-auto mt-8 px-4 lg:px-40 pb-10'>
            <ImageGrid images={restaurant.images} />
            <RestaurantInfo
              name={restaurant?.name}
              restaurantRating={restaurant?.restaurantRating || 0}
              deliveryRating={restaurant?.deliveryRating || 0}
              cuisine={restaurant?.cuisine}
              address={restaurant?.address}
            />

            <div className="my-4 flex  flex-wrap gap-3 mx-auto">
              <InfoButton isActive={true}>
                <TiStarOutline /> Add Review
              </InfoButton>
              <InfoButton>
                <RiDirectionLine /> Direction
              </InfoButton>
              <InfoButton>
                <BiBookmarkPlus /> Bookmark
              </InfoButton>
              <InfoButton>
                <RiShareForwardLine /> Share
              </InfoButton>
            </div>
            <div className="my-10">
              <Tabs/>
            </div>
            {children}
        </div>

        <CartContainer />

        

        
       </>
    )
}

export default RestaurantLayout;
