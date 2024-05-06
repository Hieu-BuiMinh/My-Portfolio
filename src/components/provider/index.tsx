import { Toaster } from 'react-hot-toast'
import AppMantineProvider from './app-mantine-provider'

interface IAppProvider {
	children: React.ReactNode
}

function AppProvider({ children }: Readonly<IAppProvider>) {
	return (
		<AppMantineProvider>
			{children}
			<Toaster />
		</AppMantineProvider>
	)
}

export default AppProvider
