import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { RatingProgressBar } from '../../atoms'

const ProfessorDetailsTemplate = () => {
    return (
        <Container>
            <Col md={8} className={"mt-5"}>
                <RatingProgressBar now={60} />
                {/* <RatingProgressBar now={50} /> */}
            </Col>
        </Container>
    )
}

export default ProfessorDetailsTemplate