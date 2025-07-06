import { useOutletContext } from "react-router-dom";
import { Button, InputLegend } from "@components"
export default function Dashboard(){
  const data = useOutletContext();
	return (
		<>
			DASH
			{data.token}
			<InputLegend 
				label="Channel ID" 
				placeholder="Channel ID is here."
			/>
		</>
	)
}