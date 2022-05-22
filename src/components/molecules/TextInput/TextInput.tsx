import { Col } from 'react-bootstrap'
import { DefaultInput } from '../../atoms'

interface Props {
    placeholder: string;
    style?: any;
    className?: any;
}
const TextInput = (props: Props) => {
    return (<Col>
        <DefaultInput type='text' {...props} />
    </Col>)
}

export default TextInput