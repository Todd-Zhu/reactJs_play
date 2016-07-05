import React, { Component } from 'react';
import AddTodo from './AddTodo.js';
import TodoList from './TodoList.js';

export default class App extends Component{
    render(){
        return(
            <div>
                <AddTodo />
                <TodoList />
            </div>
        );
    }
}

