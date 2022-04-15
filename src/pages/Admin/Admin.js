import React from 'react';
import Sidebar from './Sidebar/Sidebar';

const Admin = () => {
    return (
        <div className='row fullscreen'>
            <div className='col-3 bg-dark p-0'>
                <Sidebar></Sidebar>
            </div>
            <div className='col-9 bg-light p-5'>
                
            </div>
        </div>
    );
};

export default Admin;