import { Badge, Spoiler } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import { RiArrowUpSLine, RiLinkM } from '@remixicon/react'
import { useResponsiveDevice } from 'src/hooks'
import './style.css'

interface IExperienceBlock {
	data: {
		blockHeader: string
		contentHeader: string
		contentOverview: string | React.ReactNode
		badge?: { label: string }[]
		isNew?: boolean
		descUrls?: { url: string; label: string }[]
		meta?: {
			coName: string
			coAvt: string
			coOverview: string | React.ReactNode
		}
	}
}

function ExperienceBlock({ data }: Readonly<IExperienceBlock>) {
	const device = useResponsiveDevice()

	return (
		<div className={`glass-block ${data?.isNew && 'new'}`}>
			<div className="glass-block__header">
				<p className="text-[var(--color-link-badge)]">{data.blockHeader}</p>

				{data.meta && (
					<div className="w-full flex flex-col gap-2 text-center font-thin">
						<img
							className="w-20 h-20 mx-auto rounded-full max-md:w-14 max-md:h-14"
							alt="company-img"
							src={data.meta.coAvt}
						/>
						<div className="font-bold text-wrap">{data.meta.coName}</div>
						<div className="text-[12px] italic text-wrap max-sm:hidden">{data.meta.coOverview}</div>
					</div>
				)}
			</div>

			<div className="glass-block__content">
				<p className="glass-content__header">{data.contentHeader}</p>
				{device === 'mobile' ? (
					<Spoiler
						maxHeight={80}
						showLabel={<span className="text-[10px]">more...</span>}
						hideLabel={<RiArrowUpSLine size={15} />}
					>
						<p className="text-xs">{data.contentOverview}</p>
					</Spoiler>
				) : (
					<p className="glass-content__overview">{data.contentOverview}</p>
				)}

				<div className="glass-content__urls">
					{data?.descUrls?.map((item) => {
						return (
							<a target="_blank" rel="noreferrer" href={item.url} key={randomId()}>
								<Badge variant="light" color="cyan" leftSection={<RiLinkM size={15} />}>
									{item.label}
								</Badge>
							</a>
						)
					})}
				</div>

				{data?.badge && (
					<div className="glass-content__tech">
						{data.badge.map((badge) => {
							return (
								<Badge key={randomId()} variant="outline" color="var(--color-link-badge)">
									{badge.label}
								</Badge>
							)
						})}
					</div>
				)}
			</div>
		</div>
	)
}

export default ExperienceBlock
