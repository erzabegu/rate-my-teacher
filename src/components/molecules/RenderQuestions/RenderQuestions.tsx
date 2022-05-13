import { ReactElement } from 'react';
import { Col, Row } from 'react-bootstrap'
import { QuestionEnum } from '../../../enums';
import { QuestionType } from '../../../types';
import { CheckInputs, DefaultInput, Question } from '../../atoms';
import { RenderCheckInputs } from '../RenderCheckInputs';



const RenderQuestions = ({ question, questionType, options }: QuestionType) => {
    interface Questions {
        text: ReactElement;
        radio: ReactElement;
        rating: ReactElement;
        checkbox: ReactElement
    }

    const questionToRender: Questions = {
        [QuestionEnum.TEXT]: <DefaultInput type={'textarea'} placeholder={"input type text"} />,
        [QuestionEnum.RADIO]: <RenderCheckInputs type={QuestionEnum.RADIO} options={options} />,
        [QuestionEnum.RATING]: <DefaultInput placeholder={"input type rating stars"} />,
        [QuestionEnum.CHECKBOX]: <RenderCheckInputs type={QuestionEnum.CHECKBOX} options={options} />
    }

    return <>
        <Row>
            <Col><Question question={question} /></Col>
            <Col>{questionToRender[questionType as keyof Questions]}</Col>
        </Row>
    </>
}

export default RenderQuestions