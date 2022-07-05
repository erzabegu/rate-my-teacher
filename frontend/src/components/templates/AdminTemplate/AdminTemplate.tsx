import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AdminNavbar } from '../../organisms/AdminNavbar'
import { Outlet } from 'react-router-dom'
import './AdminTemplate.scss'
import { Header } from '../../molecules'

const AdminTemplate = () => {
    return <Container fluid>
        <Header isLoggedIn={true} />
        <Row className={'largeContainer'}>
            <Col lg={3} className={'pt-5 pb-5 pl-5'} style={{ backgroundColor: '#D9EEF6', paddingRight: '30px' }}>
                <AdminNavbar />
            </Col>
            <Col lg={9}>
                <Outlet />
            </Col>
        </Row>
    </Container >
}

export default AdminTemplate