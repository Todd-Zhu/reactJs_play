import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo,completed,filter } from '../actions/index';

class AddTodo extends Component{
	render() {
		return (
				<div>
					<input type="input" id="ipt" />
					<button type="button" onClick={ () => {this.props.dispatch(addTodo(document.getElementById('ipt').value));} }>
						add
					</button>
				</div>
			);
	}
}

AddTodo = connect()(AddTodo);
export default AddTodo;