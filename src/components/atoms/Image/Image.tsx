import React from "react";
import Image from 'react-bootstrap/Image'

interface Props {
    src: string;
    fluid?: boolean;
    rounded?: boolean;
    roundedCircle?: boolean;
}
export const DefaultImage = ({ src, fluid, rounded, roundedCircle }: Props) => {
    return <Image src={src} fluid={fluid} rounded={rounded} roundedCircle={roundedCircle} />
}

export default DefaultImage