import React, { Component } from 'react';

import SwapiService from '../../services/swapi-services';
import Spinner from '../spinner';

import './item-details.css';

const Record = ({item, field, label}) => {
    
    return(
        <li className='list-group-item'>
            <span className='term'> { label } </span>
            <span> { item[field] } </span>
        </li>
    )
    
}

export {
    Record
};

export default class extends Component{

    swapiService = new SwapiService();

    state = {
        item: null,
        loading: true,
        image: null
    };

    componentDidMount(){
        this.updateItem();
    }

    componentDidUpdate(prevProps){
        if (this.props.itemId !== prevProps.itemId){
            this.updateItem();
        }
    }

    onItemLoaded = (item) => {
        this.setState({
            item,
            loading: false
        })
    }

    updateItem(){
        this.setState({loading:true})
        const {itemId, getData, getImageUrl} = this.props;
        if (!itemId){
            return;
        }

        getData(itemId)
            .then( (item) => {
                this.setState({
                    item,
                    loading: false,
                    image: getImageUrl(item)
                })
            } );
    }

    render(){
        const {item, loading, image} = this.state;
        

        const spinner = !item || loading ? <Spinner/> : null;
        // const content = item && !loading ? <ItemView item = {item} image = {image}/> : null;
        if(!item){ return (<Spinner/>)}

        return(
            <div className='card person-details'>
                {/* {spinner} */}
                {/* {content} */}
                <img className='pimg' 
                    src={image}
                    alt='You have to use your POWER to see this person'></img>
                <div className='card-body'>
                    <h3 className='card-header'>{item.name}</h3>
                    <ul className='list-group list-group-flush'>
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                        
                    </ul>
                </div> 
            </div>
        );
    }
}

const ItemView = ({item, image}) => {

    const {id, name, gender,
            birthYear, eyeColor} = item;
    return(
        <React.Fragment>
           <img className='pimg' 
                    src={image}
                    alt='You have to use your POWER to see this person'></img>
            <div className='card-body'>
            {/* <h3 className='card-header'>{name}</h3> */}
                <ul className='list-group list-group-flush'>
                    {/* React.Children.map( this.props.chi) */}
                </ul>
            </div> 
        </React.Fragment>
    )
    
}




// `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
{/* <li className='list-group-item'>
    <span className='term'>Gender: </span>
    <span>{gender}</span>
    </li>
<li className='list-group-item'>
    <span className='term'>Birth Year: </span>
    <span>{birthYear}</span>
    </li>
<li className='list-group-item'>
    <span className='term'>Eye Color:</span> 
    <span>{eyeColor}</span>
    </li> */}