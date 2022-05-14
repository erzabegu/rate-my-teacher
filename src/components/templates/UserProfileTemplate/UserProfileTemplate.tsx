import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'
import { Navbar } from '../../molecules/Navbar'

const UserProfileTemplate = () => {
    const navigate = useNavigate()
    const linkItems = [{
        path: '',
        text: 'AccountDetails'
    }, {
        path: 'userRating',
        text: 'userRating'
    }, {
        path: 'savedProfessors',
        text: 'savedProfessors'
    }]
    return (<>
        <Navbar linkItems={linkItems} />
        <Container>
            <Row>
                <h4 onClick={() => navigate('accountDetails')}>Hello Erza, nice to see u here</h4>
            </Row>
            <Outlet />
        </Container>
    </>
    )
}

export default UserProfileTemplate