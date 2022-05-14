import React, { ReactElement, useState } from "react";
import { Rating } from 'react-simple-star-rating'

interface Props {
    rating: number;
    fullIcon?: ReactElement | null;
    emptyIcon?: ReactElement | null;
    readonly?: boolean
}
const RatingStars = ({ rating, fullIcon, emptyIcon, readonly }: Props) => {

    const handleRating = (rate: number) => {
        console.log(rate)
        // setRating(rate)
    }
    return <>
        <Rating onClick={handleRating} ratingValue={rating} fullIcon={fullIcon} emptyIcon={emptyIcon} readonly={readonly} />
    </>
}

export default RatingStars