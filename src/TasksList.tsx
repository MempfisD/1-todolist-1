import {Task} from './Task';
import React from 'react';
import {TaskType} from './App';
import {Button} from './Button';

type TasksListPropsType = {
	tasks: TaskType[]
}

export const TasksList = ({tasks}: TasksListPropsType) => {
	const tasksList =
			<ul>
				{tasks.map(task => {
					return <Task title={task.title} isDone={task.isDone}/>
				})}
			</ul>
	return (
			<>
				{tasksList}
				<div>
					<Button title={'All'}/>
					<Button title={'Active'}/>
					<Button title={'Completed'}/>
				</div>
			</>
	);
};