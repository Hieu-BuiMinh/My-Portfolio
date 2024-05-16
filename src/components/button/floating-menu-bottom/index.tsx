import { ActionIcon, Affix, Menu } from '@mantine/core'
import { RiSettings3Line } from '@remixicon/react'
import LanguageSegment from '../multilang-button'
import SeasonSegment from '../season-button'
import { useTranslation } from 'react-i18next'

function FloatingMenuBottom() {
	const { t } = useTranslation()

	return (
		<Affix position={{ bottom: 20, right: 25 }}>
			<Menu shadow="md" width={200} closeOnItemClick={false} withArrow>
				<Menu.Target>
					<ActionIcon variant="filled" radius="xl" aria-label="Settings">
						<RiSettings3Line size={20} />
					</ActionIcon>
				</Menu.Target>

				<Menu.Dropdown>
					<Menu.Label>{t('commons.buttons.floating-btn-setting.language')}</Menu.Label>
					<Menu.Item>
						<LanguageSegment />
					</Menu.Item>
					<Menu.Divider></Menu.Divider>
					<Menu.Label>{t('commons.buttons.floating-btn-setting.seasons')}</Menu.Label>
					<Menu.Item>
						<SeasonSegment />
					</Menu.Item>
				</Menu.Dropdown>
			</Menu>
		</Affix>
	)
}

export default FloatingMenuBottom
