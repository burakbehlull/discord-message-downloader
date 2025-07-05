import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import Routes from "./routes/index"

import "./index.css"


function App() {
  const navigate = useNavigate()
  useEffect(()=> {
	  navigate("/")
  },[])
  
  return (
	<>
		<Routes />
	</>
  )
}

export default App
