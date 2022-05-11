import React from 'react'
import { Row } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { DepartmentsList } from '../../molecules/DepartmentsList'
import { ProfessorsList } from '../../organisms/ProfessorsList'

const ProfessorTemplate = () => {
    return (
        <Container>
            <DepartmentsList options={[{ name: 'Edukim', value: 123 }, { name: 'FIEK', value: 123 }]} text={"Departments"} />
            <ProfessorsList professorsList={[{ professorName: 'name1', professorId: 1 }, { professorName: "name2", professorId: 2 }]} />
        </Container>
    )
}

export default ProfessorTemplate