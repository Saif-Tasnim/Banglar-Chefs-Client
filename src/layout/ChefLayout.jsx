import React from 'react';
import Header from '../Components/Share/Header/Header';
import Footer from '../Components/Share/Footer/Footer';
import { Outlet } from 'react-router-dom';

const ChefLayout = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default ChefLayout;