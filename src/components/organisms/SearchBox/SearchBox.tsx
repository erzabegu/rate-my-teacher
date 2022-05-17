import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Professor from '../../../assets/images/professor.png'
import { DefaultImage } from '../../atoms'
import { TextInput } from '../../molecules'
import './style.scss'

const SearchBox = () => {
    return (
        <Container>
            <Row className='justify-content-center mt-3 px-5' lg={11} >
                <Col className={'d-flex flex-column align-self-center ml-5'}>
                    <h5> Find a professor at University</h5>
                    <TextInput placeholder='Search for Professor/School' />
                </Col>
                <Col className={'d-flex justify-content-center'}>
                    <DefaultImage className={'professorImage'} src={Professor} fluid />
                </Col>
            </Row>
        </Container >
    )
}

export default SearchBox