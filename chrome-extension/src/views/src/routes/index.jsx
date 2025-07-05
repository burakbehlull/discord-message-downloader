import { useRoutes } from 'react-router-dom'
import { Layout, Dashboard } from "@pages"

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
					path: '/messages',
					element: <>messages</>,
				}
			]
        }
    ])

}