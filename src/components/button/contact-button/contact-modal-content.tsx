import { Button, Divider, Paper } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import {
	RiGithubFill,
	RiInstagramFill,
	RiLinkedinFill,
	RiPhoneFill,
	RiSendPlaneFill,
	RiTwitterXFill,
} from '@remixicon/react'
import DownLoadCVButton from '../download-cv-button'
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas'
import { useTranslation } from 'react-i18next'

function ContactModalContent() {
	const { t } = useTranslation()

	const socialNextwork = [
		{ icon: <RiGithubFill size={20} color="var(--color-link-badge)" />, href: 'https://github.com/Hieu-BuiMinh' },
		{
			icon: <RiInstagramFill size={20} color="var(--color-link-badge)" />,
			href: 'https://www.instagram.com/warlock.02.12',
		},
		{ icon: <RiTwitterXFill size={20} color="var(--color-link-badge)" />, href: 'https://twitter.com/MinhHiu777' },
		{
			icon: <RiLinkedinFill size={20} color="var(--color-link-badge)" />,
			href: 'https://www.linkedin.com/in/minh-hieu-bui-78a315208/',
		},
	]

	const { RiveComponent } = useRive({
		src: '/assets/riv/tentacles.riv',
		stateMachines: ['State Machine 1'],
		artboard: 'monstertentacle',
		layout: new Layout({
			fit: Fit.Contain,
			alignment: Alignment.Center,
		}),
		autoplay: true,
	})

	return (
		<div className="min-h-96 flex flex-col gap-5">
			<Paper shadow="sm" withBorder p={'sm'} classNames={{ root: '!flex !flex-wrap items-end gap-3' }}>
				<img
					src="/assets/images/commons/avatar/avt_01.png"
					alt="auth_avt"
					className="w-20 h-20 rounded-full flex-shrink-0"
				/>
				<div className="flex flex-col gap-3">
					<p className="font-bold max-md:text-2xl text-3xl">Warlock-BM</p>
					<p className="text-xs italic">-Bui Minh Hieu-</p>
				</div>
			</Paper>

			<div className="flex flex-wrap gap-3">
				<a className="max-sm:w-full" href="mailto:minhhieu2122000@gmail.com">
					<Button
						justify="space-between"
						variant="default"
						fullWidth
						size="xs"
						radius="xl"
						rightSection={<RiSendPlaneFill size={14} />}
					>
						minhhieu2122000@gmail.com
					</Button>
				</a>
				<a className="max-sm:w-full" href="tel:+84838739523">
					<Button
						justify="space-between"
						variant="default"
						fullWidth
						size="xs"
						radius="xl"
						rightSection={<RiPhoneFill size={14} />}
					>
						+84 838 739 523
					</Button>
				</a>
			</div>

			<Divider
				my="xs"
				label={
					<div className="flex flex-wrap gap-5 items-center justify-center">
						{socialNextwork.map((item) => {
							return (
								<a key={randomId()} href={item.href} className="p-1">
									{item.icon}
								</a>
							)
						})}
					</div>
				}
				labelPosition="center"
			/>

			<DownLoadCVButton innerText={t('commons.buttons.download_cv_btn_contact')} />

			<div className="w-full h-[100px]">
				<RiveComponent />
			</div>
		</div>
	)
}

export default ContactModalContent
