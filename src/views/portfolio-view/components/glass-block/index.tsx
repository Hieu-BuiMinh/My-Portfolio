import { Badge } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import './style.css'
import { RiLinkM } from '@remixicon/react'

interface IGlassBlock {
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

function GlassBlock({ data }: Readonly<IGlassBlock>) {
	return (
		<div className={`glass-block ${data?.isNew && 'new'}`}>
			<div className="glass-block__header">
				<p className="text-[var(--color-link-badge)]">{data.blockHeader}</p>

				{data.meta && (
					<div className="w-full flex flex-col gap-3">
						<img className="w-10 h-10 mx-auto" alt="co.img" src={data.meta.coAvt} />
						<div className="font-bold text-wrap text-center">{data.meta.coName}</div>
						<div className="text-[12px] italic text-wrap">{data.meta.coOverview}</div>
					</div>
				)}
			</div>

			<div className="glass-block__content">
				<p className="glass-content__header">{data.contentHeader}</p>
				<p className="glass-content__overview">{data.contentOverview}</p>

				<div className="glass-content__urls">
					{data?.descUrls?.map((item) => {
						return (
							<a target="_blank" rel="noreferrer" href={item.url} key={randomId()}>
								<Badge
									variant="light"
									color="cyan"
									leftSection={<RiLinkM size={15} />}
									styles={{ label: { color: 'unset' } }}
								>
									{item.label}
								</Badge>
							</a>
						)
					})}
				</div>

				<div className="glass-content__tech">
					{data?.badge?.map((badge) => {
						return (
							<Badge
								key={randomId()}
								variant="outline"
								color="var(--color-link-badge)"
								styles={{ label: { color: 'unset' } }}
							>
								{badge.label}
							</Badge>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default GlassBlock
