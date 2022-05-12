import React from "react";
import Image from 'react-bootstrap/Image'

interface Props {
    src: string;
    fluid?: boolean;
    rounded?: boolean;
    roundedCircle?: boolean;
    className?: string;
}

export const DefaultImage = (props: Props) => {
    return <Image {...props} />
}

export default DefaultImage