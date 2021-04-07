import React from 'react';
import TableData from '../table_data/table_data';
import './table_links.css'


let counter = 1000;

const LinksTable = ({ dataProp }) => {

    const [tableDataArr, setTableDataArr] = React.useState(dataProp);
    const [flag, setFlag] = React.useState(false);

    const ArrangeFunction = () => {
        let resArr = [];
        let resArrOfArr = [];

        for (let i = 0; i < dataProp.length; ++i) {
            resArr.push(dataProp[i]);

            if ((i % 10 === 0) && (i !== 0)) {
                resArrOfArr.push(resArr)
                resArr = [];
            }
        }
        return (resArrOfArr);
    }

    React.useEffect(()=> {

        setTableDataArr(ArrangeFunction());
        if(tableDataArr.length > 0) {
            setFlag(true);
        }

    }, [flag]);


    return (
        <React.Fragment>
            <table className='footer-links'>
                <tbody>
                    <tr className='table-row'>
                        <td>
                            <ul>
                                {
                                    flag 
                                    ? (tableDataArr.map(arr => {
                                        return (
                                            <TableData key={counter++} dataTableProp={arr} />
                                        );
                                    }))
                                    : <li><button>No Sources</button></li>
                                }
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

        </React.Fragment>
    );
}

export default LinksTable;