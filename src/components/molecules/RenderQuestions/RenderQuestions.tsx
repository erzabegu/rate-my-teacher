import { ReactElement } from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import { QuestionEnum } from '../../../enums';
import { QuestionType } from '../../../types';
import { CheckInputs, DefaultInput, Question } from '../../atoms';
import { RatingStars } from '../../atoms/RatingStars';
import { RenderCheckInputs } from '../RenderCheckInputs';
import { App, ArrowRight, BalloonHeartFill } from 'react-bootstrap-icons';


const RenderQuestions = ({ question, questionType, options }: QuestionType) => {
    interface Questions {
        text: ReactElement;
        radio: ReactElement;
        rating: ReactElement;
        checkbox: ReactElement;
        textarea: ReactElement;
    }

    const questionToRender: Questions = {
        [QuestionEnum.TEXT]: <DefaultInput type={'textarea'} placeholder={"input type text"} />,
        [QuestionEnum.RADIO]: <RenderCheckInputs type={'radio'} options={options} />,
        [QuestionEnum.CHECKBOX]: <RenderCheckInputs type={QuestionEnum.CHECKBOX} options={options} />,
        [QuestionEnum.RATING]: <RatingStars rating={40} fullIcon={<BalloonHeartFill />} emptyIcon={<BalloonHeartFill />} />,
        [QuestionEnum.TEXTAREA]: <DefaultInput as={'textarea'} />,
    }

    return <>
        <Row className='d-flex flex-column mt-3'>
            <Card style={{ width: '18rem' }}>
                <Col className='mx-auto pt-1 pb-1 align-items-start' style={{ textAlign: "left" }} lg={8}><Question question={question} /></Col>
                <Col className='mx-auto pt-1 pb-1' lg={8}>{questionToRender[questionType as keyof Questions]}</Col>
            </Card >
        </Row>
    </>
}

export default RenderQuestions