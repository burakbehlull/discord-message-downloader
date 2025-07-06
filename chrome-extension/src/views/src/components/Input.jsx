export function InputLegend({label, ...props}){
	return (
		<fieldset className="fieldset">
		  <legend className="fieldset-legend">{label}</legend>
		  <input type="text" className="input outline-none border border-1 border-gray-200" {...props} />
		</fieldset>
	)
}