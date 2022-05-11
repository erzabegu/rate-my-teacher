import React from 'react'
import { SearchBox, TopRatedContainer } from '../../organisms'
import './style.scss'

const LandingTemplate = () => {
    return (
        <div className="landingTemplateContainer">
            <span style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>Rate Me</span>
            <div className='searchWrapper'>
                <SearchBox />
            </div>
            <div>
                <TopRatedContainer />
            </div>
        </div>
    )
}

export default LandingTemplate