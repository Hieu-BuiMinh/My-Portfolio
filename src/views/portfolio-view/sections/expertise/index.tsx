import React from 'react'
import GlassBlock from '../../components/glass-block'

function MyExpertise() {
	return (
		<div className="flex flex-col items-center gap-4">
			<p className="text-[35px] font-bold">MyExpertise</p>

			<div className="flex gap-5 flex-wrap">
				<GlassBlock />
				<GlassBlock />
			</div>
		</div>
	)
}

export default MyExpertise
