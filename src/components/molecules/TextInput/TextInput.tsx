import { Col } from 'react-bootstrap'
import { DefaultInput } from '../../atoms'

interface Props {
    placeholder: string;
}
const TextInput = (props: Props) => {
    return (<Col>
        <DefaultInput type='text' {...props} />
    </Col>)
}

export default TextInput