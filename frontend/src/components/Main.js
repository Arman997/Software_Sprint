import React from 'react';
import './styleList.css';
import Table from './Table';

const Main = () => {
    return (
        <div className='main-body'>
            <ul className='main-list'>

                <li className='adress'>Adress</li>
                <li className='date'>Date</li>
                <li className='status'>Status</li>
            </ul>
                <Table/>
        </div>
    );
};

export default Main;