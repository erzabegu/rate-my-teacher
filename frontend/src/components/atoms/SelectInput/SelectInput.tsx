import React from 'react'
import { Form } from 'react-bootstrap'

interface Props {
    options: Array<any>
}

const SelectInput = ({ options }: Props) => {
    return (
        <Form.Select style={{ width: '200px' }}>
            {options.map((option, index) => <option value={option.value} key={index}>{option.name}</option>)}
        </Form.Select>
    )
}

export default SelectInput