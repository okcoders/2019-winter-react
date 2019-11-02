import React from 'react'

function TodoList(props) {
	const todosToRender = props.items.map((todo, i) => {
		return <li key={i}>{todo.name}</li>
	})

	return (
		<ol>
			{todosToRender}
		</ol>
	)
}

export default TodoList