import React, { useEffect, useState } from 'react'
import { Button, Col, Modal } from 'react-bootstrap';
import { getSchools } from '../../../services'
import { addSchool } from '../../../services/Schools/schoolsService';
import { CustomTable } from '../../molecules/Table'
import { MortarboardFill, Person, PlusCircle } from 'react-bootstrap-icons'
import AddSchoolDialog from './AddSchoolDialog';

const SchoolsTemplate = () => {
    const [schools, setSchools] = useState<Array<any>>([]);

    useEffect(() => {
        getSchools().then((res: any) => {
            console.log(res.data)
            setSchools(res.data)
        })
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: 'schoolName',
                accessor: 'schoolName',
            },
            {
                Header: 'schoolLocation',
                accessor: 'schoolLocation'
            },
            {
                Header: 'schoolZip',
                accessor: 'schoolZip'
            }
        ],
        []
    )

    const data = React.useMemo(() => schools, [schools]);
    const [show, setShow] = useState(false);
    const [rowToEdit, setRowToEdit] = useState();
    const [showDetails, setShowDetails] = useState(false);


    return <>
        <PlusCircle color={"#283779"} height={20} width={20} onClick={() => {
            setRowToEdit(undefined)
            setShow(true)
        }} />
        <AddSchoolDialog show={show} onClose={() => {
            setRowToEdit(undefined)
            setShow(false)
        }} setShow={setShow} rowToEdit={rowToEdit} setRowToEdit={setRowToEdit} />
        <CustomTable setShowDetails={setShowDetails} data={data} columns={columns} setRowToEdit={setRowToEdit} includeEdit show={show} setShow={setShow} />
    </>
}

export default SchoolsTemplate