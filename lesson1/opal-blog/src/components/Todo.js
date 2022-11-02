
import {memo} from "react";

const Todo = ({todos}) => {

	console.log("child render");

	return (
		<>

			<h2>My Todos</h2>

			{todos.map((todo, index) => {
				return <p key = {index}> {todos}</p>
			})}
		</>
	);

}

export default memo(Todo);