import { Toaster } from 'react-hot-toast'
import AppMantineProvider from './app-mantine-provider'
import { HelmetProvider } from 'react-helmet-async'

interface IAppProvider {
	children: React.ReactNode
}

function AppProvider({ children }: Readonly<IAppProvider>) {
	return (
		<AppMantineProvider>
			<HelmetProvider>{children}</HelmetProvider>
			<Toaster />
		</AppMantineProvider>
	)
}

export default AppProvider
