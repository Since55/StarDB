import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = () => {

    const active = () => {
        return(
        <span className="sr-only">(current)</span>
        )
    }
    

    return(
        <div className='navbar navbar-expand-lg 
                navbar-dark bg-primary'>
            <Link to="/"><span className='navbar-brand'>StarDB</span></Link>
            
            <div className=" navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link btn btn-primary btn-sm" to="/people/">People</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-primary btn-sm" to="/planets/">Planets</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-primary btn-sm" to="/starships/">Starships</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-primary btn-sm" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link btn btn-primary btn-sm" to="/secret">Secret</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
