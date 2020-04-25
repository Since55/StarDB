import React from 'react';

import './header.css';

const Header = () => {
    return(
        <div className='navbar navbar-expand-lg 
                navbar-dark bg-primary'>
            <span className='navbar-brand'>StarDB</span>
            
            <div className=" navbar-collapse" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">People <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Planets</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Starships</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
