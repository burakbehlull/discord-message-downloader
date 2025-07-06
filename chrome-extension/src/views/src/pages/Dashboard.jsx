import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { Button, InputLegend, Input, Avatar } from "@components"
import { fetchAllMessages } from "@api"

export default function Dashboard(){
	const [messages, setMessages] = useState(null)
	const [channelId, setChannelId] = useState('')
	const [messageNumber, setMessageNumber] = useState(10)
	const data = useOutletContext();
	console.log(data)
	
	async function handleMessagesPull(){
		const response = await fetchAllMessages(channelId, data?.token, Number(messageNumber))
		
		setMessages(response)
	}
	
	return (
		<>
		{JSON.stringify(messages)}
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