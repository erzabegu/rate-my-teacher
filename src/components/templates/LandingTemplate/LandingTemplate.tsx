import React from 'react'
import { Header } from '../../molecules'
import { SearchBox, TopRatedContainer } from '../../organisms'
import './style.scss'

const LandingTemplate = () => {
    return (<>
        <Header />
        <div className="landingTemplateContainer">
            <span style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>Rate Me</span>
            <div className='searchWrapper'>
                <SearchBox />
            </div>
            <div>
                <TopRatedContainer />
            </div>
        </div>
    </>
    )
}

export default LandingTemplate