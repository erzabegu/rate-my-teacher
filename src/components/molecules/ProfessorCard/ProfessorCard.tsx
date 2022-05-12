import React, { ReactElement } from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Size } from '../../../enums';
import { ProfessorType } from '../../../types';
import { MyButton } from '../../atoms';


const ProfessorCard = ({ professorId, professorName, schoolId, departmentId }: ProfessorType) => {

    const navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{professorName}</Card.Title>
                <Card.Text>{professorName}</Card.Text>
                <MyButton size={Size.SM} title={'click'} onClick={() => navigate(`/professor-details/${professorId}`)} />
            </Card.Body>
        </Card>
    )
}

export default ProfessorCard