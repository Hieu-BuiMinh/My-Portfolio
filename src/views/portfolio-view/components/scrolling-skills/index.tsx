import { randomId } from '@mantine/hooks'
import './style.css'
import {
	RiCss3Line,
	RiGithubLine,
	RiHtml5Line,
	RiJavascriptLine,
	RiNextjsLine,
	RiQuillPenLine,
	RiReactjsLine,
	RiTailwindCssLine,
} from '@remixicon/react'

function ScrollingSkills() {
	const coreSkill = [
		{ isNew: true, icon: <RiReactjsLine size={20} color="var(--color-surface-999)" />, lable: 'React JS' },
		{ isNew: false, icon: <RiQuillPenLine size={20} color="var(--color-surface-999)" />, lable: 'AntD' },
		{ isNew: true, icon: <RiNextjsLine size={20} color="var(--color-surface-999)" />, lable: 'Next JS' },
		{ isNew: false, icon: <RiQuillPenLine size={20} color="var(--color-surface-999)" />, lable: 'UI/UX' },
		{ isNew: true, icon: <RiReactjsLine size={20} color="var(--color-surface-999)" />, lable: 'Tanstack' },
		{ isNew: false, icon: <RiHtml5Line size={20} color="var(--color-surface-999)" />, lable: 'HTML' },
		{ isNew: false, icon: <RiQuillPenLine size={20} color="var(--color-surface-999)" />, lable: 'CSS' },
		{
			isNew: true,
			icon: <RiTailwindCssLine size={20} color="var(--color-surface-999)" />,
			lable: 'Tailwind',
		},
		{
			isNew: false,
			icon: <RiJavascriptLine size={20} color="var(--color-surface-999)" />,
			lable: 'JS-TS',
		},
		{ isNew: true, icon: <RiQuillPenLine size={20} color="var(--color-surface-999)" />, lable: 'Mantine' },
		{ isNew: false, icon: <RiGithubLine size={20} color="var(--color-surface-999)" />, lable: 'GIT' },
		{
			isNew: false,
			icon: <RiQuillPenLine size={20} color="var(--color-surface-999)" />,
			lable: 'Animation',
		},
		{ isNew: false, icon: <RiCss3Line size={20} color="var(--color-surface-999)" />, lable: 'CSS-SASS' },
	]

	const skills = [...coreSkill, ...coreSkill, ...coreSkill]

	return (
		<div className="skills-container">
			<div className="skills">
				{skills.map((skill) => {
					return (
						<span className={`skill ${skill.isNew && 'new-skill'}`} key={randomId()}>
							{skill.icon}
							{skill.isNew && <span className="text-white">{skill.lable}</span>}
							{!skill.isNew && <span className="text-[var(--color-surface-999)]">{skill.lable}</span>}
						</span>
					)
				})}
			</div>
			<div className="skills">
				{skills.map((skill) => {
					return (
						<span className={`skill ${skill.isNew && 'new-skill'}`} key={randomId()}>
							{skill.icon}
							{skill.isNew && <span className="text-white">{skill.lable}</span>}
							{!skill.isNew && <span className="text-[var(--color-surface-999)]">{skill.lable}</span>}
						</span>
					)
				})}
			</div>
		</div>
	)
}

export default ScrollingSkills
