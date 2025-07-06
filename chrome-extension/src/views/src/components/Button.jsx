export default function Button({text, styles, ...props}){
	return (
		<button className={`${styles ? styles : 'btn'}`} {...props}>{text}</button>
	)
}