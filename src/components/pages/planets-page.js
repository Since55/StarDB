import React, {Component} from 'react';
import DoubleContainer from '../double-container/double-container';
import { PlanetList, PlanetDetails } from '../sw-components';
import ErrorBoundry from '../error-boundry';

export default class PlanetsPage extends Component{

    state = {
        selectedItem: 4
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem});
    }
    

    render(){
        return(
        <ErrorBoundry>  
            <DoubleContainer 
                left={<PlanetList onItemSelected={this.onItemSelected}/>} 
                right={<PlanetDetails itemId={this.state.selectedItem}/>}/>
        </ErrorBoundry> 
        )
    }
}