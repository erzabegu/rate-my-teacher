import React from 'react'
import { RatingTemplate } from '../../templates'

const RatingPage = () => {

    const listOfQuestions = [{
        questionId: 1,
        question: "FirstQuestion",
        questionType: "text",
    },
    {
        questionId: 2,
        question: "second question",
        questionType: "radio",
        options: ['1', '3', 5]
    },
    {
        questionId: 3,
        question: "fourth question",
        questionType: "checkbox",
        options: ['1', '3', 5]
    },
    {
        questionId: 4,
        question: "third question",
        questionType: "rating",
    }]
    return <RatingTemplate listOfQuestions={listOfQuestions} />
}

export default RatingPage