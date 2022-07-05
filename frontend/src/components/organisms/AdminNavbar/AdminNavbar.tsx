import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './AdminNavbar.scss'

const AdminNavbar = () => {
    const navigate = useNavigate();
    const pages = [
        { path: '', title: 'Dashboard' },
        { path: 'schools', title: 'Schools' },
        { path: 'professors', title: 'Professors' },
        { path: 'users', title: 'Users' },
        { path: 'questions', title: 'Questions' },
        { path: 'departments', title: 'Departments' },
    ]
    return <>
        {pages.map((page, i) => <div className='smallContainers' style={{ marginLeft: '30px', marginTop: '10px' }} key={i} onClick={() => navigate(page.path)}>{page.title}</div>)}
    </>
}

export default AdminNavbar