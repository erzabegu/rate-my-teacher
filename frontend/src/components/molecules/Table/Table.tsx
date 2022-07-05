import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useTable } from 'react-table'


interface Props {
    columns: Array<any>,
    data: Array<any>,
    setRowToEdit?: any,
    includeEdit?: boolean,
    show?: boolean;
    setShow?: any;
    setShowDetails?: any;
}

const CustomTable = ({ columns, data, setRowToEdit, includeEdit, setShow, setShowDetails }: Props) => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })
    return (
        <Table {...getTableProps()} striped bordered hover>
            <thead>
                {headerGroups.map((headerGroup: any) => (
                    <>
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                            {includeEdit && <th>
                                edit
                            </th>}
                            <th>Details</th>
                        </tr>
                    </>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row: any) => {
                    prepareRow(row)
                    return (
                        <>
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell: any) => {
                                    return <td {...cell.getCellProps()} >{cell.render('Cell')}</td>
                                })}
                                <td onClick={() => {
                                    setRowToEdit(row.original)
                                    setShow(true)
                                }}>Edit </td>
                                {<td onClick={() => {
                                    setShowDetails(true)
                                    setRowToEdit(row.original)
                                }}>
                                    details
                                </td>}
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default CustomTable