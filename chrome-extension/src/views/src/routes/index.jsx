import { useRoutes } from 'react-router-dom'
import { Layout, Dashboard, Viewer, Downloader } from "@pages"

export default function Routes(){

    return useRoutes([
        {
            element: <Layout />,
			children: [
				{
					path: '',
					element: <Dashboard />,
				},
				{
					path: '/viewer',
					element: <Viewer />,
				},
				{
					path: '/downloader',
					element: <Downloader />,	
				}
			]
        }
    ])

}