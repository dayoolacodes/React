import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';

class App  extends Component{
    constructor(){
        super();
        this.state ={
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({searchfield: event.target.value})
    }


    render(){
        const filterRobots = this.state.robots.filter(rob => {
            return rob.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        
    return(
        <div className="tc">
        <h1>ROBOFRIENDS</h1>
        <SearchBox onSearch={this.onSearchChange}/>
         <CardList robots={filterRobots}/>
         </div>
    );
}
}
export  default App