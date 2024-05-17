import React from 'react'
import ReactDOM from 'react-dom/client'
import AppProvider from './components/provider'
import AppRouterProvider from './components/provider/app-router-provider'
import './css/global.css'
import '@mantine/core/styles.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<React.StrictMode>
		<AppProvider>
			<I18nextProvider i18n={i18n}>
				<AppRouterProvider />
			</I18nextProvider>
		</AppProvider>
	</React.StrictMode>
)
