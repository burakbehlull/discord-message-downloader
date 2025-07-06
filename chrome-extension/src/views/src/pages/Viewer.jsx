import { useOutletContext } from "react-router-dom";

export default function Viewer(){
	
	const data = useOutletContext()
	return (
		<>
			viewer
		</>
	)
}