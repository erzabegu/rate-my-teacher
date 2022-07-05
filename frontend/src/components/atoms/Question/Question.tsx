import React from 'react'

interface Props {
    question: string;
}

const Question = ({ question }: Props) => {
    return <div>{question}</div>

}

export default Question