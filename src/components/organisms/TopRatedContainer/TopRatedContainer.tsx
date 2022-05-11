import { Container, Row } from 'react-bootstrap'
import { ProfessorType } from '../../../types';
import { RatingStars } from '../../atoms/RatingStars';
import { ProfessorCard } from '../../molecules';

interface Props {
    professors: Array<ProfessorType>;
}



const TopRatedContainer = () => {
    const professors = [{
        professorName: 'Berat',
        professorId: 1,
    }, {
        professorName: 'Besmir',
        professorId: 2,
    }]
    return <Container>
        <Row>
            Most rated Professors
        </Row>
        <Row>
            {professors.map((professor: any) => <ProfessorCard {...professor} />)}
            <RatingStars rating={80} />
        </Row>
    </Container>
}

export default TopRatedContainer