import { Badge } from '@mantine/core'
import { randomId } from '@mantine/hooks'
import './style.css'

interface IGlassBlock {
	data: {
		blockHeader: string
		contentHeader: string
		contentOverview: string
		badge?: { lable: string }[]
	}
}

function GlassBlock({ data }: Readonly<IGlassBlock>) {
	return (
		<div className="glass-block">
			<p className="glass-block__header">{data.blockHeader}</p>

			<div className="glass-block__content">
				<p className="glass-content__header">{data.contentHeader}</p>
				<p className="glass-content__overview">{data.contentOverview}</p>

				<div className="glass-content__tech">
					{data?.badge?.map((badge) => {
						return (
							<Badge
								key={randomId()}
								variant="outline"
								color="cyan"
								styles={{ label: { color: 'unset' } }}
							>
								{badge.lable}
							</Badge>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default GlassBlock
