import React from 'react';
import { Switch, Route} from "react-router-dom";
import AboutUs from '../AboutUs/AboutUs';
import FreeItems from '../FreeItems/FreeItems';
import GetGift from '../GetGift/GetGift';
import Home from '../Home/Home';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import Register from '../Register/Register';
import SendGift from '../SendGift/SendGift';

const Main = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route path="/freeitems">
                <FreeItems></FreeItems>
            </Route>
            <Route path="/sendgift">
                <SendGift></SendGift>
            </Route>
            <Route path="/getgift">
                <GetGift></GetGift>
            </Route>
            <Route path="/aboutus">
                <AboutUs></AboutUs>
            </Route>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="/register">
                <Register></Register>
            </Route>
            <Route path="*">
                <NotFound></NotFound>
            </Route>
        </Switch>
    );
};

export default Main;