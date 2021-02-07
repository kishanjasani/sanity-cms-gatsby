import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Nav />
            <p>{ children }</p>
            <Footer />
        </div>
    )
}

export default Layout;
