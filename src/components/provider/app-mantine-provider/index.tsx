import { MantineColorsTuple, MantineProvider, createTheme } from '@mantine/core'
import React from 'react'

interface IAppMantineProvider {
	children: React.ReactNode
}

const myTheme: MantineColorsTuple = [
	'#fff0e4',
	'#ffe0cf',
	'#fbbf9f',
	'#f79c6c',
	'#f47e40',
	'#f36c24',
	'#f36115',
	'#d95009',
	'#c24604',
	'#a93a00',
]

const theme = createTheme({
	colors: {
		myTheme,
	},
	autoContrast: true,
	luminanceThreshold: 0.4,
	primaryColor: 'myTheme',
})

function AppMantineProvider({ children }: IAppMantineProvider) {
	return <MantineProvider theme={theme}>{children}</MantineProvider>
}

export default AppMantineProvider
