import React from 'react'
import {RadioInput} from "../../atoms";

interface Props {
    values: any;
}
const RenderRadio = ({values}: Props) => {
    return <>{values !== undefined && values.map((value: any)=> <RadioInput value={value}/>)}</>
}

export default RenderRadio