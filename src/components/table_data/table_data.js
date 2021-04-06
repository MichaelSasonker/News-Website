import React from 'react';
import './table_data.css'

const TableData = ({ dataTableProp }) => {

    return (
        <React.Fragment>
            <td>
                {dataTableProp.map((obj) => {
                    return (
                        <li>
                            <a 
                                key={obj.name}
                                href={obj.url} 
                                target='_blank' 
                                rel="noreferrer"
                            >
                                {obj.name}
                            </a>
                        </li>
                    );
                })}
            </td>
        </React.Fragment>
    );
}

export default TableData;