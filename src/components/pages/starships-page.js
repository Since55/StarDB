import React from 'react';
// import DoubleContainer from '../double-container/double-container';
import { StarshipList, StarshipDetails } from '../sw-components';
import ErrorBoundry from '../error-boundry';
import {withRouter} from 'react-router-dom';


const StarshipsPage = ({history}) => {

    // state = {
    //     selectedItem: 5
    // }
    //
    // onItemSelected = (selectedItem) => {
    //     this.setState({selectedItem});
    // }
    

    // render(){
        return(
        <ErrorBoundry>
            <div className='container'>
               <StarshipList
                onItemSelected={ (itemId) => {
                    history.push(itemId)
                } }/> 
            </div>
            

        </ErrorBoundry>
        )
    // }
}

export default withRouter(StarshipsPage);
//<DoubleContainer
// left={<StarshipList onItemSelected={this.onItemSelected}/>}
// right={<StarshipDetails itemId={this.state.selectedItem}/>}/>
