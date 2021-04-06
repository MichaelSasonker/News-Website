import React from 'react';
import TableData from '../table_data/table_data';
import './table_links.css'

const LinksTable = ({ dataProp }) => {
    // console.log(dataProp)
    const [tableDataArr, setTableDataArr] = React.useState([]);
    const [flag, setFlag] = React.useState(false);

    React.useEffect(()=> {
        const ArrangeFunction = () => {
            let resArr = [];
            let resArrOfArr = [];

            for (let i = 0; i < dataProp.length; ++i) {
                resArr.push(dataProp[i]);

                if ((i % 10 === 0) && (i !== 0)) {
                    resArrOfArr.push(resArr)
                    resArr.splice(0, resArr.length);
                }
            }
            console.log(resArrOfArr)
            setTableDataArr(resArrOfArr);
        }

        ArrangeFunction();
        setFlag(true);

    }, [flag]);


    return (
        <React.Fragment>
            <table className='footer-links'>
                <tbody>
                    <tr className='table-row'>
                        {
                            flag 
                            ? (tableDataArr.map((arr) => {
                                console.log(arr)
                                return (
                                    <TableData key={arr.name} dataTableProp={arr} />
                                );
                            }))
                            : <td><a>aaaa</a></td>
                        }
                    </tr>
                </tbody>
            </table>

        </React.Fragment>
    );
}

export default LinksTable;