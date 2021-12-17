import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';
import { columns } from './column';
import './Table.scss';


const Table = ({ db }) => {
    return (
        <div className='table'>
            <MaterialTable
                columns={columns}
                data={db}
                style={{ width: "98vw", margin: "auto", padding: "60px 40px" }}
                title={<h1>Lista de empleados</h1>}
                options={{
                    pageSize: 10,
                }}
            />
        </div>
    )
}

export default Table;
