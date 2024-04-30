import React from 'react'
import './App.css'
import {TodoListHeader} from './TodoListHeader';
import {AddTaskForm} from './AddTaskForm';
import {TasksList} from './TasksList';

// * CRUD
// * Create
// * Read
// * Update
// * Delete

export type TaskType = {
	id: number
	title: string
	isDone: boolean
}

function App() {
	const todoListTitle = 'What to learn'
	const tasks: TaskType[] = [
		{
			id: 1,
			title: 'HTML&CSS',
			isDone: true
		}, {
			id: 2,
			title: 'JS/TS',
			isDone: true
		}, {
			id: 3,
			title: 'React',
			isDone: false
		}
	]

	return (
			<div className="App">
				<div>
					<TodoListHeader title={todoListTitle}/>
					<AddTaskForm/>
					<TasksList tasks={tasks}/>
				</div>
			</div>
	)
}

export default App
