import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/layouts/Header';
import Info from './components/pages/Info';
import AddTask from './components/layouts/AddTask';
import Todos from './components/Todos';
import axios from 'axios';
import uuid from 'uuid';

class App extends Component {
    state = {
      todos: [

      ]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res => this.setState({todos: res.data}));
    }
    status = (id) =>{
        this.setState({
            todos: this.state.todos.map( todo => {
                if(todo.id === id){
                    todo.isComplete = !todo.isComplete;
                }
                return todo;
            })
        });
    }
    delete = (id) =>{
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(
            res => this.setState({
            todos: [...this.state.todos.filter(
                (todo) => todo.id !== id
            )]
        })
        )
    }
    submit = (title) =>{
        axios.post("https://jsonplaceholder.typicode.com/todos").then(
            res => this.setState({
                todos: this.state.todos.concat({
                    title: title,
                    isCcmplete: false
                })
            })
        )

    }
    render() {
        return (
            <Router>
                <Route exact path="/" render={props =>
                    <React.Fragment>
                        <Header />
                        <AddTask submit={this.submit}/>
                        <Todos todos={this.state.todos} status={this.status} delete={this.delete}/>
                    </React.Fragment>
                }/>
                <Route path="/Info" render={Info}/>

            </Router>
        );
    }
}

export default App;