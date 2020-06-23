import React, { Component } from 'react';
import './App.css';
import Counters from "./components/counters";
import Navbar from "./components/navbar"

class App extends Component {
  state = { 
    counter:[
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 0}    
    ]
 }


 handleDelete=(counterId)=>{
     
     const deletedCounter = this.state.counter.filter(c=> c.id !== counterId) 
    //  this.state.counter.filter(count => id);
    this.setState({counter:deletedCounter})
    console.log("id: ", counterId, "deleted")
 }

 handleIncrement=(counter)=>{
   console.log("incremental")
     const counters = [...this.state.counter]
     const index = counters.indexOf(counter)
     counters[index] = {...counter };
     counters[index].value++
    this.setState({ counter:counters })
 }

 handleDecrement=(counter)=>{
  console.log("decremental")
    let counters = [...this.state.counter]
    const index = counters.indexOf(counter)
    counters[index] = {...counter };
    if((counters[index].value)>0) 
      {counters[index].value--}
   this.setState({counter:counters})
} 

 handleReset=()=>{
      const ccc = this.state.counter.map(c=> {
        c.value = 0;
        return c;
      }
      )
      this.setState(ccc);
     console.log("Reset Button Clicked");
     
 }
  
  render() { 
    return (  
    <React.Fragment>   
    <Navbar totalCounter={this.state.counter.filter(c=> c.value > 0).length}/>  
    <main className = "container">
    <Counters
    counters = {this.state.counter} 
    onDelete={this.handleDelete} 
    onIncrement={this.handleIncrement}
    onDecrement={this.handleDecrement}
    onReset={this.handleReset} 
    />
    </main>
  </React.Fragment>
    );
  }
}
export default App
 

