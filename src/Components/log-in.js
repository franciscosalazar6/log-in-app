import React from 'react';
import Username from './username';
import Password from './password';
import Button from './button';
import Navbar from './navbar';

export default class LogIn extends React.Component {
    render () {
        return (
            <div className= "border primary card text-center">

            <Navbar/>    
            
                <h3><b>Log In</b></h3>
            
            <Username/>

            <Password/>
            
            <Button/>

            </div>
        );
    }
}