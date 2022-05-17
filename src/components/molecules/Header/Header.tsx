import { DefaultImage, MyButton, Avatar } from '../../atoms'

import { Container, Row, Col } from 'react-bootstrap'
import { Person } from 'react-bootstrap-icons'
import './style.scss'

import Hat from '../../../assets/images/hat.png'

interface Props {
    isLoggedIn?: boolean;
}

const Header = ({ isLoggedIn }: Props) => {
    return <Container >
        <Row className='pt-2 pb-1 mt-2' >
            <Col xs={7} md={9} xl={10}>
                <DefaultImage height={30} width={50} src={Hat} />
                <span style={{ paddingLeft: '10px' }}>Rate Teacher</span>
            </Col>
            <Col xs={5} md={3} xl={2} className="align-items-center">
                {!isLoggedIn ? <>
                    <Person />
                    <MyButton size={'sm'} className="loginButtonStyle" title='Login' />
                    <MyButton size={'sm'} className="registerButtonStyle" title='Register' />
                </>
                    : <div className='styledAvatar'><Avatar name='erza' /></div>}
            </Col>
        </Row>
    </Container >
}

export default Header