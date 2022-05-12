import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { RatingChart } from '../../../types'
import { RatingProgressBar } from '../../atoms'


const RatingDegrees = ({ degree, degreeName }: RatingChart) => {
    return <Row>
        <h5>{degreeName}</h5>
        <RatingProgressBar now={degree} />
    </Row>
}

export default RatingDegrees