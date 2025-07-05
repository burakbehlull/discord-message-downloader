import { useRoutes } from 'react-router-dom'
import { Layout } from "@pages"

export default function Routes(){

    return useRoutes([
        {
            path: '/',
            element: <Layout />,
			children: [
				{
					path: '/dashboard',
					element: <></>,
				},
				{
					path: '/show',
					element: <></>,
				}
			]
        }
    ])

}