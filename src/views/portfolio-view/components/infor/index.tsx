import { RiGithubLine, RiInstagramLine, RiLinkedinLine, RiTwitterXLine } from '@remixicon/react'
import './style.css'
import { randomId } from '@mantine/hooks'

function SideInfor() {
	const socialNextwork = [
		{ icon: <RiGithubLine size={20} color="var(--color-link-badge)" />, href: 'https://github.com/Hieu-BuiMinh' },
		{ icon: <RiInstagramLine size={20} color="var(--color-link-badge)" />, href: '#' },
		{ icon: <RiTwitterXLine size={20} color="var(--color-link-badge)" />, href: '#' },
		{ icon: <RiLinkedinLine size={20} color="var(--color-link-badge)" />, href: '#' },
	]
	return (
		<>
			<div className="side-infor left-5">
				<div className="flex flex-col gap-5">
					{socialNextwork.map((item) => {
						return (
							<a key={randomId()} href={item.href} className="hover:-translate-y-2 transition">
								{item.icon}
							</a>
						)
					})}
				</div>
			</div>
			<div className="side-infor right-5">
				<a className="mail-to" href="mailto:minhhieu2122000@gmail.com">
					minhhieu2122000@gmail.com
				</a>
			</div>
		</>
	)
}

export default SideInfor
