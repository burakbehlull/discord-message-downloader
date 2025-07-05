import { Outlet } from "react-router-dom"
import { Breadcrumbs } from "@components"


export default function Layout(){
	// w-[380px]
	return (
		<div className="flex flex-col items-center justify-center p-2 text-center h-full">
			
			<nav>
				<Breadcrumbs>
					<li><a>Home</a></li>
					<li><a>Downloader</a></li>
					<li><a>Viewer</a></li>
				</Breadcrumbs>
			</nav>
			<main>
				<Outlet />
			</main>
		</div>
	)
}