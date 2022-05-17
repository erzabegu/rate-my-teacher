import React from 'react'
import { Container } from 'react-bootstrap'
import { StatisticsType } from '../../../types'
import { Header, StatisticsBox } from '../../molecules'
import { SearchBox, StatisticsWrapper } from '../../organisms'
import './style.scss'

interface Props {
    statistics: Array<StatisticsType>;
}

const LandingTemplate = ({ statistics }: Props) => {
    return (<>
        <Header />
        <div className="landingTemplateContainer">
            <SearchBox />
        </div>
        <Container className='mt-5'>
            <StatisticsWrapper statistics={statistics}></StatisticsWrapper>
        </Container>
    </>
    )
}

export default LandingTemplate