import React from 'react'
import { RatingTemplate } from '../../templates'

const RatingPage = () => {

    const listOfQuestions = [{
        questionId: 1,
        question: "Rate your professor",
        questionType: "rating",
    },
    {
        questionId: 2,
        question: "How difficult was this professor?",
        questionType: "rating",
    },
    {
        questionId: 3,
        question: "Would you take this professor again?",
        questionType: "radio",
        options: ['Yes', 'No']
    },
    {
        questionId: 4,
        question: "Did this professor use materials propriately?",
        questionType: "radio",
        options: ['Yes', 'No']
    },
    {
        questionId: 5,
        question: "Write a Review",
        questionType: "textarea",
    }]
    return <RatingTemplate listOfQuestions={listOfQuestions} />
}

export default RatingPage