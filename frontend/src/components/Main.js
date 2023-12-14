import React from 'react';
import './styleList.css';

const Main = () => {
    return (
        <div className='main-body'>
            <ul className='main-list'>

                <li className='adress'>Adress</li>
                <li className='date'>Date</li>
                <li className='status'>Status</li>
            </ul>
            <div className='main-menu'>
                <p>Halabyan 2A</p>
                <p>1 Hour Ago</p>
                <div className='circle'></div>
            </div>
        </div>
    );
};

export default Main;