import React, { Component } from 'react';
import PropTypes from 'prop-types'

class AddTodo extends Component {
    state = { 
        title:""
     }

     onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
     }

     onSubmit =(e)=>{
         e.preventDefault();
         this.props.addToDo(this.state.title);
         this.setState({title:""});
     }

    render() { 
        return ( 
            <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
            <input type="text" name="title" title={this.state.title} style={{flex:"10", padding:"10px"}} onChange={this.onChange} placeholder="Add ToDo..."/>
            <input type="submit" name="submit" className="btn" style={{flex:'1'}}/>
            </form>
         );
    }
}
 
AddTodo.propTypes = {
    addToDo:PropTypes.array.isRequired
    }
export default AddTodo;