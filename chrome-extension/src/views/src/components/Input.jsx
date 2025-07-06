export function InputLegend({children, label, subtext, mainStyles}){
	return (
		<fieldset className={`fieldset ${mainStyles ? mainStyles : ''}`}>
		  <legend className="fieldset-legend p-1 mb-1 text-lg">{label}</legend>
		  <div className="flex flex-col gap-2">
			  {children}
		  </div>
		  {subtext && <p className="label text-sm">{subtext}</p>}
		</fieldset>
	)
}

export function Input({styles, ...props}){
	return (
		<input 
			type="text" 
			className={`input outline-none border border-1 border-gray-200 ${styles ?? ''}`} 
			{...props} 
		/>
	)

}