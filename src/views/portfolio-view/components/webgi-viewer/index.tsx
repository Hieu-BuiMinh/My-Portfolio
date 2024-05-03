import React, { useRef, useState, useCallback, forwardRef, useEffect } from 'react'
import {
	ViewerApp,
	AssetManagerPlugin,
	GBufferPlugin,
	ProgressivePlugin,
	TonemapPlugin,
	SSRPlugin,
	SSAOPlugin,
	BloomPlugin,
	GammaCorrectionPlugin,
	addBasePlugins,
	mobileAndTabletCheck,
	AssetManagerBasicPopupPlugin,
	FileTransferPlugin,
	CanvasSnipperPlugin,
	TweakpaneUiPlugin,
	IViewerPlugin,
} from 'webgi'

function WebgiViewer() {
	const canvasRef = useRef<HTMLCanvasElement>(null)

	const setupViewer = useCallback(async () => {
		console.log(123)
		const viewer = new ViewerApp({
			canvas: canvasRef.current as HTMLCanvasElement,
		})

		await addBasePlugins(viewer)

		await viewer.addPlugin(AssetManagerBasicPopupPlugin)

		await viewer.addPlugin(FileTransferPlugin)

		await viewer.addPlugin(CanvasSnipperPlugin)

		viewer.renderer.refreshPipeline()

		// await viewer.load('/assets/files/glb/cute_duck.glb')

		const uiPlugin = await viewer.addPlugin(TweakpaneUiPlugin)
		uiPlugin.setupPlugins<IViewerPlugin>(TonemapPlugin, CanvasSnipperPlugin)
	}, [])

	useEffect(() => {
		setupViewer()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div id="webgi-canvas-container">
			<canvas id="webgi-canvas" ref={canvasRef} />
			123
		</div>
	)
}

export default WebgiViewer
