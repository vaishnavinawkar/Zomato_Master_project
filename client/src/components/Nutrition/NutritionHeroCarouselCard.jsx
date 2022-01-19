import React from 'react';

function NutritionHeroCarouselCard(props) {
    return (
        <div className="w-full px-20 h-80 ">
            <img
                src={props.image}
                alt="nutrition banner"
                className="w-full h-full object-center rounded-lg"
            />
        </div>
    );
}

export default NutritionHeroCarouselCard;
