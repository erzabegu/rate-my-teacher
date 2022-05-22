import { DefaultImage, MyButton, Avatar } from '../../atoms'

import { Container, Row, Col } from 'react-bootstrap'
import { MortarboardFill, Person } from 'react-bootstrap-icons'
import './style.scss'

import Hat from '../../../assets/images/hat.png'
import { useNavigate } from 'react-router-dom'

interface Props {
    isLoggedIn?: boolean;
}

const Header = ({ isLoggedIn }: Props) => {

    const navigate = useNavigate()

    return <Container >
        <Row className='pt-2 pb-1 mt-2' >
            <Col xs={7} md={9} xl={10}>
                <MortarboardFill color={"#283779"} height={40} width={40} />
                <span style={{ paddingLeft: '10px' }}>Rate Teacher</span>
            </Col>
            <Col xs={5} md={3} xl={2} style={{ textAlign: 'right', color: "#283779" }}>
                {!isLoggedIn ? <>
                    <Person />
                    <MyButton size={'sm'} className="loginButtonStyle" title='Login' onClick={() => navigate('/login')} />
                    <MyButton size={'sm'} className="registerButtonStyle" title='Register' onClick={() => navigate('/register')} />
                </>
                    : <div className='styledAvatar'><Avatar name='erza' /></div>}
            </Col>
        </Row>
    </Container >
}

export default Header