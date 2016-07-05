//state树
/*{
	todos:[
		{text: 'text',completed: false},
		{text: 'text',completed: false}
	],
	filter: 'completed'
}*/
let nextTodoId = 0;
const addTodo = (text) => {
	return {
		type : "ADD_TODO",
		id: nextTodoId++,
		text : text
	};
};

const completed = (id) => {
	return {
		type : "COMPLETED",
		id : id
	};
};

const filter = (filterKey) => {
	return {
		type : "FILTER",
		filter : filterKey
	};
};

export { addTodo, completed ,filter };