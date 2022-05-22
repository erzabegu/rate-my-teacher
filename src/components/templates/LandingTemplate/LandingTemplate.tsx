import React from 'react'
import { Container } from 'react-bootstrap'
import { StatisticsType } from '../../../types'
import { Header } from '../../molecules'
import { AboutUs, Footer, SearchBox, StatisticsWrapper } from '../../organisms'
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
            <AboutUs />
            <StatisticsWrapper statistics={statistics}></StatisticsWrapper>
        </Container>
        <Container fluid style={{ backgroundColor: '#234262', color: 'white' }}>
            <Footer />
        </Container>
    </>
    )
}

export default LandingTemplate