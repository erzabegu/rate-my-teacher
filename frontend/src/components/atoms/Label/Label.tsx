import React from 'react'
import { Form } from 'react-bootstrap'

interface Props {
    text: string;
}

const Label = ({ text }: Props) => {
    return (
        <Form.Label>{text}</Form.Label>
    )
}

export default Label