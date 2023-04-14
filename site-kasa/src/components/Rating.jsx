import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import "../style/components/Rating.css"

const Rating = ({rating}) => {
    const maxRating = 5;
    const fullStars = Math.floor(rating);
    const emptyStars = maxRating - fullStars;
    const fullStarElements = Array(fullStars).fill().map((_, i) => (
      <FontAwesomeIcon icon={solidStar} key={i} className='start' />
    ));
    const emptyStarElements = Array(emptyStars).fill().map((_, i) => (
        <FontAwesomeIcon icon={solidStar} key={i} className="fa-star gray start" />
      ));

    return (
        <div>
            {fullStarElements}
            {emptyStarElements}
        </div>
    );
};

export default Rating;