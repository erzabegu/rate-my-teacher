import React from 'react'
import { LandingTemplate } from '../../templates'

const LandingPage = () => {

    const statistics = [{
        iconName: 'professor',
        end: 45356,
        iconText: 'Professors'
    },
    {
        iconName: 'schools',
        end: 432,
        iconText: 'Schools'
    },
    {
        iconName: 'ratings',
        end: 52625,
        iconText: 'Ratings'
    },
    {
        iconName: 'users',
        end: 4432,
        iconText: 'Users'
    }]

    return <LandingTemplate statistics={statistics} />
}

export default LandingPage