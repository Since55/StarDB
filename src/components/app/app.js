import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import ItemList from '../item-list'
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-services';

import './app.css';

export default class App extends Component {    

    swapiService = new SwapiService();

    render(){
        return(
            <div className='app.css'>
                <Header/>
                <RandomPlanet/>
                <PeoplePage/>
                <div className='page container-lg'>
                    <ItemList 
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllPlanets}
                        renderItem = {(item) => item.name}/>
                    {/* <PersonDetails personId={this.state.selectedPerson}/> */}
                </div>
                <div className='page container-lg'>
                    <ItemList 
                        onItemSelected={this.onPersonSelected}
                        getData={this.swapiService.getAllStarships}
                        renderItem = {(item) => item.name}/>
                    {/* <PersonDetails personId={this.state.selectedPerson}/> */}
                </div>
            </div>
        );
    };
}