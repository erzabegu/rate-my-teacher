import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { DefaultImage, MyButton } from '../../atoms'

const Header = () => {
    return <Container fluid>
        <Row>
            <Col className="justify-content-lg-space-between">
                <DefaultImage src={'https://www.axians.com/app/uploads/sites/11/2020/08/logo-axians.png'} />
            </Col>
            <Col>
                <MyButton title='SugnUp' />
                <MyButton title='SignIn' />
            </Col>
        </Row>
    </Container>
}

export default Header