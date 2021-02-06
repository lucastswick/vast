import Router from 'JS/router.js';
import Navigation from 'JS/navigation.jsx';
import AutoplayControls from 'JS/autoplay.jsx';
import Debugger from 'JS/debugger.jsx';

const isDemo = document.querySelector(`[data-demo]`);

if (isDemo) {
	const router = new Router();
	const nav = new Navigation({ router, visible: true });
	const autoplayControls = new AutoplayControls({ router });

	const demoUri = document
		.querySelector(`[data-demo]`)
		.getAttribute('data-demo');

	router.load(demoUri);
}

const isDebugger = document.querySelector(`[data-debug]`);
if (isDebugger && isDebugger.getAttribute('data-debug') === 'true') {
	const myDebugger = new Debugger(isDebugger);
}
