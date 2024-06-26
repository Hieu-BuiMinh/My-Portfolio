import interact from 'interactjs'
import { useEffect } from 'react'
import './style.css'

function StickyBall() {
	function dragMoveListener(event: any) {
		const target = event.target

		const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
		const y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

		target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

		target.setAttribute('data-x', x)
		target.setAttribute('data-y', y)
	}

	useEffect(() => {
		const draggableRef = interact('.warlock-ball')
		draggableRef.draggable({
			inertia: true,
			modifiers: [
				interact.modifiers.restrictRect({
					restriction: 'parent',
					endOnly: true,
				}),
			],
			autoScroll: true,

			listeners: {
				move: dragMoveListener,
			},
		})

		return () => draggableRef.unset()
	}, [])

	return <span id="warlock-ball" className="warlock-ball glowing touch-none z-[2]" />
}

export default StickyBall
