import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Button, InputLegend, Input, Avatar } from "@components"
import { fetchAllMessages } from "@api"
import { useData } from "@context"

export default function Dashboard(){
	
	const [channelId, setChannelId] = useState('')
	const [messageNumber, setMessageNumber] = useState(10)
	
	const contextData = useOutletContext();
	const { setData } = useData()
	
	async function handleMessagesPull(){
		const result = await fetchAllMessages(channelId, contextData?.token, Number(messageNumber))
		setData({
			messages: result,
			username: contextData?.user?.username
		})
	}
	
	
	return (
		<>
			<div className="flex gap-4 items-center">
				<Avatar link={contextData?.user?.avatar} mainStyles="mt-3" />
				<div>
					<p className="font-bold">  # {contextData?.user?.username}</p>
					<p className="text-sm"> {contextData?.user?.id} </p>
				</div>
			</div>
		
			<div className="flex gap-4 items-center justify-center mt-2">
				<InputLegend 
					mainStyles="mt-4"
					label="Channel Identity: " 
					subtext="channel id where you'll receive messages"
				>
					<Input placeholder="Channel Id" onChange={(e)=> setChannelId(e.target.value)} value={channelId} />
					<Input placeholder="Message Number" onChange={(e)=> setMessageNumber(e.target.value)} value={messageNumber} />
					<button className="btn btn-neutral" onClick={handleMessagesPull}>Pull</button>
				</InputLegend>
			</div>
		</>
	)
}