import React from 'react'
import { QuestionType } from '../../../types'
import QuestionList from '../../organisms/QuestionsList/QuestionsList'

interface Props {
    listOfQuestions: Array<QuestionType>
}

const RatingTemplate = ({ listOfQuestions }: Props) => {
    return <div><QuestionList listOfQuestions={listOfQuestions} /></div>

}

export default RatingTemplate