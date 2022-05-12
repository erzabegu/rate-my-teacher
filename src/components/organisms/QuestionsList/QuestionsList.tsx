import React from 'react'
import { QuestionType } from '../../../types/QuestionType';
import { Ask } from '../../molecules/Ask';
interface Props {
    listOfQuestions: Array<QuestionType>;
}

const QuestionList = ({ listOfQuestions }: Props) => {
    return (
        <div>{listOfQuestions.map((question) => <Ask {...question} />)}</div>
    )
}

export default QuestionList