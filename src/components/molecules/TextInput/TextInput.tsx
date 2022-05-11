import { Col } from 'react-bootstrap'
import { DefaultInput } from '../../atoms'

interface Props {
    placeholder: string;
}
const TextInput = (props: Props) => {
    return (<Col sm={12} md={6}>
        <DefaultInput type='text' {...props} />
    </Col>)
}

export default TextInput