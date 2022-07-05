import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Professor from '../../../assets/images/i.png'
import { DefaultImage } from '../../atoms'
import { TextInput } from '../../molecules'
import './style.scss'

const SearchBox = () => {
    return (
        <Container>
            <Row className='mx-5 mt-5 px-5' lg={11} >
                <Col className={'d-flex flex-column align-self-center mt-5'} style={{ textAlign: 'center' }}>
                    <h5 className='mb-4' style={{ color: '#283779', fontWeight: 'bold' }}>Enter a school to get started</h5>
                    <TextInput className={'styledSearchBox'} placeholder='Enter your school/professor' />
                    <h6 style={{ color: '#283779', fontWeight: 'bold' }}>I'd like to look up a professor by name</h6>
                </Col>
                <Col className={'d-flex justify-content-left mt-4'} style={{ paddingLeft: '100px' }}>
                    <DefaultImage className={'professorImage'} src={Professor} fluid  />
                </Col>
            </Row>
        </Container >
    )
}

export default SearchBox