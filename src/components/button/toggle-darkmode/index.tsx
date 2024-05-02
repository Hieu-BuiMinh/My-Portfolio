import { Switch, useComputedColorScheme, useMantineColorScheme } from '@mantine/core'
import { RiMoonLine, RiSunLine } from '@remixicon/react'
import { memo } from 'react'

function ToggleDarkModeBtn() {
	const { setColorScheme } = useMantineColorScheme()
	const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true })

	const hanldeChangeTheme = () => {
		setTimeout(() => {
			setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')
		}, 200)
	}

	return (
		<Switch
			className="flex items-center justify-center rotate-90"
			onChange={hanldeChangeTheme}
			size="md"
			color="#555555"
			onLabel={<LightIcon />}
			offLabel={<DarkIcon />}
		/>
	)
}

export default memo(ToggleDarkModeBtn)

const LightIcon = () => {
	return <RiSunLine size={15} color="#ffd43b" className="-rotate-45" />
}
const DarkIcon = () => {
	return <RiMoonLine size={15} color="#228be6" className="-rotate-45" />
}
