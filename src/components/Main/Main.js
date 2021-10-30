import React from 'react';
import { Switch, Route} from "react-router-dom";
import AboutUs from '../AboutUs/AboutUs';
import FreeItems from '../FreeItems/FreeItems';
import GetGift from '../GetGift/GetGift';
import Home from '../Home/Home';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Register from '../Register/Register';
import SendGift from '../SendGift/SendGift';
import Dashboard from '../Dashboard/Dashboard';

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
            <PrivateRoute path="/sendgift">
                <SendGift></SendGift>
            </PrivateRoute>
            <PrivateRoute path="/getgift">
                <GetGift></GetGift>
            </PrivateRoute>
            <Route path="/aboutus">
                <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/dashboard">
                <Dashboard></Dashboard>
            </PrivateRoute>
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