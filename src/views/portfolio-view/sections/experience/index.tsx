import GlassBlock from '../../components/glass-block'

function MyExperience() {
	return (
		<div className="flex flex-col items-center gap-4">
			<p className="text-[35px] font-bold">MyExpertise</p>

			<div className="grid grid-cols-12 gap-5 w-full">
				<div className="col-span-6 max-sm:col-span-12">
					<GlassBlock />
				</div>
				<div className="col-span-6 max-sm:col-span-12">
					<GlassBlock />
				</div>
				<div className="col-span-6 max-sm:col-span-12">
					<GlassBlock />
				</div>
				<div className="col-span-6 max-sm:col-span-12">
					<GlassBlock />
				</div>
			</div>
		</div>
	)
}

export default MyExperience
