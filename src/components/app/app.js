import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../header';
import SwapiService from '../../services/swapi-services';
import {SwapiServiceProvider} from '../swapi-service-context.js';
import RandomPlanet from '../random-planet';
import {PeoplePage, 
        PlanetPage, 
        StarshipsPage,
        SecretPage,
        LoginPage} from '../pages'
import ErrorBoundry from '../error-boundry';

import './app.css';
import { StarshipDetails } from '../sw-components';

export default class App extends Component {    

    swapiService = new SwapiService();
    
    state = {
        isLoggedIn: false
    };

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    };
    

    render(){

        return(
            <ErrorBoundry>
                <SwapiServiceProvider value = {this.swapiService}>
                    <Router>
                        <div>
                            <Header/>
                            <RandomPlanet/>
                            <Switch>
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
                                <Route
                                    path='/login'
                                    render={ () => (<LoginPage 
                                            isLoggedIn={this.state.isLoggedIn}
                                            onLogin={this.onLogin}/>)}/>
                                <Route
                                    path='/secret'
                                    render={ () => (<SecretPage 
                                                isLoggedIn={this.state.isLoggedIn}/>)}/>

                                <Route render={() => <h2>Page not found</h2>}/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    };
}