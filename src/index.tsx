import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import '@mantine/core/styles.css'
import AppProvider from './components/provider'
import AppRouterProvider from './components/provider/app-router-provider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<AppProvider>
			<AppRouterProvider />
		</AppProvider>
	</React.StrictMode>
)
