import React from 'react';
import LogIn from './log-in';
import Username from './username';
import Password from './password';
import Navbar from './navbar';

export default class Button extends React.Component {
    render () {
        return (
            <div className= "container">
                <button type= "submit">Login</button>
            </div>
        );
    }
}