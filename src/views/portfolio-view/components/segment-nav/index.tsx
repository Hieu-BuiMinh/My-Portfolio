import { Avatar, Indicator, Menu, SegmentedControl } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import { memo } from 'react'
import { useResponsiveDevice } from 'src/hooks'
import ToggleDarkModeBtn from 'src/components/button/toggle-darkmode'
import DownLoadCVButton from 'src/components/button/download-cv-button'

import './style.css'
import { useTranslation } from 'react-i18next'
import ContactButton from 'src/components/button/contact-button'

interface ISegmentNav {
	navData: { value: string; data: { label: React.ReactNode; value: string }[] }
	handlesetNavData: (id: string) => void
}

function SegmentNav({ navData, handlesetNavData }: Readonly<ISegmentNav>) {
	const { t } = useTranslation()
	const device = useResponsiveDevice()

	if (device === 'mobile') {
		return (
			<div className="mobile-menu-avt">
				<ToggleDarkModeBtn />

				<Menu withArrow shadow="md" width={150}>
					<Menu.Target>
						<Indicator color="lime" size={8} processing>
							<Avatar className="target" radius="xl" src={'/assets/images/commons/avatar/avt_01.png'} />
						</Indicator>
					</Menu.Target>

					<Menu.Dropdown>
						{navData.data.map((nav) => {
							return (
								<Menu.Item
									onClick={() => {
										handlesetNavData(nav.value)
									}}
									key={randomId()}
									classNames={{ itemLabel: 'text-xs' }}
								>
									<a className="flex" href={`${nav.value}`}>
										{t(nav.label)}
									</a>
								</Menu.Item>
							)
						})}

						<div className="mt-2">
							<DownLoadCVButton />
						</div>
					</Menu.Dropdown>
				</Menu>
			</div>
		)
	}

	return (
		<div className="segment-container">
			<span>
				<ToggleDarkModeBtn />
			</span>
			<div className="segment-content">
				<ContactButton>
					<Indicator color="lime" size={8} processing>
						<Avatar radius="xl" src={'/assets/images/commons/avatar/avt_01.png'} />
					</Indicator>
				</ContactButton>
				<SegmentedControl
					className="segment-nav"
					withItemsBorders={false}
					radius="xl"
					value={navData.value}
					data={navData.data.map((item) => {
						return { ...item, label: t(item.label) }
					})}
					onChange={() => {
						handlesetNavData(navData.value)
					}}
				/>
			</div>

			<div className="w-[150px]">
				<DownLoadCVButton />
			</div>
		</div>
	)
}

export default memo(SegmentNav)
