import { useOutletContext } from "react-router-dom";
import { toast } from "react-hot-toast"

import { useData } from "@context"

export default function Downloader(){
	const contextData = useOutletContext()
	const { setData, data } = useData()

	const handleDownload = () => {
		if(!data?.messages || !data) return toast.error("İndirilecek veri yok.")
		const json = JSON.stringify(data, null, 2);
		const blob = new Blob([json], { type: "application/json" });
		const url = URL.createObjectURL(blob);

		
		const link = document.createElement("a");
		link.href = url;
		link.download = "data.json";
		document.body.appendChild(link);
		link.click();

		document.body.removeChild(link);
		URL.revokeObjectURL(url);
		
		toast.success("Mesajlar başarıyla indirildi.", {
			duration: 1000, id: "download-message"
		})
	};

	

	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-lg font-bold">Download Files</h3>
			<button className="btn" onClick={handleDownload}>.json</button>
		</div>
	)
}