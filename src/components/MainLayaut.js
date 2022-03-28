import React from 'react';
import Navbar from './Navbar';
import PersonalInfo from './PersonalInfo';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainLayaut = () => {
    return (
        <>
            <PersonalInfo />
            <Outlet />
            <Navbar />           
        </>
    );
};

export default MainLayaut;