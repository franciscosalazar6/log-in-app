import React from 'react';
import Password from './password';
import Button from './button';
import Navbar from './navbar';

export default class Username extends React.Component {
    render () {
        return (
            <div className="container">
      <label for="uname">Username</label>
      <input type="text" placeholder="Username"></input>
            </div>
        );
    }
}