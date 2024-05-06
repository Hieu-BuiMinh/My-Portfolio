import { randomId } from '@mantine/hooks'
import GlassBlock from '../../components/glass-block'

function MyExperience() {
	const experiences = [
		{
			blockHeader: 'string',
			contentHeader: 'string',
			contentOverview: 'string',
			badge: [{ lable: 'string' }],
		},
	]

	return (
		<div className="flex flex-col items-center gap-4">
			<p className="text-[35px] font-bold">Professional Experiences</p>

			<div className="grid grid-cols-12 gap-5 w-full">
				{experiences.map((exp) => {
					return (
						<div key={randomId()} className="col-span-6 max-sm:col-span-12">
							<GlassBlock data={exp} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default MyExperience
