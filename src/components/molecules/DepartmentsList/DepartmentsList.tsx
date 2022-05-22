import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Label, SelectInput } from '../../atoms'

interface Props {
    text: string;
    options: Array<any>;
}

const DepartmentsList = ({ text, options }: Props) => {
    return (
        <Row>
            <Col mx={'auto'}>
                <Label text={text} />
            </Col>
            <Col>
                <SelectInput options={options} />
            </Col>
        </Row>
    )
}

export default DepartmentsList