import { useOutletContext } from "react-router-dom";
import { useData } from "@context"

export default function Viewer(){
	
	const contextData = useOutletContext()
	const { data } = useData()
	
	return (
		<>
			viewer
		</>
	)
}