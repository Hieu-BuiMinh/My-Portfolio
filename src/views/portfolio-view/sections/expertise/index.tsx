import { randomId } from '@mantine/hooks'
import ExpertiseBlock from '../../components/expertise-block'
import ScrollingSkills from '../../components/scrolling-skills'
import { expertises } from './data'
import './style.css'

function MyExpertise() {
	return (
		<div className="flex flex-col items-center gap-10 max-sm:gap-5">
			<p className="section-header" style={{ fontSize: 'clamp(20px, 5vw, 50px)' }}>
				My Expertises
			</p>

			<ScrollingSkills />

			<div className="grid grid-cols-12 gap-5 w-full grid-flow-row-dense">
				{expertises.map((item) => {
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
							"The problem is not the problem, the problem is your attitude about the problem"
						</p>

						<span className="text-xs italic">-Captain Jack Sparrow, 'Pirates of the Caribbean'-</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MyExpertise
