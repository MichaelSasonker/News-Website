import React from 'react';
import './table_data.css'

// <a key={obj.name}
//     href={obj.url} 
//     target='_blank' 
//     rel="noreferrer"
// >
//     {obj.name}
// </a>

const TableData = ({ dataTableProp }) => {

    return (
        <React.Fragment>
            <div className='div'>
                {dataTableProp.map((obj) => {
                    return (
                        <li key={obj.name}>
                            <form action={obj.url} key={obj.name}>
                                <button type='submit' >{obj.name}</button>
                            </form>
                        </li>
                    );
                })}
            </div>
        </React.Fragment>
    );
}

export default TableData;