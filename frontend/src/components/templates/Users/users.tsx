import React, { useEffect, useState } from 'react'
import { Button, Col, Modal } from 'react-bootstrap';
import { getProfessors, getUsers } from '../../../services'
import { addSchool } from '../../../services/Schools/schoolsService';
import { CustomTable } from '../../molecules/Table'

const Users = () => {

    const [users, setUsers] = useState<Array<any>>([]);

    useEffect(() => {
        getUsers().then((res: any) => {
            console.log(res.data)
            setUsers(res.data)
        })
    }, [])

    const columns = React.useMemo(
        () => [
            {
                Header: 'UserName',
                accessor: 'userSurname',
            },
        ],
        []
    )

    const data = React.useMemo(() => users, [users]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
        <Button variant="primary" onClick={handleShow}>Add</Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => {
                    setShow(false)
                    addSchool({
                        schoolName: 'new',
                        schoolZip: '3000',
                        schoolLocation: 'mitro',
                    })
                }}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
        <CustomTable data={data} columns={columns} />
    </>

}

export default Users