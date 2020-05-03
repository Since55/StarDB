import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';
import SwapiService from '../../services/swapi-services';
import DoubleContainer from '../double-container/double-container';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
import {
    PersonList,
    PlanetList,
    StarshipList,
    PersonDetails,
    PlanetDetails,
    StarshipDetails
} from '../sw-components'

import './app.css';


export default class App extends Component {    

    swapiService = new SwapiService();
    
    render(){

        const {getPerson, getStarship, getPersonImage,
            getStarshipImage, getAllPeople} = this.swapiService;

        const starshipDetails = (
            <ItemDetails 
                itemId={5}
                getData={ getStarship }
                getImageUrl = { getStarshipImage }>
                    <Record field='model' label='Model'/>
                    <Record field='length' label='Length'/>
                    <Record field='cost' label='Cost'/>
            </ItemDetails>
        )
        
        const itemList = (
            <PersonList>
                { ({name}) => 
                    <span>{name}</span>
                }
            </PersonList>
        )

        const personDetails = (
            <PersonDetails itemId={80}/>
        )
        return(
            <div className='app.css'>
                <Header/>
                <DoubleContainer
                    left={itemList}
                    right={personDetails}
                />
            </div>
        );
    };
}