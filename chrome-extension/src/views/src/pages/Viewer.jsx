import { useOutletContext } from "react-router-dom";
import { useData } from "@context"
import { ChatBubble } from "@components"

export default function Viewer(){
	
	const contextData = useOutletContext()
	const { data } = useData()
	
	return <ChatBubble messages={data?.messages} username={data?.username} />
}