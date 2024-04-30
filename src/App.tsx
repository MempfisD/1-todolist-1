import React from 'react'
import './App.css'
import {TodoList} from './TodoList';

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
				<TodoList todoListTitle={todoListTitle} tasks={tasks}/>
			</div>
	)
}

export default App
