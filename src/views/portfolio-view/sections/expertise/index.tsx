import { randomId } from '@mantine/hooks'
import ExpertiseBlock from '../../components/expertise-block'
import ScrollingSkills from '../../components/scrolling-skills'
import FirePot from '../../components/fire-pot-rive'
import { Expertises } from './data'
import './style.css'
import { useTranslation } from 'react-i18next'
import { useResponsiveDevice } from 'src/hooks'

function MyExpertise() {
	const { t } = useTranslation()
	const device = useResponsiveDevice()

	return (
		<div className="flex flex-col items-center gap-10 max-sm:gap-5">
			<div
				className="section-header flex gap-5 items-center max-sm:flex-col"
				style={{ fontSize: 'clamp(20px, 5vw, 50px)' }}
			>
				{t('portfolio.sections.expertises.header')}
				<div className="w-[150px] h-[150px]">
					<FirePot />
				</div>
			</div>

			<ScrollingSkills autoScroll={device === 'desktop'} />

			<div className="grid grid-cols-12 gap-5 w-full grid-flow-row-dense">
				{Expertises().map((item) => {
					return (
						<div
							key={randomId()}
							className="col-span-4 max-lg:col-span-6 max-md:col-span-6 max-sm:col-span-12"
						>
							<ExpertiseBlock data={item} />
						</div>
					)
				})}

				<div className="col-span-4 max-lg:col-span-12 max-md:col-span-12 max-sm:col-span-12">
					<div className="expertise-block-quote">
						<p className="text-xl max-sm:text-base font-bold">
							"The problem is not the problem, the problem is your attitude about the problem" 🐦
						</p>

						<span className="text-xs italic">-Captain Jack Sparrow, 'Pirates of the Caribbean'-</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyExpertise
