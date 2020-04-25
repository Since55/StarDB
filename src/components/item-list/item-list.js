import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';

import './item-list.css';

export default class extends Component{

    swapiService = new SwapiService();

    state = {
        peopleList: null
    };

    componentDidMount(){
        this.swapiService.getAllPeople()
            .then( (peopleList) => {
                this.setState({
                    peopleList
                });
            });
    }

    renderItems(arr) {
        return arr.map( ({id,name}) => {
            return(
                <li className='list-group-item 
                    list-group-item-action'
                    key={id}
                    onClick ={() => {this.props.onItemSelected(id)}}>
                    {name}
                </li>
            )
        }
        )
    }

    render(){

        const { peopleList } = this.state;

        if(!peopleList){
            return <div className="jumbotron item-list"><Spinner/></div>
        }

        const items = this.renderItems(peopleList);

        return(
                <ul className=' list-group item-list'>
                    {items}                  
                </ul>
        )
    }
}