import { QuestionType } from '../../../types/QuestionType';
import { RenderQuestions } from '../../molecules/RenderQuestions';
interface Props {
    listOfQuestions: Array<QuestionType>;
}

const QuestionsList = ({ listOfQuestions }: Props) => {
    return (<>
        {listOfQuestions.map((question) => <RenderQuestions {...question} />)}
    </>
    )
}

export default QuestionsList