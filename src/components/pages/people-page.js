import React from 'react';
import { withRouter } from 'react-router-dom'
import DoubleContainer from '../double-container/double-container';
import { PersonList, PersonDetails } from '../sw-components';

const PeoplePage = ({history, match}) => {

    // state = {
    //     selectedItem: 4
    // }

    // onItemSelected = (selectedItem) => {
    //     this.setState({selectedItem});
    // }
    
    const { id } = match.params;
    // render(){
        return(
        <DoubleContainer 
            left={<PersonList onItemSelected={ (id) => {history.push(id)} }/>} 
            right={<PersonDetails itemId={id}/>}/>
        )
    // }
}

export default withRouter(PeoplePage);