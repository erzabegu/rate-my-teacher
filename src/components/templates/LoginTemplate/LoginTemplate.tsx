import React from 'react'
import { Container, Col, InputGroup, Row } from 'react-bootstrap'
import { Key, People, Person } from 'react-bootstrap-icons'
import { DefaultImage, DefaultInput, MyButton } from '../../atoms'
import Team from '../../../assets/images/team.jpg'
import './LoginTemplate.scss'

const LoginTemplate = () => {
    return (
        <Container fluid style={{ height: '100vh' }} className="pt-5 loginWwrapper">
            <Row>
                <Col>
                    <DefaultImage src={Team} fluid />
                </Col>
                <Col className='mx-auto pt-5' lg={4}  >
                    <div className="loginContainer">
                        <People height={50} width={50} className="mt-3" />
                        <Col lg={5} className="mx-auto pt-3 pb-3">
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><Person /></InputGroup.Text>
                                <DefaultInput type='email' placeholder='Username' />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1"><Key /></InputGroup.Text>
                                <DefaultInput type='password' placeholder='Password' />
                            </InputGroup>
                            <MyButton title="Login" className='' style={{ width: '10rem', backgroundColor: '#C9B9DB', border: 'none' }}></MyButton>
                        </Col>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginTemplate