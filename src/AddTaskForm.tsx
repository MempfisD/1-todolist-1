import {Button} from './Button';
import React from 'react';

type AddTaskFormPropsType = {}
export const AddTaskForm = (props: AddTaskFormPropsType) => {
	return (
			<div>
				<input/>
				<Button title={'+'}/>
			</div>
	);
};
