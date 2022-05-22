import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ProfessorType } from '../../../types'
import { ProfessorCard } from '../../molecules'

interface Props {
    professorsList: Array<ProfessorType>,
}

const ProfessorsList = ({ professorsList }: Props) => {
    return (
        <Row className="mt-5">
            {professorsList.map((prof, index) => <ProfessorCard key={index} {...prof} />)}
        </Row>
    )
}

export default ProfessorsList