import { ProgressBar, ProgressBarProps } from 'react-bootstrap'

interface Props extends ProgressBarProps { }

const RatingProgressBar = (props: Props) => {
    return <ProgressBar {...props} />
}

export default RatingProgressBar