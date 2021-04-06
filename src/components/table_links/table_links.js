import React from 'react';
import TableData from '../table_data/table_data';
import './table_links.css'

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
        console.log(resArrOfArr)
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
                        <ul>
                            {
                                flag 
                                ? (tableDataArr.map(arr => {
                                    return (
                                        <TableData key={arr.name} dataTableProp={arr} />
                                    );
                                }))
                                : <td><a href='#' >No Sources</a></td>
                            }
                        </ul>
                    </tr>
                </tbody>
            </table>

        </React.Fragment>
    );
}

export default LinksTable;