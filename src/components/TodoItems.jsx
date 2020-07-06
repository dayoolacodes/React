import React, { Component } from 'react';
import PropTypes from "prop-types";


const btnStyle= {
    borderColor : "red",
    float:"right",
    textDecoration: "none",
    textOutline: "none",
    borderRadius: "50%",
    fontWeight: "bolder",
    cursor: "pointer",
    padding: "9px 9px"
}
class TodoItems extends Component {
    state = {  }
    
    getStyle=()=>{
        return{
            padding: "15px",
            backgroundColor: "#f4f4f4",
            borderBottom: "6px ccc dotted",
            textDecoration: this.props.todos.completed? "line-through" : "none", 
            margin:   "10px",
        } 
    }

  

    render() { 
        return ( 
            <div style={this.getStyle()}>
               <p>
               <input type="checkbox" onChange={this.props.markComplete.bind(this, this.props.todos.id)}/>{" "}
                {this.props.todos.title}
                <button style={btnStyle} onClick={this.props.cancel.bind(this,this.props.todos.id)}>X</button> 
                </p>
            </div>
         )
    }


}

TodoItems.propTypes = {
todos:PropTypes.object.isRequired,
markComplete:PropTypes.func.isRequired,
cancel:PropTypes.object.isRequired
}

export default TodoItems;