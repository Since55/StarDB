import React, { Component } from 'react';

import ItemList from '../item-list'
import ItemDetails from '../item-details';
import SwapiService from '../../services/swapi-services';
import ErrorBoundry from '../error-boundry';
import DoubleContainer from '../double-container/double-container';

import './people-page.css';

export default class PeoplePage extends Component{

    swapiService = new SwapiService();

    state = {
        selectedItem: 1,
    };

    onItemSelected = (id) => {
        this.setState( {
            selectedItem:id
        })
    }

    render(){

        const itemList = (
            <ErrorBoundry>
                <ItemList 
                onItemSelected={this.onItemSelected}
                getData={this.swapiService.getAllPeople }>
                {(i) => 
                    `${i.name} (${i.gender}, ${i.birthYear})`}
                </ItemList>
            </ErrorBoundry>
        )

        const itemDetails = (
            <ErrorBoundry>
                <ItemDetails itemId={this.state.selectedItem}/>
            </ErrorBoundry>
        )

        return(
            <React.Fragment>
                <DoubleContainer left={itemList} right={itemDetails}/>
            </React.Fragment>
        )
    }
}