import React, { ReactElement, useState } from "react";
import { Rating } from 'react-simple-star-rating'

interface Props {
    rating: number;
    fullIcon?: ReactElement | null;
    emptyIcon?: ReactElement | null
}
const RatingStars = ({ rating, fullIcon, emptyIcon }: Props) => {

    const handleRating = (rate: number) => {
        console.log(rate)
        // setRating(rate)
    }
    return <>
        <Rating onClick={handleRating} ratingValue={rating} fullIcon={fullIcon} emptyIcon={emptyIcon} />
    </>
}

export default RatingStars