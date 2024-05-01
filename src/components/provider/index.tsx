import AppMantineProvider from './app-mantine-provider'

interface IAppProvider {
	children: React.ReactNode
}

function AppProvider({ children }: IAppProvider) {
	return <AppMantineProvider>{children}</AppMantineProvider>
}

export default AppProvider
