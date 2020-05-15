import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from '../header';
import SwapiService from '../../services/swapi-services';
import {SwapiServiceProvider} from '../swapi-service-context.js';
import RandomPlanet from '../random-planet';
import {PeoplePage, PlanetPage, StarshipsPage} from '../pages'
import ErrorBoundry from '../error-boundry';


import './app.css';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {    

    swapiService = new SwapiService();
    
    render(){

        return(
            <ErrorBoundry>
                <SwapiServiceProvider value = {this.swapiService}>
                    <Router>
                        <div>
                            <Header/>
                            <RandomPlanet/>

                            <Route path="/" 
                                render={() => <h2>Welcome to Star Wars DataBase</h2>}
                                exact/>
                            <Route path="/people/:id?" component={PeoplePage}/>
                            <Route path="/planets" component={PlanetPage}/>
                            <Route path="/starships" exact component={StarshipsPage}/>
                            <Route path="/starships/:id" 
                                    render={({match}) => {
                                        const {id} = match.params
                                        return <StarshipDetails itemId={id}/>
                                    }}/>

                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    };
}