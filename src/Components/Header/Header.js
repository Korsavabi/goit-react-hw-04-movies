import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <NavLink to="/" exact className="link">Home</NavLink>
                    <NavLink to="/movie" exact className="link">Search</NavLink>
                    <NavLink to="/genre" exact className="link">Genres</NavLink>
                    <NavLink to="/person" exact className="link">Person</NavLink>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;