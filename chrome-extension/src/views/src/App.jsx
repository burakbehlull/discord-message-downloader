import { useEffect, useState } from 'react'
import Routes from "./routes/index"

import "./index.css"

function App() {
  /* const [token, setToken] = useState(null)

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
  
  return (
	<>
		<Routes />
	</>
  )
}

export default App
