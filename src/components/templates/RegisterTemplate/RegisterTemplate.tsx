import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { Key, People, PersonPlusFill } from 'react-bootstrap-icons'
import { DefaultInput, MyButton } from '../../atoms'
import './RegisterTemplate.scss'

const RegisterTemplate = () => {
    return <Container fluid style={{ height: '100vh' }} className="pt-5 loginWwrapper">
        <Col className='mx-auto pt-2' lg={4}  >
            <div className="registerContainer">
                <PersonPlusFill height={50} width={50} className="mt-3" />
                <Col lg={5} className="mx-auto pt-3 pb-3">
                    <DefaultInput type='text' placeholder='Name' className='mb-3' />
                    <DefaultInput type='text' placeholder='Surname' className='mb-3' />
                    <DefaultInput type='text' placeholder='School' className='mb-3' />
                    <DefaultInput type='text' placeholder='UserName' className='mb-3' />
                    <DefaultInput type='email' placeholder='E-mail' className='mb-3' />
                    <DefaultInput type='password' placeholder='Password' className='mb-3' />
                    <MyButton title="Register" className="mb-3" style={{ width: '10rem', backgroundColor: '#C9B9DB', border: 'none' }}></MyButton>
                </Col>
            </div>
        </Col>
    </Container>
}

export default RegisterTemplate