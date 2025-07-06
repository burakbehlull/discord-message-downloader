export function InputLegend({label, subtext, mainStyles, buttonName, buttonProps, ...props}){
	return (
		<fieldset className={`fieldset ${mainStyles ? mainStyles : ''}`}>
		  <legend className="fieldset-legend p-1 mb-1 text-lg">{label}</legend>
		  <div className="flex gap-2">
			  <input type="text" className="input outline-none border border-1 border-gray-200" {...props} />
<button className="btn btn-neutral" {...buttonProps}>{buttonName}</button>
		  </div>
		  {subtext && <p className="label text-sm">{subtext}</p>}
		</fieldset>
	)
}