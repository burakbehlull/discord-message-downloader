import { Outlet } from "react-router-dom"

import "../index.css"

export default function Layout(){
	return (
		<div className="flex flex-col items-center justify-center p-2 text-center">
			<Outlet />
		</div>
	)
}