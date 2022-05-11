import React from 'react'
import { Form } from 'react-bootstrap'

interface Props {
    options: Array<any>
}

const SelectInput = ({ options }: Props) => {
    return (
        <Form.Select aria-label="Default select example">
            {options.map((option) => <option value={option.value}>{option.name}</option>)}
        </Form.Select>
    )
}

export default SelectInput