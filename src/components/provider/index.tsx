import { Toaster } from 'react-hot-toast'
import AppMantineProvider from './app-mantine-provider'
import SeasonTheme from '../season-theme'

interface IAppProvider {
	children: React.ReactNode
}

function AppProvider({ children }: Readonly<IAppProvider>) {
	return (
		<AppMantineProvider>
			{children}
			<SeasonTheme />
			<Toaster />
		</AppMantineProvider>
	)
}

export default AppProvider
