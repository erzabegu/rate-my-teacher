import React from 'react'

interface Props {
    value: string | number;
}

const RadioInput = ({ value }: Props) => {
    return <div>
        <input type="radio" name="drone" value={value}  />
        <span style={{ padding: '10px' }}>{value}</span>
    </div>
}

export default RadioInput