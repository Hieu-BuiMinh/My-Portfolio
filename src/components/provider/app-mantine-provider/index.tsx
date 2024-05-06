import { MantineColorsTuple, MantineProvider, createTheme } from '@mantine/core'
import React from 'react'

interface IAppMantineProvider {
	children: React.ReactNode
}

const myTheme: MantineColorsTuple = [
	'#e0fffb',
	'#cefcf4',
	'#a3f5e8',
	'#73edda',
	'#4de8cf',
	'#33e4c8',
	'#1de3c5',
	'#00caad',
	'#00b39a',
	'#009b83',
]

const theme = createTheme({
	colors: {
		myTheme,
	},
	autoContrast: true,
	luminanceThreshold: 0.4,
	primaryColor: 'myTheme',
})

function AppMantineProvider({ children }: Readonly<IAppMantineProvider>) {
	return <MantineProvider theme={theme}>{children}</MantineProvider>
}

export default AppMantineProvider
