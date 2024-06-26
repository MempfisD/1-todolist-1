type TaskPropsType = {
	title: string
	isDone: boolean
	classes?: string
}

export const Task = ({title, isDone}: TaskPropsType) => {
	return (
			<>
				<li>
					<input type="checkbox" checked={isDone}/>
					{' '}
					<span>{title}</span>
				</li>
			</>
	);
};