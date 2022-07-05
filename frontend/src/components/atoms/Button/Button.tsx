import React from "react";
import { Button, ButtonProps } from "react-bootstrap";
import { Size } from "../../../enums";


interface Props extends ButtonProps {
    title: string;
}

const MyButton = ({ title, ...props }: Props) => {
    return <Button {...props}>{title}</Button>
}

export default MyButton