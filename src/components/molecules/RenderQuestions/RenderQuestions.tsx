import { ReactElement } from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import { QuestionEnum } from '../../../enums';
import { QuestionType } from '../../../types';
import { DefaultInput, Question } from '../../atoms';
import { RatingStars } from '../../atoms/RatingStars';
import { RenderCheckInputs } from '../RenderCheckInputs';
import { RenderRadio } from "../RenderRadio";


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
        [QuestionEnum.RADIO]: <RenderRadio values={options} />,
        [QuestionEnum.CHECKBOX]: <RenderCheckInputs type={QuestionEnum.CHECKBOX} options={options} />,
        [QuestionEnum.RATING]: <RatingStars showTooltip tooltipStyle={{ backgroundColor: 'none', color: 'black' }} tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']} rating={40} />,
        [QuestionEnum.TEXTAREA]: <DefaultInput as={'textarea'} />,
    }

    return <>
        <Row className='d-flex flex-column mt-3 mx-auto'>
            <Card style={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 1px 2px 0px' }} className="py-3">
                <Col className='mx-auto align-items-start' style={{ textAlign: "left" }} lg={12}>
                    <Question question={question} />
                </Col>
                <Col className='mx-auto' lg={8}>{questionToRender[questionType as keyof Questions]}</Col>
            </Card >
        </Row>
    </>
}

export default RenderQuestions