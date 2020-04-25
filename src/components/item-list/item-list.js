import React, { Component } from 'react';

import './item-list.css';

export default class extends Component{



    render(){
        return(
            <div className='jumbotron list-group item-list'>
                <p className='list-group-item 
                    list-group-item-action'>Someone</p>
                <p className='list-group-item 
                    list-group-item-action'>Someone</p>
                <p className='list-group-item 
                    list-group-item-action'>Someone</p>
                <p className='list-group-item 
                    list-group-item-action'>Someone</p>
                <p className='list-group-item 
                    list-group-item-action'>Someone</p>
                <p className='list-group-item 
                    list-group-item-action'>Someone</p>
                <p className='list-group-item 
                    list-group-item-action'>Someone</p>
                <p className='list-group-item 
                    list-group-item-action'>Someone</p>                     
            </div>
        )
    }
}