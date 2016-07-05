import React, { Component } from 'react';
import { connect } from 'react-redux';

class TodoList extends Component{
	render(){
        return(
            <div>
                <ul>
                    {this.props.todos.map(
                            todo => <li>{todo.text}</li>
                    )}
                </ul>
            </div>
        );
	};
}

function mapStateToProps(state) {
    return { todos: state.todos };
}

TodoList = connect(mapStateToProps)(TodoList);
export default TodoList;