import React, { Component } from 'react';
import Counter from "./counter"

class Counters extends Component {
    
    render() { 
        
        return ( 
           
        
        <div>
           <button onClick={this.props.onReset} className="btn btn-primary btn-sm m-2 shadow-sm">Reset</button>
            {this.props.counters.map(count =>(
            <Counter 
            key={count.id} 
            onDelete={this.props.onDelete} 
            onIncrement={this.props.onIncrement} 
            onDecrement={this.props.onDecrement}
            counters={count}
            />
            ))}
        </div> 
        
        );
    }
}
 
export default Counters;