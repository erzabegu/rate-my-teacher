import { ReactElement } from 'react';
import { Col, Row } from 'react-bootstrap'
import { QuestionEnum } from '../../../enums';
import { QuestionType } from '../../../types';
import { DefaultInput, RatingProgressBar } from '../../atoms';
import { Question } from '../../atoms/Question'



const Ask = ({ question, questionType }: QuestionType) => {
    interface Questions {
        text: ReactElement;
        radio: ReactElement;
        rating: ReactElement;
    }

    const questionToRender: Questions = {
        [QuestionEnum.TEXT]: <DefaultInput placeholder={"input type text"} />,
        [QuestionEnum.RADIO]: <DefaultInput placeholder={"input type radio"} />,
        [QuestionEnum.RATING]: <DefaultInput placeholder={"input type rating stars"} />
    }

    return <>
        <Row>
            <Col><Question question={question} /></Col>
            <Col>{questionToRender[questionType as keyof Questions]}</Col>
        </Row>
    </>
}

export default Ask