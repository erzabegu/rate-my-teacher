import React, { useEffect, useState } from 'react'
import { Button, Col, Modal } from 'react-bootstrap';
import { ActionMeta, OnChangeValue } from 'react-select';
import { getDepartments } from '../../../services';
import { addSchool, modifySchool } from '../../../services/Schools'
import { SchoolType } from '../../../types';
import { DefaultInput } from '../../atoms';
import { CustomMultiselect } from '../../atoms/CustomMultiselect';


interface Props {
    show?: boolean;
    setShow?: any;
    rowToEdit?: any;
    setRowToEdit?: any;
    onClose(): void;
}

const AddSchoolDialog = ({ show, setShow, rowToEdit, setRowToEdit, onClose }: Props) => {
    const [school, setSchool] = useState<SchoolType>(initialSchoolType);
    const [departments, setDepartments] = useState<any>([]);

    useEffect(() => {
        rowToEdit && setSchool(rowToEdit);
    }, [rowToEdit])


    useEffect(() => {
        getDepartments().then((res: any) => {
            //@ts-ignore
            const t = res.data.map(({ _id, departmentName }) => ({ label: departmentName, value: _id }))
            setDepartments(t)
        })
    }, [])


    const selectNewOption = (userList: OnChangeValue<any, any>) => {
        setSchool(currentUserDetails => {
            return { ...currentUserDetails, departments: [...userList] }
        })
    }

    const removeSelectedOption = (userListFiltered: OnChangeValue<any, any>) => {
        setSchool(currentUserDetails => ({ ...currentUserDetails, departments: userListFiltered }))
    }


    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add school</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <DefaultInput
                    type={'text'}
                    placeholder='School Name'
                    value={school.schoolName}
                    onChange={(e) => setSchool({ ...school, schoolName: e.target.value })} />
                <DefaultInput
                    type='text'
                    placeholder='School Zip'
                    value={school.schoolZip}
                    onChange={(e) => setSchool({ ...school, schoolZip: e.target.value })} />
                <DefaultInput
                    type='text'
                    placeholder='School Location'
                    value={school.schoolLocation}
                    onChange={(e) => setSchool({ ...school, schoolLocation: e.target.value })} />
                <CustomMultiselect
                    label='smth'
                    options={departments}
                    value={school.departments}
                    name={''}
                    onChange={(userList: OnChangeValue<any, any>, actionMeta: ActionMeta<any>) => {
                        switch (actionMeta.action) {
                            case "select-option":
                                return selectNewOption(userList);
                            case "remove-value":
                                return removeSelectedOption(userList);
                            case "clear":
                                return removeSelectedOption([]);
                            default:
                                return null;
                        }
                    }} />
            </Modal.Body>
            <Modal.Footer>
                {rowToEdit && <Button variant="primary" onClick={() => {
                    modifySchool(school, school._id)
                    onClose();
                }}>
                    Save Changes

                </Button>}
                {!rowToEdit &&
                    <Button variant="secondary" onClick={() => {
                        addSchool(school)
                        setSchool(initialSchoolType)
                        setShow(false)
                    }}>
                        add
                    </Button>}

            </Modal.Footer>
        </Modal>

    )
}

const initialSchoolType: SchoolType = {
    _id: -1,
    schoolName: '',
    schoolZip: '',
    schoolLocation: '',
    departments: []
}

export default AddSchoolDialog;
