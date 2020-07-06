import React, { Component } from 'react';
import TodoItems from "./TodoItems";
import PropTypes from "prop-types";

class Todo extends Component {
    state = {  }
    render() { 
        return this.props.todos.map(t=>(<TodoItems key={t.id} todos={t} markComplete={this.props.markComplete} cancel={this.props.close}/>));
    }
}

Todo.propTypes = {
todos:PropTypes.array.isRequired
}
 
export default Todo;