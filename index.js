import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import reducers from './reducers/index';
import { createStore } from 'redux';
import App from './containers/App.js';

const store = createStore(reducers);
const root = document.getElementById('root');

//导入react组件

function render(){
	ReactDOM.render(
		<Provider store={store}>
            <App />
        </Provider>
	,root)
};

render();