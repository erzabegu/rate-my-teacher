import { Form, FormCheckProps } from 'react-bootstrap'

interface Props extends FormCheckProps { }

const CheckInputs = (props: Props) => {
    return <Form.Check {...props} />
    // qitu munesh me shti input type checkbox ose radio

}

export default CheckInputs