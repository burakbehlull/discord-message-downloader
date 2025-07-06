import { useOutletContext } from "react-router-dom";
import { Button, InputLegend, Avatar } from "@components"

export default function Dashboard(){
	const data = useOutletContext();
	
	return (
		<>
			<div className="flex gap-4 items-center">
				<Avatar link={data?.user?.avatar} mainStyles="mt-3" />
				<div>
					<p className="font-bold">  # {data?.user?.username}</p>
					<p className="text-sm"> {data?.user?.id} </p>
				</div>
			</div>
		
			<div className="flex gap-4 items-center justify-center mt-2">
				<InputLegend 
					mainStyles="mt-4"
					label="Channel Identity: " 
					placeholder="channel id is here"
					buttonName="pull"
					subtext="channel id where you'll receive messages"
				/>
				
			</div>
		</>
	)
}