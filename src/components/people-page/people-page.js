import React, { Component } from 'react';

import ItemList from '../item-list'
import PersonDetails from '../person-details';
import ErrorIndicator from '../error-indicator';
import SwapiService from '../../services/swapi-services';

import './people-page.css';

export default class PeoplePage extends Component{

    swapiService = new SwapiService();

    state = {
        selectedPerson: 1,
        hasError: false
    };

    componentDidCatch(){
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (id) => {
        this.setState( {
            selectedPerson:id
        })
    }

    render(){

        if(this.state.hasError) {
            return (
                <div className='page container-lg'>
                    <ErrorIndicator/>
                </div>
            )
        }

        return(
            <div className='page container-lg'>
                <ItemList 
                    onItemSelected={this.onPersonSelected}
                    getData={this.swapiService.getAllPeople }
                    renderItem = {({name, gender, birthYear}) => 
                        `${name} (${gender}, ${birthYear})`}/>
                <PersonDetails personId={this.state.selectedPerson}/>
            </div>
        )
    }
}