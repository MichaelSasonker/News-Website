import React from 'react';
import './table_data.css'

const TableData = ({ dataTableProp }) => {

    return (
        <React.Fragment>
            <td>
                {dataTableProp.map((obj) => {
                    return (
                        <a 
                            href={obj.url} 
                            target='_blank' 
                            rel="noreferrer"
                        >
                            {obj.name}
                        </a>
                    );
                })}
            </td>
        </React.Fragment>
    );
}

export default TableData;