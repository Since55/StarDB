import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class extends Component{

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }
    

    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, 7500);
    }

    componentWillUnmount() { 
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false    
        });
    }
    
    onError = (err) => {
        // onError="https://starwars-visualguide.com/assets/img/placeholder.jpg"
        this.setState({
            error:true,
            loading: false
        })
    }
    

    updatePlanet = () =>{
        const id = Math.floor(Math.random()*25 + 2);
        this.swapiService
            .getPlanet(id)
            .then( this.onPlanetLoaded )
            .catch(this.onError);
    }

    render(){
        const { planet, loading, error} = this.state;
        
        const hasData = !(loading || error);

        const errorMsg = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;

        return(
            <div className="jumbotron random-planet">
                {errorMsg}
                {spinner}
                {content}
            </div>
        );
    }
} 

const PlanetView = ({planet}) => {
    const {id, name, population, 
        rotationPeriond, diameter} = planet;
    return(
        <React.Fragment>
           <img className='rpimg'
                alt='You Have to use your POWER to see this planet'     
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}></img>
            <h3> {name} </h3>
            <p className="lead"> Population {population}</p>
            <p className="lead"> Rotation Period {rotationPeriond}</p>
            <p className="lead"> Diameter {diameter}</p> 
        </React.Fragment>
    )
}



