import React from "react";
import {List, ListItem, ListItemText } from "@material-ui/core";

const TodoList = (props) => {
		return (
			<List>
				{props.items.map((todo, i) => {
					let button;
					if(props.showButton) {
						button = props.buttonRender(i);
					}
					return (
						<div>
							{<ListItem key={i}>
							<ListItemText>{todo.title} </ListItemText>
							{button ? button : null}</ListItem>}
						</div>
						
					)
				})}
			</List>
		);
}

export default TodoList