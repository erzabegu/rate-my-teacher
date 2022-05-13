import { QuestionType } from '../../../types/QuestionType';
import { RenderQuestions } from '../../molecules/RenderQuestions';
interface Props {
    listOfQuestions: Array<QuestionType>;
}

const QuestionsList = ({ listOfQuestions }: Props) => {
    return (
        <div>{listOfQuestions.map((question) => <RenderQuestions {...question} />)}</div>
    )
}

export default QuestionsList