import React from 'react'
import ProfessorDetailsTemplate from '../../templates/ProfessorTemplate/ProfessorTemplate'

const ProfessorsPage = () => {
    const departments = [
        { name: 'Edukim', value: 123 },
        { name: 'FIEK', value: 123 }
    ]
    const professorsList = [
        { professorName: 'Danielle', professorId: 1, professorSurname: ' Allen', departmentName: 'Education' },
        { professorName: "Bill", professorId: 2, professorSurname: 'Gates', departmentName: 'Fiek' }
    ]

    return <ProfessorDetailsTemplate options={departments} professorsList={professorsList} />

}

export default ProfessorsPage