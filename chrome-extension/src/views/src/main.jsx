import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "react-hot-toast"

import App from './App.jsx'
 
import { DataProvider } from "@context"

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <DataProvider>
		  <BrowserRouter>
			<App />
			<Toaster 
				position="top-center"
				reverseOrder={false}
			/> 
		  </BrowserRouter>
	  </DataProvider>
  </StrictMode>,
)
