import { useOutletContext } from "react-router-dom";

export default function Dashboard({num}){
  const user = useOutletContext();
	return (
		<>
			DASH
			{user.num}
		</>
	)
}