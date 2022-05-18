import React from 'react'

interface Props {
    className?: any;
    text?: string;
    style?: any
}
const MyText = (props: Props) => {
    return <span {...props}>{props.text}</span>

}

export default MyText