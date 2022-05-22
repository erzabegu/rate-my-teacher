import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { Key, People, PersonPlus, PersonPlusFill } from 'react-bootstrap-icons'
import { DefaultInput, MyButton } from '../../atoms'
import { Header } from '../../molecules'
import './RegisterTemplate.scss'

const RegisterTemplate = () => {
    return <>
        <Container fluid className="loginWrapper" style={{minHeight:'98.5vh'}}>
        <Header isLoggedIn={false} isOk={true} />
            <Col className='mx-auto mt-5' lg={4}  >
                <div className="registerContainer">
                    <PersonPlus height={50} width={50} className="mt-2" />
                    <Col lg={7} className="mx-auto pt-3 pb-3">
                        <DefaultInput type='text' placeholder='Name' className='mb-3' />
                        <DefaultInput type='text' placeholder='Surname' className='mb-3' />
                        <DefaultInput type='text' placeholder='School' className='mb-3' />
                        <DefaultInput type='text' placeholder='UserName' className='mb-3' />
                        <DefaultInput type='email' placeholder='E-mail' className='mb-3' />
                        <DefaultInput type='password' placeholder='Password' className='mb-3' />
                        <MyButton title="Register" className="mb-4" style={{ width: '10rem', backgroundColor: '#283779', border: 'none' }}></MyButton>
                    </Col>
                </div>
            </Col>
        </Container>
    </>
}

export default RegisterTemplate