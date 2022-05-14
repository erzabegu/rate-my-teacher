import React from 'react'
import { Nav } from 'react-bootstrap'

interface Props {
    text: string;
    onClick?(e?: any): void
}

const NavItems = (props: Props) => {
    return <Nav.Item>
        <Nav.Link onClick={props.onClick}>{props.text}</Nav.Link>
    </Nav.Item>
}

export default NavItems