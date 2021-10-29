import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';

const Body = () => {
    return (    
        <Router>
            <Menu></Menu>
            <Main></Main>
            <Footer></Footer>
        </Router>
    );
};

export default Body;