import React from 'react';
import './styleList.css';

const Table = () => {
    return (
        <div className='table-div'>
            <table className='table'>
                <thead className='title'>
                    <tr>
                        <th>Adress</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className='table-body'>
                    <tr>
                        <td className='adress'>Halabyan A2</td>
                        <td className='date'> 1 hours ago </td>
                        <td><p className='status'>full</p></td>
                    </tr>
                </tbody>
            </table>
            
        </div>
    );
};

export default Table;