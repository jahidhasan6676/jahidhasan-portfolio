import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar';
import Footer from '../Pages/Shared/Footer';

const Root = () => {
    // bg-[#1f242d]
    //
    return (
        <div className='bg-[#1f242d]'>
            <div className='sticky top-0 z-50'>
                <Navbar></Navbar>
            </div>
            <div className='min-h-[calc(100vh-136px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;