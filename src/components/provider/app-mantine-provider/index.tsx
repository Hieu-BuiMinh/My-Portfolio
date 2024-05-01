import { MantineProvider, createTheme } from '@mantine/core'
import React, { Children } from 'react'

const theme = createTheme({})

interface IAppMantineProvider {
	children: React.ReactNode
}

function AppMantineProvider({ children }: IAppMantineProvider) {
	return <MantineProvider theme={theme}>{children}</MantineProvider>
}

export default AppMantineProvider
