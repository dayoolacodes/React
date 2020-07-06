import React, { Component } from 'react';
import Todo from './components/Todo';
import Header from './components/layout/Header';
import AddTodo from './components/layout/AddTodo';
// import {v4 as uuid} from "uuid"; 
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About';
import axios from 'axios'





import './App.css';

class App extends Component {
  state = { 
    todo: [
      // {
      //   id: 1,
      //   title: "wakeup",
      //   completed: false
      // },
      // {
      //   id: 2,
      //   title: "freshen up",
      //   completed: false
      // },
    ]
   }
  
   componentDidMount(){
     axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res=>this.setState({todo:res.data}))
   }
   markCompleteInApp=(id)=>{
     console.log(id);
     this.setState({ todo:this.state.todo.map(tid=>
      {
        if(tid.id===id){
        tid.completed = !tid.completed;
      }
      return tid;
      }
      
      ) })
      
   }
   clearTodo =(id) =>{
     console.log("close clicked for " + id)
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res=>this.setState({todo: [...this.state.todo.filter(t=> t.id!==id)]}))    
    }

    addNewToDo=(title)=>{
      // const newToDo={
      //   id: uuid(),
      //  title,
      // completed: false
      // };
      // ;
      axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10', {title:title, completed:false}).then(res=>this.setState({todo:[...this.state.todo, res.data]}))
    }

  render() { 
    return ( 
      <Router>
        <div className="App">
            <div className="container">
            <Header />
            <Route exact path='/' render={ props =>(
              <React.Fragment>
                <p style={{textAlign:"center",color:"#fff", background:"grey"}}>Tick to mark completed tasks </p>
                <AddTodo  addToDo={this.addNewToDo}/>
                <Todo todos={this.state.todo} markComplete={this.markCompleteInApp} close={this.clearTodo}/>
                </React.Fragment>
            )}/>
           <Route path='/about' component={About}/>
            </div>
        </div>
    </Router>
     );
  }
}
 
export default App;
