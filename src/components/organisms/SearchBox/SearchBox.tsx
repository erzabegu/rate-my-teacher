import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Professor from '../../../assets/images/professor.png'
import { DefaultImage, DefaultInput } from '../../atoms'
import { TextInput } from '../../molecules'
import './style.scss'

const SearchBox = () => {
    return (
        <Container>
            <Row>
                <TextInput placeholder='Search for Professor/School' />
                <Col>
                    <DefaultImage className={'professorImage'} src={Professor} fluid />
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBox