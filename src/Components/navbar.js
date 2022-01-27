import React from 'react';
import Username from './username';
import Password from './password';
import Button from './button';

export default class Navbar extends React.Component {
    render () {
        return (
            <container>
            <nav className="navbar navbar-dark bg-dark justify-content-between">
  <a href= "url" className="navbar-brand">DANK MEMES</a>
  <form className="form-inline">
    <input className="form-control mr-sm-2" type="search" placeholder="#Trending" aria-label="Search"></input>
    <button className="btn btn-primary my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
</container>
        );
    }
}