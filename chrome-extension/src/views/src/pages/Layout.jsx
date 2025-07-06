import { useEffect, useState } from 'react'

import { Outlet, useNavigate } from "react-router-dom"

import { Breadcrumbs } from "@components"
import { getUserData } from "@api"

export default function Layout(){
	
	const [token, setToken] = useState(null)
	const [user, setUser] = useState(null)
	/*
	useEffect(() => {
		chrome.storage.local.get('token', (result) => {
		  if (result.token) {
			const token = result.token
			const tokenParser = token.replace(/"/g, '')
			setToken(tokenParser)
		  } else {
			setToken(null)
		  }
		})
	})
	*/
	
	async function userDataAction(){
		const userData = await getUserData(token)
		setUser(userData)
	}
	
	useEffect(()=> {
		userDataAction()
	}, [token])
	
	const navigate = useNavigate()
	
	function handleNavigator(name){
		navigate(name)
	}
	

	const data = { 
		token: token || null, 
		user: user || null 
	};
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
				<Outlet context={data} />
			</main>
		</div>
	)
}