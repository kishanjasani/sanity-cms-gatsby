import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const Layout = ({ children }) => {
    return (
        <div>
            <GlobalStyles />
            <Typography />
            <Header />
            <Nav />
            <p>{ children }</p>
            <Footer />
        </div>
    )
}

export default Layout;
