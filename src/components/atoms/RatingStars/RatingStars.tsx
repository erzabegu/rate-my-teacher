import React, { useState } from "react";
import { Rating } from 'react-simple-star-rating'

interface Props {
    rating: number;
}
const RatingStars = ({ rating }: Props) => {

    const handleRating = (rate: number) => {
        console.log(rate)
        // setRating(rate)
    }
    return <>
        <Rating onClick={handleRating} ratingValue={rating} />
    </>
}

export default RatingStars