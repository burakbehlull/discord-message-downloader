import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { useData } from "@context"
import { ChatBubble } from "@components"

export default function Viewer(){
	const [jsonData, setJsonData] = useState(null);
	
	const contextData = useOutletContext()
	const { data } = useData()

	
	const handleFileUpload = (e) => {
		const file = e.target.files[0];

		if (file && file.type === "application/json") {
		  const reader = new FileReader();

		  reader.onload = (e) => {
			try {
			  const parsed = JSON.parse(e.target.result);
			  setJsonData(parsed);
			} catch (err) {
			  console.error("Geçersiz JSON:", err);
			}
		  };

		  reader.readAsText(file);
		}
	};

	
	return (
		<div className="flex flex-col gap-4">
			<div className="flex gap-0 justify-center items-center">
				<input type="file" accept=".json" onChange={handleFileUpload} />
				<button className="btn" onClick={()=> setJsonData(null)}>Clear</button>
			</div>
			<ChatBubble messages={jsonData?.messages ?? data?.messages} username={data?.username} />
		</div>
	
	)
}