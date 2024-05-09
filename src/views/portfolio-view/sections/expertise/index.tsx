import './style.css'

function MyExpertise() {
	return (
		<div className="flex flex-col items-center gap-4">
			<p className="section-header" style={{ fontSize: 'clamp(20px, 5vw, 50px)' }}>
				My Expertises
			</p>

			<div className="grid grid-cols-12 gap-5 w-full"></div>
		</div>
	)
}

export default MyExpertise
