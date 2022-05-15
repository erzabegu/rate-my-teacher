import React from 'react'
import { Nav } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { NavItems } from '../../atoms'

interface Props {
    linkItems: Array<any>

}
const Navbar = ({ linkItems }: Props) => {
    const navigate = useNavigate();
    return <Nav>
        {linkItems.map((link) => <NavItems onClick={() => navigate(`${link.path}`)} text={link.text} />)}
    </Nav>
}

export default Navbar