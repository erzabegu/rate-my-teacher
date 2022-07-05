import { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap'
import { BookmarkFill } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';
import { ProfessorType } from '../../../types';


const ProfessorCard = ({ professorId, professorName, schoolId, departmentId, departmentName, professorImage, professorSurname, schoolName }: ProfessorType) => {

    const navigate = useNavigate();
    const [saved, setSaved] = useState<boolean>(false);
    const [disableNavigate, setDisableNavigate] = useState<boolean>(false);

    return (
        <>
            <Card style={{ width: '18rem', backgroundColor: '#FDFDFE' }} className="mx-4"
                onClick={() => disableNavigate === true ? navigate(`/professor-details/${professorId}`) : console.log('hi')}>
                <Col className='d-flex justify-content-end py-2'>
                    <BookmarkFill color={saved ? 'yellow' : 'black'} onClick={() => {
                        setSaved(!saved)
                        setDisableNavigate(false)
                    }} />
                </Col>
                <Row>
                    <Col>
                        <p>Quality</p>
                        <div style={{ height: '80px', width: '80px', backgroundColor: 'lightblue', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>5.0</div>
                        <p>1 ratings</p>
                    </Col>
                    <Col>
                        <h5>{`${professorName} ${professorSurname}`}</h5>
                        <p>{departmentName}</p>
                        <p>{schoolName}</p>
                    </Col>
                </Row>
                {/* <Col className="d-flex align-items-center justify-content-center mt-3">
                {professorImage ? <Card.Img variant="top" src={professorImage} /> : <Avatar name={professorName} />}
            </Col> */}
                {/* <Card.Body>
                <Card.Title>{professorName}</Card.Title>
                <Card.Text>{professorName}</Card.Text>
                <MyButton size={Size.SM} title={'click'} onClick={() => navigate(`/professor-details/${professorId}`)} />
            </Card.Body> */}
            </Card>
        </>
    )
}

export default ProfessorCard