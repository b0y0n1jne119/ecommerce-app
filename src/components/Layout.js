import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

export default function Layout(props) {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}