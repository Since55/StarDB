import React, { Component } from 'react';

import './person-details.css';

export default class extends Component{


    render(){
        return(
            <div className='jumbotron person-details'>
                <img className='pimg' src='https://images-na.ssl-images-amazon.com/images/I/712Lwo7hMoL._AC_SX425_.jpg'></img>
                <h3>Name</h3>
                <p>Gender </p>
                <p>Birth Year </p>
                <p>Eye Color </p>
            </div>
        );
    }
}