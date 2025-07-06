export default function Avatar({link, mainStyles, ...props}){
	return (
		<div className={`avatar ${mainStyles ? mainStyles : ''}`}>
		  <div className="w-24 rounded-xl">
			<img src={link} {...props} />
		  </div>
		</div>
	)
}