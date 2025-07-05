export default function Breadcrumbs({children}){
	return (
		<div className="breadcrumbs text-sm">
		  <ul>
			{children}
		  </ul>
		</div>
	)
}