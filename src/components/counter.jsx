import React, { Component } from 'react';



// class Counter extends Component {
//     state = {  }
//     render() { 
//         return ( 
//             <div>
//                 {console.log(this.props.counters.value)}

//             </div>
//          );
//     }
// }
 
// export default Counter;

class Counter extends Component {
 
     style = {
        fontWeight: "bold",
        fontSize: 20
     }

    render() { 
    return (
        <div>
            <span style={this.style} className={this.getBadgeColor()}>{this.formCounter()} </span>
            <button onClick={()=>this.props.onIncrement(this.props.counters)} className="btn btn-outline-success btn-lg shadow"
            >    
                Increment
            </button>
            <button onClick={()=>this.props.onDecrement(this.props.counters)} className="btn btn-outline-danger btn-lg shadow m-2">Decrement</button>
            <button onClick={()=>this.props.onDelete(this.props.counters.id)} className="btn btn-danger shadow m-2">Delete</button>
        {/* <span>{this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}</span> */}
        </div>)
    }

    getBadgeColor() {
        let badgeColor = "badge shadow m-4 badge-";
        badgeColor += this.props.counters.value > 0 ? "primary" : "warning";
        return badgeColor;
    }

    formCounter() {
        const {value} = this.props.counters;
        return value === 0 ? " Zero " : value;
      }  
}

export default Counter;