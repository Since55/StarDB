import React, { Component } from 'react';

import Spinner from '../spinner';

import './item-list.css';

export default class extends Component{

    state = {
        itemList: null
    };

    componentDidMount(){

        const {getData} = this.props;

        getData()
            .then( (itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    renderItems(arr) {
        return arr.map( (item) => {

            const {id} = item;

            const label = this.props.renderItem(item);
            return(
                <li className='list-group-item 
                    list-group-item-action'
                    key={id}
                    onClick ={() => {this.props.onItemSelected(id)}}>
                    {label}
                </li>
            )
        }
        )
    }

    render(){

        const { itemList } = this.state;

        if(!itemList){
            return <div className="jumbotron item-list"><Spinner/></div>
        }

        const items = this.renderItems(itemList);

        return(
                <ul className=' list-group item-list'>
                    {items}                  
                </ul>
        )
    }
}