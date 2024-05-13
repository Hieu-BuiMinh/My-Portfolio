import { useEffect, useRef } from 'react'
import './style.css'
import { useComputedColorScheme } from '@mantine/core'

function MouseFollower() {
	const dotRef = useRef<HTMLSpanElement>(null)
	const circleRef = useRef<HTMLSpanElement>(null)

	const computedColorScheme = useComputedColorScheme()

	const handleMouseMove = (event: MouseEvent) => {
		const { clientX, clientY } = event

		setTimeout(() => {
			if (dotRef.current) {
				dotRef.current.style.left = `${clientX - 3}px`
				dotRef.current.style.top = `${clientY - 3}px`
			}
		}, 100)
		setTimeout(() => {
			if (circleRef.current) {
				circleRef.current.style.left = `${clientX - 15}px`
				circleRef.current.style.top = `${clientY - 15}px`
			}
		}, 170)
	}

	const handleMouseLeave = (event: MouseEvent) => {
		console.log(event)
		// setTimeout(() => {
		// 	if (dotRef.current && circleRef.current) {
		// 		dotRef.current.style.visibility = 'hidden'
		// 		circleRef.current.style.visibility = 'hidden'
		// 	}
		// }, 100)
	}
	const handleMousedown = () => {
		circleRef.current?.classList.add('scale-up')
	}
	const handleMouseup = () => {
		circleRef.current?.classList.remove('scale-up')
	}
	const handleWarlockBallMouseover = () => {
		if (dotRef.current && circleRef.current) {
			dotRef.current.style.opacity = '0'
			circleRef.current.style.opacity = '0'
		}
	}
	const handleWarlockBallMouseleave = () => {
		if (dotRef.current && circleRef.current) {
			dotRef.current.style.opacity = '1'
			circleRef.current.style.opacity = '1'
		}
	}

	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('mouseleave', handleMouseLeave)
		window.addEventListener('mousedown', handleMousedown)
		window.addEventListener('mouseup', handleMouseup)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseleave', handleMouseLeave)
			window.removeEventListener('mousedown', handleMousedown)
			window.removeEventListener('mouseup', handleMouseup)
		}
	}, [])

	useEffect(() => {
		// computedColorScheme === 'dark'
		// 	? circleRef.current?.classList.add('backdrop-invert')
		// 	: circleRef.current?.classList.remove('backdrop-invert')

		const warlockBall = document.getElementById('warlock-ball')
		warlockBall?.addEventListener('mouseover', handleWarlockBallMouseover)
		warlockBall?.addEventListener('mouseleave', handleWarlockBallMouseleave)

		return () => {
			warlockBall?.removeEventListener('mouseover', handleWarlockBallMouseover)
			warlockBall?.removeEventListener('mouseleave', handleWarlockBallMouseleave)
		}
	}, [computedColorScheme])

	return (
		<>
			<span
				id="mouse-circle"
				ref={circleRef}
				className="fixed z-50 w-[30px] h-[30px] border border-[var(--color-surface-700)] rounded-full top-0 left-0 pointer-events-none transition"
			/>
			<span
				id="mouse-dot"
				ref={dotRef}
				className="fixed z-50 w-[6px] h-[6px] rounded-full bg-[var(--color-follower-dot)] top-0 left-0 pointer-events-none transition "
			/>
		</>
	)
}

export default MouseFollower
