import { Container, Col } from 'react-bootstrap'
import { QuestionType } from '../../../types'
import QuestionList from '../../organisms/QuestionsList/QuestionsList'

interface Props {
    listOfQuestions: Array<QuestionType>
}

const RatingTemplate = ({ listOfQuestions }: Props) => {
    return <Container className='mt-3'>
        <Col lg={4} className='mx-auto outline-primary'>
            <QuestionList listOfQuestions={listOfQuestions} />
        </Col>
    </Container>
}

export default RatingTemplate