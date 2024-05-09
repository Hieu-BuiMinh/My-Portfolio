import { ActionIcon, Affix, Menu } from '@mantine/core'
import { RiSettings3Line } from '@remixicon/react'
import LanguageSegment from '../multilang-button'
import SeasonSegment from '../season-button'
import ToTopButton from '../to-top-button'

function FloatingMenuBottom() {
	return (
		<Affix position={{ bottom: 20, right: 25 }}>
			<Menu shadow="md" width={200} closeOnItemClick={false} withArrow>
				<Menu.Target>
					<ActionIcon variant="filled" radius="xl" aria-label="Settings">
						<RiSettings3Line size={20} />
					</ActionIcon>
				</Menu.Target>

				<Menu.Dropdown>
					<Menu.Label>Language</Menu.Label>
					<Menu.Item>
						<LanguageSegment />
					</Menu.Item>
					<Menu.Divider></Menu.Divider>
					<Menu.Label>Seasons</Menu.Label>
					<Menu.Item>
						<SeasonSegment />
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</Affix>
	)
}

export default FloatingMenuBottom
