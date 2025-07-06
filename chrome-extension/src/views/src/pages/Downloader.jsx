import { useOutletContext } from "react-router-dom";
import { useData } from "@context"

export default function Downloader(){
	const contextData = useOutletContext()
	const { setData, data } = useData()


	const handleDownload = () => {
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
	};

	

	return (
		<div className="flex flex-col gap-4">
			<h3 className="text-lg font-bold">Download Files</h3>
			<button className="btn" onClick={handleDownload}>.json</button>
		</div>
	)
}