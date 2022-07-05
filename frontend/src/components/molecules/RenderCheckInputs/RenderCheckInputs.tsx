import React from 'react'
import { CheckInputs } from '../../atoms'

interface Props {
    options: Array<string | number> | undefined,
    type: 'checkbox' | 'radio' | 'switch';
}

const RenderCheckInputs = ({ options, type }: Props) => {
    console.log(type, options, 'type')
    return <>{options !== undefined && options.map((option) => <CheckInputs type={type} label={option} />)}</>
}

export default RenderCheckInputs