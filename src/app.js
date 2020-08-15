import 'STYLES/style.scss';

import Router from 'JS/router.js';
import Navigation from 'JS/navigation.jsx';

const router = new Router();
const nav = new Navigation({ router, visible: true });

router.load('/json/ted.json');
