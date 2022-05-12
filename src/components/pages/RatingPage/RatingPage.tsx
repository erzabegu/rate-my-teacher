import React from 'react'
import { RatingTemplate } from '../../templates'

const RatingPage = () => {

    const listOfQuestions = [{
        question: "FirstQuestion",
        questionType: "text",
    },
    {
        question: "second question",
        questionType: "radio",
    },
    {
        question: "third question",
        questionType: "rating",
    }]
    return <RatingTemplate listOfQuestions={listOfQuestions} />
}

export default RatingPage