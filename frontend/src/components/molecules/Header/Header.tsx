import { MyButton, Avatar } from '../../atoms'

import { Container, Row, Col } from 'react-bootstrap'
import { MortarboardFill, Person } from 'react-bootstrap-icons'

import { useNavigate } from 'react-router-dom'

import './style.scss'

interface Props {
    isLoggedIn?: boolean;
    isOk?: boolean;
}

const Header = ({ isLoggedIn, isOk }: Props) => {

    const navigate = useNavigate()

    return <Container fluid>
        <Row className='pt-2 pb-1 mt-2' >
            <Col xs={7} md={9} xl={10}>
                <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                    <MortarboardFill color={"#283779"} height={40} width={40} />
                    <span style={{ paddingLeft: '10px' }}>Rate Teacher</span>
                </div>
            </Col>
            <Col xs={5} md={3} xl={2} style={{ textAlign: 'right', color: "#283779" }}>
                {!isLoggedIn ? <>
                    <Person />
                    <MyButton size={'sm'} className="loginButtonStyle" title='Login' onClick={() => navigate('/login')} />
                    <MyButton size={'sm'} className="registerButtonStyle" title='Register' onClick={() => navigate('/register')} />
                </> : isOk ? <MyButton size={'sm'} className="registerButtonStyle" title='Register' onClick={() => navigate('/register')} /> : <div className='styledAvatar'><Avatar name='erza' /></div>}
            </Col>
        </Row>
    </Container >
}

export default Header