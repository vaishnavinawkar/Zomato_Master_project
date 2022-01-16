import React,{useState} from 'react';

//component
import DeliveryCarousel from "./DeliveryCarousel";
import RestaurantCard from "../RestaurantCard";

function Delivery() {

    const [restaurantList, setRestaurantList] = useState([
        {
            _id: '123456',
            image: {
                images: [
                    {
                        location: "https://b.zmtcdn.com/data/pictures/chains/2/3300272/67d010c134a54f510e49eab11593c418_o2_featured_v2.jpg?output-format=webp"
                    },
                ],
            },
            name:"Bakehouse Comfort",
            cuisine: ["Bakery", "Dessert", "Fast food"],
            isPro: true,
            isOff: true,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.1,

        },
        {
            _id: '123456',
            image: {
                images: [
                    {
                        location: "https://b.zmtcdn.com/data/pictures/chains/4/3300794/c8e3d85b773066868ec333d6f17782cb_o2_featured_v2.jpg"
                    },
                ],
            },
            name:"Bakehouse Comfort",
            cuisine: ["Bakery", "Dessert", "Fast food"],
            isPro: true,
            isOff:true,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.2,

        },
        {
            _id: '123456',
            image: {
                images: [
                    {
                        location: "https://b.zmtcdn.com/data/pictures/chains/2/3300272/67d010c134a54f510e49eab11593c418_o2_featured_v2.jpg?output-format=webp"
                    },
                ],
            },
            name:"Bakehouse Comfort",
            cuisine: ["Bakery", "Dessert", "Fast food"],
            isPro: true,
            isOff:true,
            durationOfDelivery: 47,
            restaurantReviewValue: 4.3,

        },
    ]);

    return (
        <>
            <DeliveryCarousel /> 
            <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
                Delivery Restaurants in NCR(Delhi)
            </h1>
            <div className="flex justify-between flex-wrap mt-5 ">
                {restaurantList.map((restaurant) => (
                <RestaurantCard {...restaurant} key={restaurant._id} />
                ))}
            </div>
        </>
    );
}

export default Delivery;



// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// // Component
// import DeliveryCarousel from "./DeliveryCarousel";
// import RestaurantCard from "../RestaurantCard";

// function Delivery() {
//   const [restaurantList, setRestaurantList] = useState([]);

//   const reduxState = useSelector((store) => store.restaurant.restaurants);

//   useEffect(() => {
//     reduxState.restaurants && setRestaurantList(reduxState.restaurants);
//   }, [reduxState.restaurants]);

//   return (
//     <>
//       <DeliveryCarousel />
//       <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
//         Delivery Restaurants in NCR(Delhi)
//       </h1>
//       <div className="flex justify-between flex-wrap mt-5">
//         {restaurantList.map((restaurant) => (
//           <RestaurantCard {...restaurant} key={restaurant._id} />
//         ))}
//       </div>
//     </>
//   );
// }

// export default Delivery;
