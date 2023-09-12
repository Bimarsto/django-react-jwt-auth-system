import React from 'react';
import Navbar from '../components/Navbar';

const Layout = (props) => {
    return (
        <>
            <Navbar />
            <div className='main-container'>
                {props.children}
            </div>
        </>
    );
};

export default Layout;