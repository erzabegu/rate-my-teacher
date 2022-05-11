import React from 'react'
import { Col } from 'react-bootstrap';
interface Props {
    children: any;
}

const ColumnWrapper = ({ children }: Props) => {
    return (
        <Col>
            {children}
        </Col>
    )
}

export default ColumnWrapper