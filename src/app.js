import 'STYLES/style.scss';

import Router from 'JS/router.js';
import Navigation from 'JS/navigation.jsx';
import AutoplayControls from 'JS/autoplay.jsx';

const router = new Router();
const nav = new Navigation({ router, visible: true });
const autoplayControls = new AutoplayControls({ router });

router.load('/json/ted.json');
