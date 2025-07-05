import { Outlet, useNavigate } from "react-router-dom"
import { Breadcrumbs } from "@components"

export default function Layout(){
	const navigate = useNavigate()
	
	function handleNavigator(name){
		navigate(name)
	}
	
	const user = { num: "Burak", role: "admin" };
	// justify-center
	return (
		<div className="flex flex-col items-center p-2 gap-2 text-center h-full w-[376px]">
			
			<nav>
				<Breadcrumbs>
					<li><a onClick={()=> handleNavigator("/")}>Home</a></li>
					<li><a onClick={()=> handleNavigator("/downloader")}>Downloader</a></li>
					<li><a onClick={()=> handleNavigator("/viewer")}>Viewer</a></li>
				</Breadcrumbs>
			</nav>
			<main>
				<Outlet context={user} />
			</main>
		</div>
	)
}