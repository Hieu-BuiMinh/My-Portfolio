import React, { MouseEventHandler, useEffect, useRef } from 'react'

function MouseFollower() {
	const dotRef = useRef<HTMLSpanElement>(null)
	const circleRef = useRef<HTMLSpanElement>(null)

	useEffect(() => {
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
			setTimeout(() => {
				if (dotRef.current && circleRef.current) {
					dotRef.current.style.visibility = 'hidden'
					circleRef.current.style.visibility = 'hidden'
				}
			}, 100)
		}

		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('mouseleave', handleMouseLeave)

		return () => {
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseleave', handleMouseLeave)
		}
	}, [])

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
