import { Badge } from '@mantine/core'
import './style.css'

function GlassBlock() {
	return (
		<div className="glass-block">
			<p className="glass-block__header">2024-Present</p>

			<div className="glass-block__content">
				<p className="glass-block__content-header">Senior Frontend Engineer</p>
				<p className="glass-block__content-overview">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
					et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum. absolute -inset-x-4 -inset-y-2.5 hidden
					rounded md:-inset-x-6 md:-inset-y-4 lg:block
				</p>

				<div className="glass-block__content-tech">
					<Badge variant="outline" color="cyan" styles={{ label: { color: 'unset' } }}>
						Typescript
					</Badge>
					<Badge variant="outline" color="cyan" styles={{ label: { color: 'unset' } }}>
						NextJs
					</Badge>
				</div>
			</div>
		</div>
	)
}

export default GlassBlock