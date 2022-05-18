import React from 'react'
import { Row } from 'react-bootstrap'
import { StatisticsType } from '../../../types'
import { StatisticsBox } from '../../molecules'

interface Props {
    statistics: Array<StatisticsType>;
}

const StatisticsWrapper = ({ statistics }: Props) => {
    return (
        <Row>
            {statistics.map((statistic) => <StatisticsBox {...statistic} />)}
        </Row>
    )
}

export default StatisticsWrapper