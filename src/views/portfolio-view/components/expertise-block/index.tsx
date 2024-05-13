import './style.css'

interface IExpertiseBlock {
	data: {
		header: string
		icon: string
		content: string
	}
}

function ExpertiseBlock({ data }: Readonly<IExpertiseBlock>) {
	return (
		<div className="expertise-block">
			<div className="expertise-block__header">
				<img
					className="header-icon"
					style={{ animationDelay: Math.random() * (3 - 1) + 1 + 's' }}
					src={data.icon}
					alt="expertise_img"
				/>
				<span className="text-xl">{data.header}</span>
			</div>
			<div className="expertise-block__content">
				<p className="text-[var(--color-link-badge)]">{'<h3>'}</p>
				<div className="expertise-block__content-overview">{data.content}</div>
				<p className="text-[var(--color-link-badge)]">{'</h3>'}</p>
			</div>
		</div>
	)
}

export default ExpertiseBlock
