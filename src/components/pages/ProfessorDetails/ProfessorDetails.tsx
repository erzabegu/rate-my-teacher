import React from 'react'
import { ProfessorDetailsTemplate } from '../../templates/ProfessorDetailsTemplate'

const ProfessorDetails = () => {

    const professorDegrees = [{
        degree: 60,
        degreeName: 'awesome'
    }, {
        degree: 40,
        degreeName: 'good'
    }]
    const professorProfile = {
        professorName: 'prof Name',
        professorId: 4,
    }

    return (
        <ProfessorDetailsTemplate professorDegrees={professorDegrees} professorProfile={professorProfile} />
    )
}

export default ProfessorDetails