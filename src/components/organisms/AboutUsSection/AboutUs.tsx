import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { DefaultImage } from '../../atoms'
import Rating from '../../../assets/images/aboutus.jpg'

const AboutUs = () => {
    return (
        <Col lg={10} className='mx-auto d-flex flex-column align-items-center mb-5 mt-5 pt-5'>
            <h2 className='mb-5' style={{ fontWeight: 'bold' }}>Rate my Teacher Platform</h2>
            <Row>
                <Col className='mx-auto d-flex align-items-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis perferendis expedita
                    pariatur nobis a! Cum ea nesciunt perferendis alias, ducimus hic saepe ipsam animi ad dolore
                    omnis facere iure. Blanditiis
                </Col>
                <Col>
                    <DefaultImage src={Rating} fluid />
                </Col>
            </Row>
        </Col>
    )
}

export default AboutUs