import React from 'react';
import FreeItems from '../FreeItems/FreeItems';
import Header from '../Header/Header';
import NewsLetter from '../NewsLetter/NewsLetter';
import Review from '../Review/Review';
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <Header></Header>
            <FreeItems></FreeItems>
            <Review></Review>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;