import { Container, Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ProfessorType, RatingChart } from '../../../types'
import { MyButton } from '../../atoms'
import { ProfessorCard } from '../../molecules'
import { RatingDegreeOrganism } from '../../organisms'

interface Props {
    professorDegrees: Array<RatingChart>,
    professorProfile: ProfessorType
}

const ProfessorDetailsTemplate = ({ professorDegrees, professorProfile }: Props) => {
    const navigate = useNavigate();

    return (
        <Container>
            <Row>
                <Col>
                    <ProfessorCard {...professorProfile} />
                </Col>
                <Col className={"mt-5"}>
                    <RatingDegreeOrganism professorDegress={professorDegrees} />
                </Col>
            </Row>
            <Col className="align-items-center" >
                <MyButton title={`rate ${professorProfile.professorName}`} onClick={() => navigate('/rating')} />
            </Col>
        </Container>
    )
}

export default ProfessorDetailsTemplate