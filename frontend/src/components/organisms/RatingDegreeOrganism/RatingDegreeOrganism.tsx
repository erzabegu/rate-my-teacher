import React from 'react'
import { Col } from 'react-bootstrap'
import { RatingChart } from '../../../types'
import { RatingDegrees } from '../../molecules'

interface Props {
    professorDegress: Array<RatingChart>
}

const RatingDegreeOrganism = ({ professorDegress }: Props) => {
    return <Col>{professorDegress.map((degree: any) => <RatingDegrees {...degree} />)}</Col>
}

export default RatingDegreeOrganism