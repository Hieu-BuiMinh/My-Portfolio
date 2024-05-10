import { randomId } from '@mantine/hooks'
import ExperienceBlock from '../../components/experience-block'
import { experiences } from './data'

function MyExperience() {
	return (
		<div className="flex flex-col items-center gap-10 max-sm:gap-5">
			<p className="section-header" style={{ fontSize: 'clamp(20px, 5vw, 50px)' }}>
				Professional Experiences
			</p>

			<div className="grid grid-cols-12 gap-5 w-full">
				{experiences.map((exp) => {
					return (
						<div key={randomId()} className="col-span-6 max-lg:col-span-12">
							<ExperienceBlock data={exp} />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default MyExperience
