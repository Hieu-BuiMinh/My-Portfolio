import React from 'react'
import ReactDOM from 'react-dom/client'
import AppProvider from './components/provider'
import AppRouterProvider from './components/provider/app-router-provider'
import './css/global.css'
import '@mantine/core/styles.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<AppProvider>
			<AppRouterProvider />
		</AppProvider>
	</React.StrictMode>
)
