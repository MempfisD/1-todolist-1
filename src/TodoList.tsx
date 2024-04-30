import React from 'react';
import {TodoListHeader} from './TodoListHeader';
import {AddTaskForm} from './AddTaskForm';
import {TasksList} from './TasksList';
import {TaskType} from './App';

type TodoListPropsType = {
	todoListTitle: string
	tasks: TaskType[]
}

export const TodoList = ({todoListTitle, tasks}: TodoListPropsType) => {
	return (
			<div>
				<TodoListHeader title={todoListTitle}/>
				<AddTaskForm/>
				<TasksList tasks={tasks}/>
			</div>
	);
};