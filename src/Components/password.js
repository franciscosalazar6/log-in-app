import React from 'react';
import Username from './username';
import Button from './button';
import Navbar from './navbar';

export default class Password extends React.Component {
    render () {
        return(
            <div className="container">
      <label for="psw">Password</label>
      <input type="text" placeholder="Password"></input>
            </div>
        );
    }
}