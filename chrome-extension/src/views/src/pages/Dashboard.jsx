import { useOutletContext } from "react-router-dom";

export default function Dashboard(){
  const data = useOutletContext();
	return (
		<>
			DASH
			{data.token}
		</>
	)
}