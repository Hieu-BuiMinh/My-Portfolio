import { randomId } from '@mantine/hooks'
import { RiGithubLine, RiInstagramLine, RiLinkedinLine, RiTwitterXLine } from '@remixicon/react'
import './style.css'
import { useComputedColorScheme } from '@mantine/core'

function SideInfor() {
	const computedColorScheme = useComputedColorScheme('light')

	const socialNextwork = [
		{ icon: <RiGithubLine size={20} color="var(--color-link-badge)" />, href: 'https://github.com/Hieu-BuiMinh' },
		{
			icon: <RiInstagramLine size={20} color="var(--color-link-badge)" />,
			href: 'https://www.instagram.com/warlock.02.12',
		},
		{ icon: <RiTwitterXLine size={20} color="var(--color-link-badge)" />, href: 'https://twitter.com/MinhHiu777' },
		{
			icon: <RiLinkedinLine size={20} color="var(--color-link-badge)" />,
			href: 'https://www.linkedin.com/in/minh-hieu-bui-78a315208/',
		},
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
					{'minhhieu2122000@gmail.com'.split('').map((letter, i) => {
						const style = { '--neon-delay-index': (i + 1) * 100 + 'ms' } as React.CSSProperties
						return (
							<span
								className={`${computedColorScheme === 'dark' && 'neon-infor'}`}
								style={style}
								key={randomId()}
							>
								{letter}
							</span>
						)
					})}
				</a>
			</div>
		</>
	)
}

export default SideInfor
