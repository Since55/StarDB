import React from 'react';

import ItemDetails, { Record } from '../item-details';
import {withSwapiService} from '../hoc-helper';

const PersonDetail = ({itemId, swapiService}) => {
    const {getPersonImage, getPerson} = swapiService;
    return(
        <ItemDetails 
            itemId={itemId}
            getData={ getPerson }
            getImageUrl = {getPersonImage}>
                <Record field='gender' label='Gender'/>
                <Record field='eyeColor' label='Eye Color'/>
        </ItemDetails>
    );  
}

const PlanetDetail = ({itemId, swapiService}) => {
    const {getPlanet, getPlanetImage} = swapiService;
    return(
        <ItemDetails 
            itemId={itemId}
            getData={ getPlanet }
            getImageUrl = { getPlanetImage }>
                <Record field='population' label='Population'/>
                <Record field='rotationPeriod' label='Rotation Period'/>
                <Record field='diameter' label='Diameter'/>
        </ItemDetails>
    )
};

const StarshipDetail = ({itemId, swapiService}) => {
    const {getStarship, getStarshipImage} = swapiService;
    return(
        <ItemDetails 
            itemId={itemId}
            getData={ getStarship }
            getImageUrl = { getStarshipImage }>
                <Record field='model' label='Model'/>
                <Record field='length' label='Length'/>
                <Record field='cost' label='Cost'/>
        </ItemDetails>
    )
};

const PersonDetails = withSwapiService(PersonDetail);
const PlanetDetails = withSwapiService(PlanetDetail);
const StarshipDetails = withSwapiService(StarshipDetail);

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}