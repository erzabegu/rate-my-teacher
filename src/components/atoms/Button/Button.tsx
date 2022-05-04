import React from "react";
import { Button } from "react-bootstrap";
import { Size } from "../../../enums";

interface Props {
    size: Size.SM | Size.LG;
    variant?: string;
    active?: boolean;
    disabled?: boolean;
    children: string | number;
}

const DefaultButton = ({ size, variant, active, disabled, children }: Props) => {
    return <Button size={size} variant={variant} active={true} disabled={true}>{children}</Button>
}

export default DefaultButton