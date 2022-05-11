import React from 'react'
import { Card } from 'react-bootstrap'

interface Props {
    title: string;
    content: string;
}

const ProfessorCard = ({ title, content }: Props) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default ProfessorCard