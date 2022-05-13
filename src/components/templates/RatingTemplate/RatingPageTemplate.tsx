import React from 'react'
import { Container } from 'react-bootstrap'
import { QuestionType } from '../../../types'
import QuestionList from '../../organisms/QuestionsList/QuestionsList'

interface Props {
    listOfQuestions: Array<QuestionType>
}

const RatingTemplate = ({ listOfQuestions }: Props) => {
    return <Container>
        <QuestionList listOfQuestions={listOfQuestions} />
    </Container>

}

export default RatingTemplate