import { randomId } from '@mantine/hooks'
import ExperienceBlock from '../../components/experience-block'
import { Experiences } from './data'
import { useTranslation } from 'react-i18next'

function MyExperience() {
	const { t } = useTranslation()

	return (
		<div className="flex flex-col items-center gap-10 max-sm:gap-5">
			<p className="section-header" style={{ fontSize: 'clamp(20px, 5vw, 50px)' }}>
				{t('portfolio.sections.experiences.header')}
			</p>

			<div className="grid grid-cols-12 gap-5 w-full">
				{Experiences().map((exp) => {
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
