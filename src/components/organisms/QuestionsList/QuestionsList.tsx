import { QuestionType } from '../../../types/QuestionType';
import { MyButton } from '../../atoms';
import { RenderQuestions } from '../../molecules/RenderQuestions';
interface Props {
    listOfQuestions: Array<QuestionType>;
}

const QuestionsList = ({ listOfQuestions }: Props) => {
    return (<>
        <div>{listOfQuestions.map((question) => <RenderQuestions {...question} />)}</div>
        <div><MyButton title='submit' /></div>
    </>
    )
}

export default QuestionsList