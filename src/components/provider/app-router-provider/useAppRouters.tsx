import { createBrowserRouter } from 'react-router-dom'
import App from 'src/App'
import { AppConfig } from 'src/app-config'
import PorfolioPage from 'src/pages/porfolio-page'

function useAppRouters() {
	const routerObject = createBrowserRouter([
		{
			path: AppConfig.router.root.path,
			element: <App />,
			children: [
				{
					path: '',
					element: <PorfolioPage />,
				},
			],
		},
		{
			path: '*',
			element: '<NotFoundPage />',
		},
		{
			path: AppConfig.router.notFound.path,
			element: '<NotFoundPage />',
		},
	])

	return routerObject
}

export default useAppRouters
