type ButtonPropsType = {
	title: string
	onClickHandler?: () => void
}

export const Button = ({title, onClickHandler}: ButtonPropsType) => {
	return <button>{title}</button>
};