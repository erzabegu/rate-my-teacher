import React, { ReactElement, useState } from "react";
import { Rating } from 'react-simple-star-rating'

interface Props {
    rating: number;
    fullIcon?: ReactElement | null;
    emptyIcon?: ReactElement | null;
    readonly?: boolean;
    tooltipArray?: Array<string>;
    showTooltip?: boolean;
    tooltipStyle?: any;
}
const RatingStars = ({ rating, fullIcon, emptyIcon, readonly, tooltipArray, showTooltip, tooltipStyle }: Props) => {

    const handleRating = (rate: number) => {
        console.log(rate)
        // setRating(rate)
    }
    return <>
        <Rating onClick={handleRating} ratingValue={rating} tooltipStyle={tooltipStyle} showTooltip={showTooltip} tooltipArray={tooltipArray} fullIcon={fullIcon} emptyIcon={emptyIcon} readonly={readonly} />
    </>
}

export default RatingStars