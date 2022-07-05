import React from "react";
import Image, { ImageProps } from 'react-bootstrap/Image'

interface Props extends ImageProps { }
export const DefaultImage = (props: Props) => {
    return <Image {...props} />
}

export default DefaultImage