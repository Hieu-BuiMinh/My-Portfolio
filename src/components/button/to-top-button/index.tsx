import { ActionIcon, Button } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { RiArrowUpDoubleLine } from '@remixicon/react'

function ToTopButton() {
	const [, scrollTo] = useWindowScroll()
	return (
		<ActionIcon onClick={() => scrollTo({ y: 0 })} variant="filled" size="sm" radius="xl" aria-label="Settings">
			<RiArrowUpDoubleLine size={18} />
		</ActionIcon>
	)
}

export default ToTopButton
