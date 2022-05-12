import React from 'react'
import { Col } from 'react-bootstrap'
import { ProfessorType } from '../../../types'
import { ProfessorCard } from '../../molecules'

interface Props {
    professorsList: Array<ProfessorType>,
}

const ProfessorsList = ({ professorsList }: Props) => {
    return (
        <Col className="mt-5">
            {professorsList.map((prof) => <ProfessorCard {...prof} />)}
        </Col>
    )
}

export default ProfessorsList