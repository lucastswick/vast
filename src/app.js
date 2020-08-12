import 'STYLES/style.scss';

import Router from 'JS/router.js';
import Navigation from 'JS/navigation.js';

const router = new Router('/json/ted.json');
const nav = new Navigation({ router });
