/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/vast.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/Navigo/lib/navigo.min.js":
/*!***********************************************!*\
  !*** ./node_modules/Navigo/lib/navigo.min.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():undefined}(this,function(){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function t(){return!("undefined"==typeof window||!window.history||!window.history.pushState)}function n(e,n,o){this.root=null,this._routes=[],this._useHash=n,this._hash=void 0===o?"#":o,this._paused=!1,this._destroyed=!1,this._lastRouteResolved=null,this._notFoundHandler=null,this._defaultHandler=null,this._usePushState=!n&&t(),this._onLocationChange=this._onLocationChange.bind(this),this._genericHooks=null,this._historyAPIUpdateMethod="pushState",e?this.root=n?e.replace(/\/$/,"/"+this._hash):e.replace(/\/$/,""):n&&(this.root=this._cLoc().split(this._hash)[0].replace(/\/$/,"/"+this._hash)),this._listen(),this.updatePageLinks()}function o(e){return e instanceof RegExp?e:e.replace(/\/+$/,"").replace(/^\/+/,"^/")}function i(e){return e.replace(/\/$/,"").split("/").length}function s(e,t){return i(t)-i(e)}function r(e,t){return function(e){return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).map(function(t){var i=function(e){var t=[];return{regexp:e instanceof RegExp?e:new RegExp(e.replace(n.PARAMETER_REGEXP,function(e,o,i){return t.push(i),n.REPLACE_VARIABLE_REGEXP}).replace(n.WILDCARD_REGEXP,n.REPLACE_WILDCARD)+n.FOLLOWED_BY_SLASH_REGEXP,n.MATCH_REGEXP_FLAGS),paramNames:t}}(o(t.route)),s=i.regexp,r=i.paramNames,a=e.replace(/^\/+/,"/").match(s),h=function(e,t){return 0===t.length?null:e?e.slice(1,e.length).reduce(function(e,n,o){return null===e&&(e={}),e[t[o]]=decodeURIComponent(n),e},null):null}(a,r);return!!a&&{match:a,route:t,params:h}}).filter(function(e){return e})}(e,t)[0]||!1}function a(e,t){var n=t.map(function(t){return""===t.route||"*"===t.route?e:e.split(new RegExp(t.route+"($|/)"))[0]}),i=o(e);return n.length>1?n.reduce(function(e,t){return e.length>t.length&&(e=t),e},n[0]):1===n.length?n[0]:i}function h(e,n,o){var i,s=function(e){return e.split(/\?(.*)?$/)[0]};return void 0===o&&(o="#"),t()&&!n?s(e).split(o)[0]:(i=e.split(o)).length>1?s(i[1]):s(i[0])}function u(t,n,o){if(n&&"object"===(void 0===n?"undefined":e(n))){if(n.before)return void n.before(function(){(!(arguments.length>0&&void 0!==arguments[0])||arguments[0])&&(t(),n.after&&n.after(o))},o);if(n.after)return t(),void(n.after&&n.after(o))}t()}return n.prototype={helpers:{match:r,root:a,clean:o,getOnlyURL:h},navigate:function(e,t){var n;return e=e||"",this._usePushState?(n=(n=(t?"":this._getRoot()+"/")+e.replace(/^\/+/,"/")).replace(/([^:])(\/{2,})/g,"$1/"),history[this._historyAPIUpdateMethod]({},"",n),this.resolve()):"undefined"!=typeof window&&(e=e.replace(new RegExp("^"+this._hash),""),window.location.href=window.location.href.replace(/#$/,"").replace(new RegExp(this._hash+".*$"),"")+this._hash+e),this},on:function(){for(var t=this,n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];if("function"==typeof o[0])this._defaultHandler={handler:o[0],hooks:o[1]};else if(o.length>=2)if("/"===o[0]){var r=o[1];"object"===e(o[1])&&(r=o[1].uses),this._defaultHandler={handler:r,hooks:o[2]}}else this._add(o[0],o[1],o[2]);else"object"===e(o[0])&&Object.keys(o[0]).sort(s).forEach(function(e){t.on(e,o[0][e])});return this},off:function(e){return null!==this._defaultHandler&&e===this._defaultHandler.handler?this._defaultHandler=null:null!==this._notFoundHandler&&e===this._notFoundHandler.handler&&(this._notFoundHandler=null),this._routes=this._routes.reduce(function(t,n){return n.handler!==e&&t.push(n),t},[]),this},notFound:function(e,t){return this._notFoundHandler={handler:e,hooks:t},this},resolve:function(e){var n,o,i=this,s=(e||this._cLoc()).replace(this._getRoot(),"");this._useHash&&(s=s.replace(new RegExp("^/"+this._hash),"/"));var a=function(e){return e.split(/\?(.*)?$/).slice(1).join("")}(e||this._cLoc()),l=h(s,this._useHash,this._hash);return!this._paused&&(this._lastRouteResolved&&l===this._lastRouteResolved.url&&a===this._lastRouteResolved.query?(this._lastRouteResolved.hooks&&this._lastRouteResolved.hooks.already&&this._lastRouteResolved.hooks.already(this._lastRouteResolved.params),!1):(o=r(l,this._routes))?(this._callLeave(),this._lastRouteResolved={url:l,query:a,hooks:o.route.hooks,params:o.params,name:o.route.name},n=o.route.handler,u(function(){u(function(){o.route.route instanceof RegExp?n.apply(void 0,o.match.slice(1,o.match.length)):n(o.params,a)},o.route.hooks,o.params,i._genericHooks)},this._genericHooks,o.params),o):this._defaultHandler&&(""===l||"/"===l||l===this._hash||function(e,n,o){if(t()&&!n)return!1;if(!e.match(o))return!1;var i=e.split(o);return i.length<2||""===i[1]}(l,this._useHash,this._hash))?(u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._defaultHandler.hooks},i._defaultHandler.handler(a)},i._defaultHandler.hooks)},this._genericHooks),!0):(this._notFoundHandler&&u(function(){u(function(){i._callLeave(),i._lastRouteResolved={url:l,query:a,hooks:i._notFoundHandler.hooks},i._notFoundHandler.handler(a)},i._notFoundHandler.hooks)},this._genericHooks),!1))},destroy:function(){this._routes=[],this._destroyed=!0,this._lastRouteResolved=null,this._genericHooks=null,clearTimeout(this._listeningInterval),"undefined"!=typeof window&&(window.removeEventListener("popstate",this._onLocationChange),window.removeEventListener("hashchange",this._onLocationChange))},updatePageLinks:function(){var e=this;"undefined"!=typeof document&&this._findLinks().forEach(function(t){t.hasListenerAttached||(t.addEventListener("click",function(n){if((n.ctrlKey||n.metaKey)&&"a"==n.target.tagName.toLowerCase())return!1;var o=e.getLinkPath(t);e._destroyed||(n.preventDefault(),e.navigate(o.replace(/\/+$/,"").replace(/^\/+/,"/")))}),t.hasListenerAttached=!0)})},generate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this._routes.reduce(function(n,o){var i;if(o.name===e)for(i in n=o.route,t)n=n.toString().replace(":"+i,t[i]);return n},"");return this._useHash?this._hash+n:n},link:function(e){return this._getRoot()+e},pause:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this._paused=e,this._historyAPIUpdateMethod=e?"replaceState":"pushState"},resume:function(){this.pause(!1)},historyAPIUpdateMethod:function(e){return void 0===e?this._historyAPIUpdateMethod:(this._historyAPIUpdateMethod=e,e)},disableIfAPINotAvailable:function(){t()||this.destroy()},lastRouteResolved:function(){return this._lastRouteResolved},getLinkPath:function(e){return e.getAttribute("href")},hooks:function(e){this._genericHooks=e},_add:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return"string"==typeof t&&(t=encodeURI(t)),this._routes.push("object"===(void 0===n?"undefined":e(n))?{route:t,handler:n.uses,name:n.as,hooks:o||n.hooks}:{route:t,handler:n,hooks:o}),this._add},_getRoot:function(){return null!==this.root?this.root:(this.root=a(this._cLoc().split("?")[0],this._routes),this.root)},_listen:function(){var e=this;if(this._usePushState)window.addEventListener("popstate",this._onLocationChange);else if("undefined"!=typeof window&&"onhashchange"in window)window.addEventListener("hashchange",this._onLocationChange);else{var t=this._cLoc(),n=void 0,o=void 0;(o=function(){n=e._cLoc(),t!==n&&(t=n,e.resolve()),e._listeningInterval=setTimeout(o,200)})()}},_cLoc:function(){return"undefined"!=typeof window?void 0!==window.__NAVIGO_WINDOW_LOCATION_MOCK__?window.__NAVIGO_WINDOW_LOCATION_MOCK__:o(window.location.href):""},_findLinks:function(){return[].slice.call(document.querySelectorAll("[data-navigo]"))},_onLocationChange:function(){this.resolve()},_callLeave:function(){var e=this._lastRouteResolved;e&&e.hooks&&e.hooks.leave&&e.hooks.leave(e.params)}},n.PARAMETER_REGEXP=/([:*])(\w+)/g,n.WILDCARD_REGEXP=/\*/g,n.REPLACE_VARIABLE_REGEXP="([^/]+)",n.REPLACE_WILDCARD="(?:.*)",n.FOLLOWED_BY_SLASH_REGEXP="(?:/$|$)",n.MATCH_REGEXP_FLAGS="",n});
//# sourceMappingURL=navigo.min.js.map


/***/ }),

/***/ "./src/js/autoplay.jsx":
/*!*****************************!*\
  !*** ./src/js/autoplay.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Autoplay {
	constructor({ router } = {}) {
		this.state = {};

		this.router = router;
		this.router.addEventListener('onReady', (args) => this.onRouterReady(args));
		this.router.addEventListener('onRouteChange', (args) =>
			this.onRouteChange(args)
		);
	}

	enable() {
		this.state.enabled = true;
		this.startAutoplay();
	}

	disable() {
		this.state.enabled = false;
		this.stopAutoplay();
	}

	toggle() {
		this.state.enabled ? this.disable() : this.enable();
		if (this.state.enabled) {
			this.advance();
		}
	}

	onKeyDown(e) {
		switch (e.code) {
			case 'Space':
				this.toggle();
				break;
		}
	}

	onRouterReady({ currentIndex, total, data, slideModel }) {
		const isVideo = this.getIsVideo();
		const shouldAutoplay = data && data.autoplay && data.autoplay.enabled;
		const autoplayTimeout =
			(shouldAutoplay && data && data.autoplay && data.autoplay.timeout) || 5;
		const loop = data && data.autoplay && data.autoplay.loop;
		const kiosk = data && data.autoplay && data.autoplay.kiosk;

		this.state = {
			...this.state,
			data,
			currentIndex,
			total,
			loop,
			kiosk,
			autoplayTimeout,
			slideModel,
		};

		if (!kiosk) {
			this.onKeyDown = this.onKeyDown.bind(this);
			document.removeEventListener('keydown', this.onKeyDown);
			document.addEventListener('keydown', this.onKeyDown);
		}

		if (shouldAutoplay) {
			if (!isVideo) {
				this.enable();
				this.startAutoplay();
			} else {
				this.state.enabled = true;
				this.autoplayVideo();
			}
		}
	}

	startAutoplay() {
		const { autoplayTimeout } = this.state;
		const isVideo = this.getIsVideo();

		clearInterval(this.autoplayId);

		if (!isVideo) {
			this.autoplayId = setInterval(
				() => this.advance(),
				autoplayTimeout * 1000
			);
		}
	}

	advance() {
		const { currentIndex, total, loop, slideModel } = this.state;
		const isVideo = slideModel && slideModel.type === 'video';

		if (isVideo) {
			return;
		}

		const nextIndex =
			currentIndex + 1 < total ? currentIndex + 1 : loop ? 0 : currentIndex;
		if (currentIndex !== nextIndex) {
			this.setIndex(nextIndex);
		}
	}

	stopAutoplay() {
		clearInterval(this.autoplayId);
	}

	setIndex(index) {
		this.state.currentIndex = index;

		this.router.navigate(`/slides/slide-${index + 1}`);
	}

	getIsVideo() {
		const isVideo = document.querySelectorAll('[data-type="video"]').length;

		return isVideo;
	}

	onRouteChange({ slideModel }) {
		this.state = {
			...this.state,
			slideModel,
			currentIndex: slideModel.index,
		};

		const { data } = this.state;
		const shouldAutoplay = data && data.autoplay && data.autoplay.enabled;
		if (shouldAutoplay && this.getIsVideo()) {
			this.autoplayVideo();
		}
	}

	autoplayVideo() {
		const wasEnabled = this.state.enabled;
		this.disable();

		// listen to video events
		const video = document.querySelector(`[data-type="video"]`);

		if (video) {
			const iframe = video.querySelector('iframe');
			const src = iframe && iframe.getAttribute('src');

			let provider;
			if (!src) {
				provider = 'local';
			} else if (src.indexOf('https://player.vimeo.com/video') === 0) {
				provider = 'vimeo';
			} else if (src.indexOf('https://www.youtube.com/embed/') === 0) {
				provider = 'youtube';
			}

			if (provider === 'local') {
				this.createLocalPlayer({ wasEnabled });
			} else if (provider === 'vimeo') {
				this.createVimeoPlayer({ wasEnabled });
			} else if (provider === 'youtube') {
				this.createYoutubePlayer({ wasEnabled });
			}
		}
	}

	createLocalPlayer({ wasEnabled = false } = {}) {
		const video = document.querySelector(`[data-type="video"] video`);

		if (this.state.kiosk) {
			video.removeAttribute('controls');
		}

		video.addEventListener('ended', () => {
			console.log('local video ended ', wasEnabled);
			if (wasEnabled) {
				this.enable();
				this.advance();
				this.startAutoplay();
			}
		});
	}

	createVimeoPlayer({ wasEnabled = false } = {}) {
		const video = document.querySelector(`[data-type="video"]`);
		const iframe = video.querySelector('iframe');

		let src = iframe.getAttribute('src');

		console.log('kiosk ', this.state.kiosk);

		if (this.state.kiosk) {
			src = src.indexOf('?') === -1 ? src.concat('?') : src.concat('&');
			src = src.replace('controls=1', '').concat('controls=0');
			iframe.setAttribute('src', src);
		}

		const player = new Vimeo.Player(iframe);

		// autoplay at end or after timeout
		const autoplayTimeout = video.getAttribute('data-autoplay-timeout');

		// if autoplayTimeout is a number,
		// use that value to advance
		// otherwise wait until end of video
		const autoplayTimeoutIsNumber =
			autoplayTimeout && autoplayTimeout == parseInt(autoplayTimeout, 10);

		if (autoplayTimeoutIsNumber) {
			clearInterval(this.autoplayId);
			this.autoplayId = setInterval(() => {
				this.advance();
				this.startAutoplay();
			}, autoplayTimeout * 1000);
		} else {
			// when the video has emitted its complete event
			// enable autoplay.
			player.on('ended', (data) => {
				// but only if autoplay was enabled
				console.log('vimeo ended ', wasEnabled);
				if (wasEnabled) {
					this.enable();
					this.advance();
					this.startAutoplay();
				}
			});
		}
	}

	onYTPlayerStateChange({ wasEnabled, event }) {
		console.log('yt ended ', wasEnabled);
		if (event.data === 0 && wasEnabled) {
			this.enable();
			this.advance();
			this.startAutoplay();
		}
	}

	createYoutubePlayer({ wasEnabled = false } = {}) {
		console.log('creating youtube player');

		const video = document.querySelector(`[data-type="video"]`);
		const iframe = video.querySelector('iframe');
		let src = iframe.getAttribute('src');
		if (this.state.kiosk) {
			src = src.indexOf('?') === -1 ? src.concat('?') : src.concat('&');
			src = src.replace('controls=1', '').concat('controls=0');
			iframe.setAttribute('src', src);
		}

		var tag = document.createElement('script');

		tag.src = 'https://www.youtube.com/iframe_api';
		var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

		var player;

		window.onYouTubeIframeAPIReady = () => {
			player = new YT.Player('ytplayer', {
				autoplay: 1,
				events: {
					// onReady: onPlayerReady,
					onStateChange: (event) =>
						this.onYTPlayerStateChange({ wasEnabled, event }),
				},
			});
		};

		/*
		function onPlayerReady(event) {
			// event.target.playVideo();
		}
		*/

		// autoplay at end or after timeout
		const autoplayTimeout = video.getAttribute('data-autoplay-timeout');

		// if autoplayTimeout is a number,
		// use that value to advance
		// otherwise wait until end of video
		const autoplayTimeoutIsNumber =
			autoplayTimeout == parseInt(autoplayTimeout, 10);

		if (autoplayTimeoutIsNumber) {
			clearInterval(this.autoplayId);
			this.autoplayId = setInterval(() => {
				this.advance();
				this.startAutoplay();
			}, autoplayTimeout * 1000);
		} else {
			// the video is already listening
			// to it's own complete event
			// with the youtube player api
		}
	}

	clear() {
		clearInterval(this.autoplayId);
		this.container.innerHTML = '';
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Autoplay);


/***/ }),

/***/ "./src/js/debugger.jsx":
/*!*****************************!*\
  !*** ./src/js/debugger.jsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import { MediaQuery } from 'foundation-sites';
// import $ from 'jquery';

// class Debugger {
// 	constructor() {
// 		this.state = {};

// 		// container div
// 		this.container = document.createElement('div');
// 		this.container.className = 'debugger';
// 		document.body.appendChild(this.container);

// 		this.canvas = document.createElement('canvas');
// 		this.context = this.canvas.getContext('2d');

// 		this.container.appendChild(this.canvas);

// 		this.render();

// 		$(window).on('changed.zf.mediaquery', (event, newSize, oldSize) =>
// 			this.render()
// 		);
// 	}

// 	render() {
// 		const w = Number(
// 			document
// 				.querySelector('[data-actual-width')
// 				.getAttribute('data-actual-width')
// 		);

// 		const h = Number(
// 			document
// 				.querySelector('[data-actual-height')
// 				.getAttribute('data-actual-height')
// 		);

// 		if (!w || !h) {
// 			this.clear();
// 			return;
// 		}

// 		const totalWidth = window.innerWidth;
// 		const totalHeight = window.innerHeight;
// 		const tileWidth = totalWidth / w; // how wide is a foot
// 		const tileHeight = totalHeight / h; // how tall is a foot

// 		if (MediaQuery.is('vast')) {
// 			this.canvas.width = tileWidth;
// 			this.canvas.height = tileHeight;

// 			// bottom and right lines
// 			this.context.beginPath();
// 			this.context.moveTo(0, tileHeight);
// 			this.context.lineTo(0, 0);
// 			this.context.lineTo(tileWidth, 0);
// 			this.context.stroke();

// 			// ticks every 1/4 foot along x and y axis
// 			for (var i = 0; i < 4; i++) {
// 				const x = (tileWidth / 4) * i;
// 				const y = (tileHeight / 4) * i;
// 				const xLength = i === 2 ? 50 : 25;
// 				const yLength = i === 2 ? 50 : 25;
// 				this.context.beginPath();
// 				this.context.moveTo(0, y);
// 				this.context.lineTo(xLength, y);
// 				this.context.stroke();

// 				this.context.beginPath();
// 				this.context.moveTo(x, 0);
// 				this.context.lineTo(x, yLength);
// 				this.context.stroke();
// 			}

// 			var data = this.canvas.toDataURL();

// 			this.container.style.backgroundImage = 'url(' + data + ')';
// 		} else {
// 			// when not a vast mediaquery,
// 			this.clear();
// 		}
// 	}

// 	clear() {
// 		const totalWidth = window.innerWidth;
// 		const totalHeight = window.innerHeight;
// 		this.context.clearRect(0, 0, totalWidth, totalHeight);
// 	}
// }

// export default Debugger;


/***/ }),

/***/ "./src/js/event-emitter.js":
/*!*********************************!*\
  !*** ./src/js/event-emitter.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// From https://gist.github.com/mudge/5830382
var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.events = {};
  }

  _createClass(EventEmitter, [{
    key: "_getEventListByName",
    value: function _getEventListByName(eventName) {
      if (typeof this.events[eventName] === 'undefined') {
        this.events[eventName] = new Set();
      }

      return this.events[eventName];
    }
  }, {
    key: "on",
    value: function on(eventName, fn) {
      this._getEventListByName(eventName).add(fn);
    }
  }, {
    key: "once",
    value: function once(eventName, fn) {
      var self = this;

      var onceFn = function onceFn() {
        self.removeListener(eventName, onceFn);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        fn.apply(self, args);
      };

      this.on(eventName, onceFn);
    }
  }, {
    key: "emit",
    value: function emit(eventName) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      this._getEventListByName(eventName).forEach(function (fn) {
        fn.apply(this, args);
      }.bind(this));
    }
  }, {
    key: "removeListener",
    value: function removeListener(eventName, fn) {
      this._getEventListByName(eventName)["delete"](fn);
    }
  }]);

  return EventEmitter;
}();

/* harmony default export */ __webpack_exports__["default"] = (EventEmitter);

/***/ }),

/***/ "./src/js/navigation.jsx":
/*!*******************************!*\
  !*** ./src/js/navigation.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Navigation {
	constructor({ router, visible = false, containerId = 'controls' } = {}) {
		this.state = { visible };

		this.container = document.getElementById(containerId)
			? document.getElementById(containerId)
			: document.createElement('div');

		this.router = router;
		this.router.addEventListener('onReady', (args) => this.onRouterReady(args));
		this.router.addEventListener('onRouteChange', (args) =>
			this.onRouteChange(args)
		);
	}

	show() {
		this.state.visible = true;
		this.render();
	}

	hide() {
		this.state.visible = false;
		this.clear();
	}

	enable() {
		this.state.enabled = true;

		document.removeEventListener('keydown', this.onKeyDown);
		document.addEventListener('keydown', this.onKeyDown);

		// window.removeEventListener('popstate', this.onPopState);
		// window.addEventListener('popstate', this.onPopState, false);
	}

	disable() {
		// window.removeEventListener('popstate', this.onPopState);
		document.removeEventListener('keydown', this.onKeyDown);

		this.state.enabled = false;
	}

	onKeyDown(e) {
		switch (e.code) {
			case 'ArrowRight':
				this.next();
				break;
			case 'ArrowLeft':
				this.prev();
				break;
		}
	}

	next() {
		const { currentIndex, total } = this.state;
		if (currentIndex + 1 < total) {
			this.setIndex(currentIndex + 1);
		}
	}

	prev() {
		const { currentIndex } = this.state;
		if (currentIndex - 1 >= 0) {
			this.setIndex(currentIndex - 1);
		}
	}

	setIndex(index) {
		this.state.currentIndex = index;

		this.router.navigate(`/slides/slide-${index + 1}`);
	}

	// onPopState(event) {
	// 	console.log('state ', history.state);
	// }

	render() {
		const { currentIndex, total, kiosk } = this.state;

		const markup = `
			<div class="top-bar-left">
				<ul class="dropdown menu">
					<li class="menu-text">Ted's Presentation</li>
				</ul>
			</div>
			${
				!kiosk
					? `<div class="top-bar-right">
				<ul class="menu">
					<li>
						<button type="button" class="button" data-action="prev">
							Prev
						</button>
					</li>
					<li><p>${currentIndex + 1} / ${total}</p></li>
					<li>
						<button type="button" class="button" data-action="next">
							Next
						</button>
					</li>
				</ul>
			</div>`
					: `<p>${currentIndex + 1} / ${total}</p>`
			}
		`;

		this.container.innerHTML = markup;

		// set up event listeners
		const prevElements = document.querySelectorAll('[data-action=prev]');
		prevElements.forEach((el) => {
			el.addEventListener('click', (e) => this.prev());
		});

		const nextElements = document.querySelectorAll('[data-action=next]');
		nextElements.forEach((el) => {
			el.addEventListener('click', (e) => this.next());
		});

		if (this.state.currentIndex === 0) {
			prevElements.forEach((el) => el.classList.add('disabled'));
		} else {
			prevElements.forEach((el) => el.classList.remove('disabled'));
		}

		if (this.state.currentIndex === this.state.total - 1) {
			nextElements.forEach((el) => el.classList.add('disabled'));
		} else {
			nextElements.forEach((el) => el.classList.remove('disabled'));
		}
	}

	onRouterReady({ currentIndex, total, data }) {
		const kiosk = data.autoplay && data.autoplay.kiosk;
		this.state = {
			...this.state,
			enabled: true,
			currentIndex,
			total,
			kiosk,
		};
		this.onKeyDown = this.onKeyDown.bind(this);
		this.enable();

		this.state.visible ? this.show() : this.hide();
	}

	onRouteChange({ slideModel }) {
		this.state = {
			...this.state,
			currentIndex: slideModel.index,
		};

		this.render();
	}

	clear() {
		this.container.innerHTML = '';
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Navigation);


/***/ }),

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var Navigo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Navigo */ "./node_modules/Navigo/lib/navigo.min.js");
/* harmony import */ var Navigo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Navigo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var JS_event_emitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JS/event-emitter.js */ "./src/js/event-emitter.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Router = /*#__PURE__*/function () {
  function Router() {
    _classCallCheck(this, Router);

    this.state = {
      ready: false
    };
    this.router = new Navigo__WEBPACK_IMPORTED_MODULE_0___default.a(null, true);
    this.eventEmitter = new JS_event_emitter_js__WEBPACK_IMPORTED_MODULE_1__["default"]();
  }

  _createClass(Router, [{
    key: "load",
    value: function load(json) {
      var _this = this;

      fetch(json).then(function (response) {
        return response.json();
      }).then(function (data) {
        _this.data = data;

        _this.router.on('/slides/:id', function () {
          _this.loadSlide();
        }).resolve();

        _this.router.on(function () {
          _this.loadSlide();
        }).resolve();

        _this.router.notFound(function () {
          console.log('Not found');
        });

        _this.state.ready = true;

        _this.onReady(_this.callback);
      })["catch"](function (err) {
        // There was an error
        console.warn('There was an error loading the json file.', err);
      });
    }
  }, {
    key: "getSlideModel",
    value: function getSlideModel() {
      // derive the slide from the url
      var hash = window.location.hash; // get the slide index from the hash, or default to 1

      var slideIndex = parseInt(hash.split('slide-')[1] || 1, 10); // slides are labelled 1, 2, 3, but are arrays (0, 1, 2)

      slideIndex -= 1;
      var slideModel = this.data.slides[slideIndex];
      return _objectSpread(_objectSpread({}, slideModel), {}, {
        index: slideIndex
      });
    }
  }, {
    key: "loadSlide",
    value: function loadSlide() {
      var slideModel = this.getSlideModel();

      var html = __webpack_require__("./src/slides sync recursive ^\\.\\/.*$")("./".concat(slideModel.loc));

      var presentation = document.getElementsByClassName('presentation')[0];
      var contents = document.getElementById('contents');
      contents.innerHTML = html; // set background colors

      var backgroundColorList = document.querySelectorAll('div[data-background-color]');
      presentation.style.removeProperty('background-color');

      for (var i = 0; i < backgroundColorList.length; i++) {
        var color = backgroundColorList[i].getAttribute('data-background-color');
        presentation.style.backgroundColor = color;
      } // set background images


      var backgroundList = document.querySelectorAll('div[data-background]');

      for (var _i = 0; _i < backgroundList.length; _i++) {
        var url = backgroundList[_i].getAttribute('data-background');

        backgroundList[_i].style.backgroundImage = "url('" + url + "')";
      } // perform any alignment adjustments


      var alignmentList = document.querySelectorAll('div[data-align]');
      contents.style.removeProperty('text-align');

      for (var _i2 = 0; _i2 < alignmentList.length; _i2++) {
        var alignment = alignmentList[_i2].getAttribute('data-align');

        contents.style.textAlign = alignment;
      } // perform any columnar adjustments


      var columnarList = document.querySelectorAll('div[data-column]');

      for (var _i3 = 0; _i3 < columnarList.length; _i3++) {
        var column = columnarList[_i3].getAttribute('data-column');

        columnarList[_i3].parentNode.style.border = '2px solid red';
      }
    }
  }, {
    key: "navigate",
    value: function navigate(path) {
      var _this2 = this;

      this.router.navigate(path); // use setTimeout with 0 time to summon at end of frame
      // so contents have an opportunity to render

      setTimeout(function () {
        var slideModel = _this2.getSlideModel();

        _this2.eventEmitter.emit('onRouteChange', {
          slideModel: slideModel,
          path: path
        });
      }, 0);
    }
  }, {
    key: "onReady",
    value: function onReady(callback) {
      if (this.state.ready) {
        var slideModel = this.getSlideModel();
        var index = slideModel.index;
        var total = this.data.slides.length;
        this.eventEmitter.emit('onReady', {
          currentIndex: index,
          total: total,
          data: this.data,
          slideModel: slideModel
        });
      } else {
        this.eventEmitter.add('onReady', callback);
      }
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(eventName, callback) {
      this.eventEmitter.on(eventName, callback);
    }
  }]);

  return Router;
}();

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./src/js/vast.js":
/*!************************!*\
  !*** ./src/js/vast.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var JS_router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! JS/router.js */ "./src/js/router.js");
/* harmony import */ var JS_navigation_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! JS/navigation.jsx */ "./src/js/navigation.jsx");
/* harmony import */ var JS_autoplay_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! JS/autoplay.jsx */ "./src/js/autoplay.jsx");
/* harmony import */ var JS_debugger_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! JS/debugger.jsx */ "./src/js/debugger.jsx");
/* harmony import */ var JS_debugger_jsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(JS_debugger_jsx__WEBPACK_IMPORTED_MODULE_3__);




var isDemo = document.querySelector("[data-demo]");

if (isDemo) {
  var router = new JS_router_js__WEBPACK_IMPORTED_MODULE_0__["default"]();
  var nav = new JS_navigation_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]({
    router: router,
    visible: true
  });
  var autoplayControls = new JS_autoplay_jsx__WEBPACK_IMPORTED_MODULE_2__["default"]({
    router: router
  });
  var demoUri = document.querySelector("[data-demo]").getAttribute('data-demo');
  router.load(demoUri);
}

var isDebugger = document.querySelector("[data-debug]");

if (isDebugger && isDebugger.getAttribute('data-debug') === 'true') {
  var myDebugger = new JS_debugger_jsx__WEBPACK_IMPORTED_MODULE_3___default.a(isDebugger);
}

/***/ }),

/***/ "./src/slides sync recursive ^\\.\\/.*$":
/*!**********************************!*\
  !*** ./src/slides sync ^\.\/.*$ ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ted/slide-01-title.md": "./src/slides/ted/slide-01-title.md",
	"./ted/slide-02-background.md": "./src/slides/ted/slide-02-background.md",
	"./ted/slide-03-theme.md": "./src/slides/ted/slide-03-theme.md",
	"./ted/slide-04-copy.md": "./src/slides/ted/slide-04-copy.md",
	"./ted/slide-05-image.md": "./src/slides/ted/slide-05-image.md",
	"./ted/slide-06-columns.md": "./src/slides/ted/slide-06-columns.md",
	"./ted/slide-07-video-local.md": "./src/slides/ted/slide-07-video-local.md",
	"./ted/slide-07-video-vimeo.md": "./src/slides/ted/slide-07-video-vimeo.md",
	"./ted/slide-07-video-youtube.md": "./src/slides/ted/slide-07-video-youtube.md",
	"./ted/slide-08-3d.md": "./src/slides/ted/slide-08-3d.md",
	"./ted/slide-09-thanks.md": "./src/slides/ted/slide-09-thanks.md"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/slides sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/slides/ted/slide-01-title.md":
/*!******************************************!*\
  !*** ./src/slides/ted/slide-01-title.md ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<h1 id=\"title-slide\">Title Slide</h1>\n<p>By Ted</p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/slides/ted/slide-02-background.md":
/*!***********************************************!*\
  !*** ./src/slides/ted/slide-02-background.md ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div data-background=\"/img/adrian-infernus-GLf7bAwCdYg-unsplash.jpg\"></div>\n\n<h1 id=\"slide-2\">Slide 2</h1>\n<p>Image support</p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/slides/ted/slide-03-theme.md":
/*!******************************************!*\
  !*** ./src/slides/ted/slide-03-theme.md ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div data-background=\"/img/adrian-infernus-GLf7bAwCdYg-unsplash.jpg\"></div>\n<div data-theme=\"dark\">\n<h1>Slide 3</h1>\n<p>Theme Support</p>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/slides/ted/slide-04-copy.md":
/*!*****************************************!*\
  !*** ./src/slides/ted/slide-04-copy.md ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div data-align=\"left\">\n<p>\nCat ipsum dolor sit amet. Demand to be let outside at once. Eat all the power cords. Present belly.\n</p>\n<p>\nPurr for no reason. Pounce on unsuspecting person.\n</p>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/slides/ted/slide-05-image.md":
/*!******************************************!*\
  !*** ./src/slides/ted/slide-05-image.md ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<p><img src=\"//placekitten.com/600/600\" alt=\"Cute Kitten\"></p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/slides/ted/slide-06-columns.md":
/*!********************************************!*\
  !*** ./src/slides/ted/slide-06-columns.md ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div data-background=\"/img/adrian-infernus-GLf7bAwCdYg-unsplash.jpg\"></div>\n<div class=\"grid-x grid-padding-x\">\n  <div class=\"cell medium-6\">\n    <img class=\"contain\" src=\"//placekitten.com/600/600\" alt=\"A cute kitten\" />\n  </div>\n  <div class=\"cell medium-6 align-self-middle text-left\">\n    <div class=\"show-for-near\">\n      <p>Cat ipsum dolor sit amet. Demand to be let outside at once, and expect owner to wait for me as i think about it.</p>\n      </div>\n    <div class=\"show-for-far\">\n      <p>Cat ipsum dolor sit amet.</p>\n    </div>\n  </div>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/slides/ted/slide-07-video-local.md":
/*!************************************************!*\
  !*** ./src/slides/ted/slide-07-video-local.md ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"responsive-embed\" data-background-color=\"#000000\" data-type=\"video\" >\n<video controls autoplay muted>\n  <source src=\"/mov/totem-by-lucastswick.mp4\" type=\"video/mp4\">\n</video>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/slides/ted/slide-07-video-vimeo.md":
/*!************************************************!*\
  !*** ./src/slides/ted/slide-07-video-vimeo.md ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"responsive-embed\" data-background-color=\"#000000\" data-type=\"video\">\n  <iframe src=\"https://player.vimeo.com/video/76979871?autoplay=1\" width=\"640\" height=\"368\" frameborder=\"0\" allow=\"autoplay; fullscreen\" allowfullscreen></iframe>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/slides/ted/slide-07-video-youtube.md":
/*!**************************************************!*\
  !*** ./src/slides/ted/slide-07-video-youtube.md ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"responsive-embed\" data-background-color=\"#000000\" data-type=\"video\" >\n  <iframe id=\"ytplayer\" width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/afCUPqCzOHw?autoplay=1&enablejsapi=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/slides/ted/slide-08-3d.md":
/*!***************************************!*\
  !*** ./src/slides/ted/slide-08-3d.md ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<div class=\"responsive-embed\" data-background-color=\"#000000\" data-type=\"video\">\n\n<div class=\"sketchfab-embed-wrapper\">\n  <iframe title=\"A 3D model\" width=\"640\" height=\"480\" src=\"https://sketchfab.com/models/eede8c1394dc4132af2f02f06d497fa8/embed?autostart=1&amp;ui_controls=1&amp;ui_infos=1&amp;ui_inspector=1&amp;ui_stop=1&amp;ui_watermark=1&amp;ui_watermark_link=1\" frameborder=\"0\" allow=\"autoplay; fullscreen; vr\" mozallowfullscreen=\"true\" webkitallowfullscreen=\"true\"></iframe>\n  <p style=\"font-size: 13px; font-weight: normal; margin: 5px; color: #4A4A4A;\">\n      <a href=\"https://sketchfab.com/3d-models/nintendo-gameboy-1989-eede8c1394dc4132af2f02f06d497fa8?utm_medium=embed&utm_source=website&utm_campaign=share-popup\" target=\"_blank\" style=\"font-weight: bold; color: #1CAAD9;\">Nintendo Gameboy 1989</a>\n      by <a href=\"https://sketchfab.com/shrednector?utm_medium=embed&utm_source=website&utm_campaign=share-popup\" target=\"_blank\" style=\"font-weight: bold; color: #1CAAD9;\">shrednector</a>\n      on <a href=\"https://sketchfab.com?utm_medium=embed&utm_source=website&utm_campaign=share-popup\" target=\"_blank\" style=\"font-weight: bold; color: #1CAAD9;\">Sketchfab</a>\n  </p>\n</div>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/slides/ted/slide-09-thanks.md":
/*!*******************************************!*\
  !*** ./src/slides/ted/slide-09-thanks.md ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Module
var code = "<p><span data-theme=\"dark\">\n<h1>Thank you!</h1>\n<h2>Your friend, Ted</h2>\n</span></p>\n";
// Exports
module.exports = code;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL05hdmlnby9saWIvbmF2aWdvLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXV0b3BsYXkuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9kZWJ1Z2dlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdmlnYXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Zhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDEtdGl0bGUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDItYmFja2dyb3VuZC5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wMy10aGVtZS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wNC1jb3B5Lm1kIiwid2VicGFjazovLy8uL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA1LWltYWdlLm1kIiwid2VicGFjazovLy8uL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA2LWNvbHVtbnMubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDctdmlkZW8tbG9jYWwubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDctdmlkZW8tdmltZW8ubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDctdmlkZW8teW91dHViZS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wOC0zZC5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wOS10aGFua3MubWQiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiZXZlbnRzIiwiZXZlbnROYW1lIiwiU2V0IiwiZm4iLCJfZ2V0RXZlbnRMaXN0QnlOYW1lIiwiYWRkIiwic2VsZiIsIm9uY2VGbiIsInJlbW92ZUxpc3RlbmVyIiwiYXJncyIsImFwcGx5Iiwib24iLCJmb3JFYWNoIiwiYmluZCIsIlJvdXRlciIsInN0YXRlIiwicmVhZHkiLCJyb3V0ZXIiLCJOYXZpZ28iLCJldmVudEVtaXR0ZXIiLCJqc29uIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibG9hZFNsaWRlIiwicmVzb2x2ZSIsIm5vdEZvdW5kIiwiY29uc29sZSIsImxvZyIsIm9uUmVhZHkiLCJjYWxsYmFjayIsImVyciIsIndhcm4iLCJoYXNoIiwid2luZG93IiwibG9jYXRpb24iLCJzbGlkZUluZGV4IiwicGFyc2VJbnQiLCJzcGxpdCIsInNsaWRlTW9kZWwiLCJzbGlkZXMiLCJpbmRleCIsImdldFNsaWRlTW9kZWwiLCJodG1sIiwicmVxdWlyZSIsImxvYyIsInByZXNlbnRhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnRlbnRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJiYWNrZ3JvdW5kQ29sb3JMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsInN0eWxlIiwicmVtb3ZlUHJvcGVydHkiLCJpIiwibGVuZ3RoIiwiY29sb3IiLCJnZXRBdHRyaWJ1dGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kTGlzdCIsInVybCIsImJhY2tncm91bmRJbWFnZSIsImFsaWdubWVudExpc3QiLCJhbGlnbm1lbnQiLCJ0ZXh0QWxpZ24iLCJjb2x1bW5hckxpc3QiLCJjb2x1bW4iLCJwYXJlbnROb2RlIiwiYm9yZGVyIiwicGF0aCIsIm5hdmlnYXRlIiwic2V0VGltZW91dCIsImVtaXQiLCJ0b3RhbCIsImN1cnJlbnRJbmRleCIsImlzRGVtbyIsInF1ZXJ5U2VsZWN0b3IiLCJuYXYiLCJOYXZpZ2F0aW9uIiwidmlzaWJsZSIsImF1dG9wbGF5Q29udHJvbHMiLCJBdXRvcGxheUNvbnRyb2xzIiwiZGVtb1VyaSIsImxvYWQiLCJpc0RlYnVnZ2VyIiwibXlEZWJ1Z2dlciIsIkRlYnVnZ2VyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsZUFBZSxLQUFvRCxvQkFBb0IsU0FBNEQsQ0FBQyxpQkFBaUIsYUFBYSw4RUFBOEUsZ0JBQWdCLGFBQWEscUdBQXFHLGFBQWEsZ0ZBQWdGLGtCQUFrQiw0Z0JBQTRnQixjQUFjLHVFQUF1RSxjQUFjLDZDQUE2QyxnQkFBZ0IsaUJBQWlCLGdCQUFnQixtQkFBbUIsa0ZBQWtGLGtCQUFrQixTQUFTLE9BQU8scUZBQXFGLDJDQUEyQywrR0FBK0csd0ZBQXdGLHNFQUFzRSxzQkFBc0Isa0NBQWtDLFlBQVksTUFBTSxZQUFZLDBCQUEwQixxQkFBcUIsU0FBUyxFQUFFLGFBQWEsZ0JBQWdCLHdC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RCxFQUFvRTtBQUNuRSxNQUFNNEIsVUFBVSxHQUFHLElBQUlDLHNEQUFKLENBQWFGLFVBQWIsQ0FBbkI7QUFDQSxDOzs7Ozs7Ozs7OztBQ3RCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEOzs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBLHlPQUF5TztBQUN6TztBQUNBLHNCOzs7Ozs7Ozs7OztBQ0hBO0FBQ0EsK1FBQStRLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXO0FBQ3RVO0FBQ0Esc0I7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSxxU0FBcVMsa0JBQWtCLGVBQWUsbUJBQW1CLGNBQWMsbUJBQW1CLHlEQUF5RCxZQUFZLHlHQUF5RyxxQkFBcUIsYUFBYSxnQkFBZ0IsdU5BQXVOLGdCQUFnQiw4TEFBOEwsZ0JBQWdCLHdLQUF3SyxnQkFBZ0I7QUFDdnNDO0FBQ0Esc0I7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0Esc0IiLCJmaWxlIjoidmFzdC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy92YXN0LmpzXCIpO1xuIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dCgpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUodCk6ZS5OYXZpZ289dCgpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX07ZnVuY3Rpb24gdCgpe3JldHVybiEoXCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvd3x8IXdpbmRvdy5oaXN0b3J5fHwhd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKX1mdW5jdGlvbiBuKGUsbixvKXt0aGlzLnJvb3Q9bnVsbCx0aGlzLl9yb3V0ZXM9W10sdGhpcy5fdXNlSGFzaD1uLHRoaXMuX2hhc2g9dm9pZCAwPT09bz9cIiNcIjpvLHRoaXMuX3BhdXNlZD0hMSx0aGlzLl9kZXN0cm95ZWQ9ITEsdGhpcy5fbGFzdFJvdXRlUmVzb2x2ZWQ9bnVsbCx0aGlzLl9ub3RGb3VuZEhhbmRsZXI9bnVsbCx0aGlzLl9kZWZhdWx0SGFuZGxlcj1udWxsLHRoaXMuX3VzZVB1c2hTdGF0ZT0hbiYmdCgpLHRoaXMuX29uTG9jYXRpb25DaGFuZ2U9dGhpcy5fb25Mb2NhdGlvbkNoYW5nZS5iaW5kKHRoaXMpLHRoaXMuX2dlbmVyaWNIb29rcz1udWxsLHRoaXMuX2hpc3RvcnlBUElVcGRhdGVNZXRob2Q9XCJwdXNoU3RhdGVcIixlP3RoaXMucm9vdD1uP2UucmVwbGFjZSgvXFwvJC8sXCIvXCIrdGhpcy5faGFzaCk6ZS5yZXBsYWNlKC9cXC8kLyxcIlwiKTpuJiYodGhpcy5yb290PXRoaXMuX2NMb2MoKS5zcGxpdCh0aGlzLl9oYXNoKVswXS5yZXBsYWNlKC9cXC8kLyxcIi9cIit0aGlzLl9oYXNoKSksdGhpcy5fbGlzdGVuKCksdGhpcy51cGRhdGVQYWdlTGlua3MoKX1mdW5jdGlvbiBvKGUpe3JldHVybiBlIGluc3RhbmNlb2YgUmVnRXhwP2U6ZS5yZXBsYWNlKC9cXC8rJC8sXCJcIikucmVwbGFjZSgvXlxcLysvLFwiXi9cIil9ZnVuY3Rpb24gaShlKXtyZXR1cm4gZS5yZXBsYWNlKC9cXC8kLyxcIlwiKS5zcGxpdChcIi9cIikubGVuZ3RofWZ1bmN0aW9uIHMoZSx0KXtyZXR1cm4gaSh0KS1pKGUpfWZ1bmN0aW9uIHIoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpbXSkubWFwKGZ1bmN0aW9uKHQpe3ZhciBpPWZ1bmN0aW9uKGUpe3ZhciB0PVtdO3JldHVybntyZWdleHA6ZSBpbnN0YW5jZW9mIFJlZ0V4cD9lOm5ldyBSZWdFeHAoZS5yZXBsYWNlKG4uUEFSQU1FVEVSX1JFR0VYUCxmdW5jdGlvbihlLG8saSl7cmV0dXJuIHQucHVzaChpKSxuLlJFUExBQ0VfVkFSSUFCTEVfUkVHRVhQfSkucmVwbGFjZShuLldJTERDQVJEX1JFR0VYUCxuLlJFUExBQ0VfV0lMRENBUkQpK24uRk9MTE9XRURfQllfU0xBU0hfUkVHRVhQLG4uTUFUQ0hfUkVHRVhQX0ZMQUdTKSxwYXJhbU5hbWVzOnR9fShvKHQucm91dGUpKSxzPWkucmVnZXhwLHI9aS5wYXJhbU5hbWVzLGE9ZS5yZXBsYWNlKC9eXFwvKy8sXCIvXCIpLm1hdGNoKHMpLGg9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gMD09PXQubGVuZ3RoP251bGw6ZT9lLnNsaWNlKDEsZS5sZW5ndGgpLnJlZHVjZShmdW5jdGlvbihlLG4sbyl7cmV0dXJuIG51bGw9PT1lJiYoZT17fSksZVt0W29dXT1kZWNvZGVVUklDb21wb25lbnQobiksZX0sbnVsbCk6bnVsbH0oYSxyKTtyZXR1cm4hIWEmJnttYXRjaDphLHJvdXRlOnQscGFyYW1zOmh9fSkuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBlfSl9KGUsdClbMF18fCExfWZ1bmN0aW9uIGEoZSx0KXt2YXIgbj10Lm1hcChmdW5jdGlvbih0KXtyZXR1cm5cIlwiPT09dC5yb3V0ZXx8XCIqXCI9PT10LnJvdXRlP2U6ZS5zcGxpdChuZXcgUmVnRXhwKHQucm91dGUrXCIoJHwvKVwiKSlbMF19KSxpPW8oZSk7cmV0dXJuIG4ubGVuZ3RoPjE/bi5yZWR1Y2UoZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5sZW5ndGg+dC5sZW5ndGgmJihlPXQpLGV9LG5bMF0pOjE9PT1uLmxlbmd0aD9uWzBdOml9ZnVuY3Rpb24gaChlLG4sbyl7dmFyIGkscz1mdW5jdGlvbihlKXtyZXR1cm4gZS5zcGxpdCgvXFw/KC4qKT8kLylbMF19O3JldHVybiB2b2lkIDA9PT1vJiYobz1cIiNcIiksdCgpJiYhbj9zKGUpLnNwbGl0KG8pWzBdOihpPWUuc3BsaXQobykpLmxlbmd0aD4xP3MoaVsxXSk6cyhpWzBdKX1mdW5jdGlvbiB1KHQsbixvKXtpZihuJiZcIm9iamVjdFwiPT09KHZvaWQgMD09PW4/XCJ1bmRlZmluZWRcIjplKG4pKSl7aWYobi5iZWZvcmUpcmV0dXJuIHZvaWQgbi5iZWZvcmUoZnVuY3Rpb24oKXsoIShhcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSl8fGFyZ3VtZW50c1swXSkmJih0KCksbi5hZnRlciYmbi5hZnRlcihvKSl9LG8pO2lmKG4uYWZ0ZXIpcmV0dXJuIHQoKSx2b2lkKG4uYWZ0ZXImJm4uYWZ0ZXIobykpfXQoKX1yZXR1cm4gbi5wcm90b3R5cGU9e2hlbHBlcnM6e21hdGNoOnIscm9vdDphLGNsZWFuOm8sZ2V0T25seVVSTDpofSxuYXZpZ2F0ZTpmdW5jdGlvbihlLHQpe3ZhciBuO3JldHVybiBlPWV8fFwiXCIsdGhpcy5fdXNlUHVzaFN0YXRlPyhuPShuPSh0P1wiXCI6dGhpcy5fZ2V0Um9vdCgpK1wiL1wiKStlLnJlcGxhY2UoL15cXC8rLyxcIi9cIikpLnJlcGxhY2UoLyhbXjpdKShcXC97Mix9KS9nLFwiJDEvXCIpLGhpc3RvcnlbdGhpcy5faGlzdG9yeUFQSVVwZGF0ZU1ldGhvZF0oe30sXCJcIixuKSx0aGlzLnJlc29sdmUoKSk6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmKGU9ZS5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeXCIrdGhpcy5faGFzaCksXCJcIiksd2luZG93LmxvY2F0aW9uLmhyZWY9d2luZG93LmxvY2F0aW9uLmhyZWYucmVwbGFjZSgvIyQvLFwiXCIpLnJlcGxhY2UobmV3IFJlZ0V4cCh0aGlzLl9oYXNoK1wiLiokXCIpLFwiXCIpK3RoaXMuX2hhc2grZSksdGhpc30sb246ZnVuY3Rpb24oKXtmb3IodmFyIHQ9dGhpcyxuPWFyZ3VtZW50cy5sZW5ndGgsbz1BcnJheShuKSxpPTA7aTxuO2krKylvW2ldPWFyZ3VtZW50c1tpXTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBvWzBdKXRoaXMuX2RlZmF1bHRIYW5kbGVyPXtoYW5kbGVyOm9bMF0saG9va3M6b1sxXX07ZWxzZSBpZihvLmxlbmd0aD49MilpZihcIi9cIj09PW9bMF0pe3ZhciByPW9bMV07XCJvYmplY3RcIj09PWUob1sxXSkmJihyPW9bMV0udXNlcyksdGhpcy5fZGVmYXVsdEhhbmRsZXI9e2hhbmRsZXI6cixob29rczpvWzJdfX1lbHNlIHRoaXMuX2FkZChvWzBdLG9bMV0sb1syXSk7ZWxzZVwib2JqZWN0XCI9PT1lKG9bMF0pJiZPYmplY3Qua2V5cyhvWzBdKS5zb3J0KHMpLmZvckVhY2goZnVuY3Rpb24oZSl7dC5vbihlLG9bMF1bZV0pfSk7cmV0dXJuIHRoaXN9LG9mZjpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbCE9PXRoaXMuX2RlZmF1bHRIYW5kbGVyJiZlPT09dGhpcy5fZGVmYXVsdEhhbmRsZXIuaGFuZGxlcj90aGlzLl9kZWZhdWx0SGFuZGxlcj1udWxsOm51bGwhPT10aGlzLl9ub3RGb3VuZEhhbmRsZXImJmU9PT10aGlzLl9ub3RGb3VuZEhhbmRsZXIuaGFuZGxlciYmKHRoaXMuX25vdEZvdW5kSGFuZGxlcj1udWxsKSx0aGlzLl9yb3V0ZXM9dGhpcy5fcm91dGVzLnJlZHVjZShmdW5jdGlvbih0LG4pe3JldHVybiBuLmhhbmRsZXIhPT1lJiZ0LnB1c2gobiksdH0sW10pLHRoaXN9LG5vdEZvdW5kOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuX25vdEZvdW5kSGFuZGxlcj17aGFuZGxlcjplLGhvb2tzOnR9LHRoaXN9LHJlc29sdmU6ZnVuY3Rpb24oZSl7dmFyIG4sbyxpPXRoaXMscz0oZXx8dGhpcy5fY0xvYygpKS5yZXBsYWNlKHRoaXMuX2dldFJvb3QoKSxcIlwiKTt0aGlzLl91c2VIYXNoJiYocz1zLnJlcGxhY2UobmV3IFJlZ0V4cChcIl4vXCIrdGhpcy5faGFzaCksXCIvXCIpKTt2YXIgYT1mdW5jdGlvbihlKXtyZXR1cm4gZS5zcGxpdCgvXFw/KC4qKT8kLykuc2xpY2UoMSkuam9pbihcIlwiKX0oZXx8dGhpcy5fY0xvYygpKSxsPWgocyx0aGlzLl91c2VIYXNoLHRoaXMuX2hhc2gpO3JldHVybiF0aGlzLl9wYXVzZWQmJih0aGlzLl9sYXN0Um91dGVSZXNvbHZlZCYmbD09PXRoaXMuX2xhc3RSb3V0ZVJlc29sdmVkLnVybCYmYT09PXRoaXMuX2xhc3RSb3V0ZVJlc29sdmVkLnF1ZXJ5Pyh0aGlzLl9sYXN0Um91dGVSZXNvbHZlZC5ob29rcyYmdGhpcy5fbGFzdFJvdXRlUmVzb2x2ZWQuaG9va3MuYWxyZWFkeSYmdGhpcy5fbGFzdFJvdXRlUmVzb2x2ZWQuaG9va3MuYWxyZWFkeSh0aGlzLl9sYXN0Um91dGVSZXNvbHZlZC5wYXJhbXMpLCExKToobz1yKGwsdGhpcy5fcm91dGVzKSk/KHRoaXMuX2NhbGxMZWF2ZSgpLHRoaXMuX2xhc3RSb3V0ZVJlc29sdmVkPXt1cmw6bCxxdWVyeTphLGhvb2tzOm8ucm91dGUuaG9va3MscGFyYW1zOm8ucGFyYW1zLG5hbWU6by5yb3V0ZS5uYW1lfSxuPW8ucm91dGUuaGFuZGxlcix1KGZ1bmN0aW9uKCl7dShmdW5jdGlvbigpe28ucm91dGUucm91dGUgaW5zdGFuY2VvZiBSZWdFeHA/bi5hcHBseSh2b2lkIDAsby5tYXRjaC5zbGljZSgxLG8ubWF0Y2gubGVuZ3RoKSk6bihvLnBhcmFtcyxhKX0sby5yb3V0ZS5ob29rcyxvLnBhcmFtcyxpLl9nZW5lcmljSG9va3MpfSx0aGlzLl9nZW5lcmljSG9va3Msby5wYXJhbXMpLG8pOnRoaXMuX2RlZmF1bHRIYW5kbGVyJiYoXCJcIj09PWx8fFwiL1wiPT09bHx8bD09PXRoaXMuX2hhc2h8fGZ1bmN0aW9uKGUsbixvKXtpZih0KCkmJiFuKXJldHVybiExO2lmKCFlLm1hdGNoKG8pKXJldHVybiExO3ZhciBpPWUuc3BsaXQobyk7cmV0dXJuIGkubGVuZ3RoPDJ8fFwiXCI9PT1pWzFdfShsLHRoaXMuX3VzZUhhc2gsdGhpcy5faGFzaCkpPyh1KGZ1bmN0aW9uKCl7dShmdW5jdGlvbigpe2kuX2NhbGxMZWF2ZSgpLGkuX2xhc3RSb3V0ZVJlc29sdmVkPXt1cmw6bCxxdWVyeTphLGhvb2tzOmkuX2RlZmF1bHRIYW5kbGVyLmhvb2tzfSxpLl9kZWZhdWx0SGFuZGxlci5oYW5kbGVyKGEpfSxpLl9kZWZhdWx0SGFuZGxlci5ob29rcyl9LHRoaXMuX2dlbmVyaWNIb29rcyksITApOih0aGlzLl9ub3RGb3VuZEhhbmRsZXImJnUoZnVuY3Rpb24oKXt1KGZ1bmN0aW9uKCl7aS5fY2FsbExlYXZlKCksaS5fbGFzdFJvdXRlUmVzb2x2ZWQ9e3VybDpsLHF1ZXJ5OmEsaG9va3M6aS5fbm90Rm91bmRIYW5kbGVyLmhvb2tzfSxpLl9ub3RGb3VuZEhhbmRsZXIuaGFuZGxlcihhKX0saS5fbm90Rm91bmRIYW5kbGVyLmhvb2tzKX0sdGhpcy5fZ2VuZXJpY0hvb2tzKSwhMSkpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5fcm91dGVzPVtdLHRoaXMuX2Rlc3Ryb3llZD0hMCx0aGlzLl9sYXN0Um91dGVSZXNvbHZlZD1udWxsLHRoaXMuX2dlbmVyaWNIb29rcz1udWxsLGNsZWFyVGltZW91dCh0aGlzLl9saXN0ZW5pbmdJbnRlcnZhbCksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmKHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIix0aGlzLl9vbkxvY2F0aW9uQ2hhbmdlKSx3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIix0aGlzLl9vbkxvY2F0aW9uQ2hhbmdlKSl9LHVwZGF0ZVBhZ2VMaW5rczpmdW5jdGlvbigpe3ZhciBlPXRoaXM7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiZ0aGlzLl9maW5kTGlua3MoKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QuaGFzTGlzdGVuZXJBdHRhY2hlZHx8KHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24obil7aWYoKG4uY3RybEtleXx8bi5tZXRhS2V5KSYmXCJhXCI9PW4udGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSlyZXR1cm4hMTt2YXIgbz1lLmdldExpbmtQYXRoKHQpO2UuX2Rlc3Ryb3llZHx8KG4ucHJldmVudERlZmF1bHQoKSxlLm5hdmlnYXRlKG8ucmVwbGFjZSgvXFwvKyQvLFwiXCIpLnJlcGxhY2UoL15cXC8rLyxcIi9cIikpKX0pLHQuaGFzTGlzdGVuZXJBdHRhY2hlZD0hMCl9KX0sZ2VuZXJhdGU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOnt9LG49dGhpcy5fcm91dGVzLnJlZHVjZShmdW5jdGlvbihuLG8pe3ZhciBpO2lmKG8ubmFtZT09PWUpZm9yKGkgaW4gbj1vLnJvdXRlLHQpbj1uLnRvU3RyaW5nKCkucmVwbGFjZShcIjpcIitpLHRbaV0pO3JldHVybiBufSxcIlwiKTtyZXR1cm4gdGhpcy5fdXNlSGFzaD90aGlzLl9oYXNoK246bn0sbGluazpmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5fZ2V0Um9vdCgpK2V9LHBhdXNlOmZ1bmN0aW9uKCl7dmFyIGU9IShhcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXSl8fGFyZ3VtZW50c1swXTt0aGlzLl9wYXVzZWQ9ZSx0aGlzLl9oaXN0b3J5QVBJVXBkYXRlTWV0aG9kPWU/XCJyZXBsYWNlU3RhdGVcIjpcInB1c2hTdGF0ZVwifSxyZXN1bWU6ZnVuY3Rpb24oKXt0aGlzLnBhdXNlKCExKX0saGlzdG9yeUFQSVVwZGF0ZU1ldGhvZDpmdW5jdGlvbihlKXtyZXR1cm4gdm9pZCAwPT09ZT90aGlzLl9oaXN0b3J5QVBJVXBkYXRlTWV0aG9kOih0aGlzLl9oaXN0b3J5QVBJVXBkYXRlTWV0aG9kPWUsZSl9LGRpc2FibGVJZkFQSU5vdEF2YWlsYWJsZTpmdW5jdGlvbigpe3QoKXx8dGhpcy5kZXN0cm95KCl9LGxhc3RSb3V0ZVJlc29sdmVkOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2xhc3RSb3V0ZVJlc29sdmVkfSxnZXRMaW5rUGF0aDpmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpfSxob29rczpmdW5jdGlvbihlKXt0aGlzLl9nZW5lcmljSG9va3M9ZX0sX2FkZDpmdW5jdGlvbih0KXt2YXIgbj1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06bnVsbCxvPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTpudWxsO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiB0JiYodD1lbmNvZGVVUkkodCkpLHRoaXMuX3JvdXRlcy5wdXNoKFwib2JqZWN0XCI9PT0odm9pZCAwPT09bj9cInVuZGVmaW5lZFwiOmUobikpP3tyb3V0ZTp0LGhhbmRsZXI6bi51c2VzLG5hbWU6bi5hcyxob29rczpvfHxuLmhvb2tzfTp7cm91dGU6dCxoYW5kbGVyOm4saG9va3M6b30pLHRoaXMuX2FkZH0sX2dldFJvb3Q6ZnVuY3Rpb24oKXtyZXR1cm4gbnVsbCE9PXRoaXMucm9vdD90aGlzLnJvb3Q6KHRoaXMucm9vdD1hKHRoaXMuX2NMb2MoKS5zcGxpdChcIj9cIilbMF0sdGhpcy5fcm91dGVzKSx0aGlzLnJvb3QpfSxfbGlzdGVuOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztpZih0aGlzLl91c2VQdXNoU3RhdGUpd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLHRoaXMuX29uTG9jYXRpb25DaGFuZ2UpO2Vsc2UgaWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmXCJvbmhhc2hjaGFuZ2VcImluIHdpbmRvdyl3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImhhc2hjaGFuZ2VcIix0aGlzLl9vbkxvY2F0aW9uQ2hhbmdlKTtlbHNle3ZhciB0PXRoaXMuX2NMb2MoKSxuPXZvaWQgMCxvPXZvaWQgMDsobz1mdW5jdGlvbigpe249ZS5fY0xvYygpLHQhPT1uJiYodD1uLGUucmVzb2x2ZSgpKSxlLl9saXN0ZW5pbmdJbnRlcnZhbD1zZXRUaW1lb3V0KG8sMjAwKX0pKCl9fSxfY0xvYzpmdW5jdGlvbigpe3JldHVyblwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/dm9pZCAwIT09d2luZG93Ll9fTkFWSUdPX1dJTkRPV19MT0NBVElPTl9NT0NLX18/d2luZG93Ll9fTkFWSUdPX1dJTkRPV19MT0NBVElPTl9NT0NLX186byh3aW5kb3cubG9jYXRpb24uaHJlZik6XCJcIn0sX2ZpbmRMaW5rczpmdW5jdGlvbigpe3JldHVybltdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLW5hdmlnb11cIikpfSxfb25Mb2NhdGlvbkNoYW5nZTpmdW5jdGlvbigpe3RoaXMucmVzb2x2ZSgpfSxfY2FsbExlYXZlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5fbGFzdFJvdXRlUmVzb2x2ZWQ7ZSYmZS5ob29rcyYmZS5ob29rcy5sZWF2ZSYmZS5ob29rcy5sZWF2ZShlLnBhcmFtcyl9fSxuLlBBUkFNRVRFUl9SRUdFWFA9LyhbOipdKShcXHcrKS9nLG4uV0lMRENBUkRfUkVHRVhQPS9cXCovZyxuLlJFUExBQ0VfVkFSSUFCTEVfUkVHRVhQPVwiKFteL10rKVwiLG4uUkVQTEFDRV9XSUxEQ0FSRD1cIig/Oi4qKVwiLG4uRk9MTE9XRURfQllfU0xBU0hfUkVHRVhQPVwiKD86LyR8JClcIixuLk1BVENIX1JFR0VYUF9GTEFHUz1cIlwiLG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5hdmlnby5taW4uanMubWFwXG4iLCJjbGFzcyBBdXRvcGxheSB7XG5cdGNvbnN0cnVjdG9yKHsgcm91dGVyIH0gPSB7fSkge1xuXHRcdHRoaXMuc3RhdGUgPSB7fTtcblxuXHRcdHRoaXMucm91dGVyID0gcm91dGVyO1xuXHRcdHRoaXMucm91dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ29uUmVhZHknLCAoYXJncykgPT4gdGhpcy5vblJvdXRlclJlYWR5KGFyZ3MpKTtcblx0XHR0aGlzLnJvdXRlci5hZGRFdmVudExpc3RlbmVyKCdvblJvdXRlQ2hhbmdlJywgKGFyZ3MpID0+XG5cdFx0XHR0aGlzLm9uUm91dGVDaGFuZ2UoYXJncylcblx0XHQpO1xuXHR9XG5cblx0ZW5hYmxlKCkge1xuXHRcdHRoaXMuc3RhdGUuZW5hYmxlZCA9IHRydWU7XG5cdFx0dGhpcy5zdGFydEF1dG9wbGF5KCk7XG5cdH1cblxuXHRkaXNhYmxlKCkge1xuXHRcdHRoaXMuc3RhdGUuZW5hYmxlZCA9IGZhbHNlO1xuXHRcdHRoaXMuc3RvcEF1dG9wbGF5KCk7XG5cdH1cblxuXHR0b2dnbGUoKSB7XG5cdFx0dGhpcy5zdGF0ZS5lbmFibGVkID8gdGhpcy5kaXNhYmxlKCkgOiB0aGlzLmVuYWJsZSgpO1xuXHRcdGlmICh0aGlzLnN0YXRlLmVuYWJsZWQpIHtcblx0XHRcdHRoaXMuYWR2YW5jZSgpO1xuXHRcdH1cblx0fVxuXG5cdG9uS2V5RG93bihlKSB7XG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ1NwYWNlJzpcblx0XHRcdFx0dGhpcy50b2dnbGUoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0b25Sb3V0ZXJSZWFkeSh7IGN1cnJlbnRJbmRleCwgdG90YWwsIGRhdGEsIHNsaWRlTW9kZWwgfSkge1xuXHRcdGNvbnN0IGlzVmlkZW8gPSB0aGlzLmdldElzVmlkZW8oKTtcblx0XHRjb25zdCBzaG91bGRBdXRvcGxheSA9IGRhdGEgJiYgZGF0YS5hdXRvcGxheSAmJiBkYXRhLmF1dG9wbGF5LmVuYWJsZWQ7XG5cdFx0Y29uc3QgYXV0b3BsYXlUaW1lb3V0ID1cblx0XHRcdChzaG91bGRBdXRvcGxheSAmJiBkYXRhICYmIGRhdGEuYXV0b3BsYXkgJiYgZGF0YS5hdXRvcGxheS50aW1lb3V0KSB8fCA1O1xuXHRcdGNvbnN0IGxvb3AgPSBkYXRhICYmIGRhdGEuYXV0b3BsYXkgJiYgZGF0YS5hdXRvcGxheS5sb29wO1xuXHRcdGNvbnN0IGtpb3NrID0gZGF0YSAmJiBkYXRhLmF1dG9wbGF5ICYmIGRhdGEuYXV0b3BsYXkua2lvc2s7XG5cblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Li4udGhpcy5zdGF0ZSxcblx0XHRcdGRhdGEsXG5cdFx0XHRjdXJyZW50SW5kZXgsXG5cdFx0XHR0b3RhbCxcblx0XHRcdGxvb3AsXG5cdFx0XHRraW9zayxcblx0XHRcdGF1dG9wbGF5VGltZW91dCxcblx0XHRcdHNsaWRlTW9kZWwsXG5cdFx0fTtcblxuXHRcdGlmICgha2lvc2spIHtcblx0XHRcdHRoaXMub25LZXlEb3duID0gdGhpcy5vbktleURvd24uYmluZCh0aGlzKTtcblx0XHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xuXHRcdH1cblxuXHRcdGlmIChzaG91bGRBdXRvcGxheSkge1xuXHRcdFx0aWYgKCFpc1ZpZGVvKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlKCk7XG5cdFx0XHRcdHRoaXMuc3RhcnRBdXRvcGxheSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dGhpcy5zdGF0ZS5lbmFibGVkID0gdHJ1ZTtcblx0XHRcdFx0dGhpcy5hdXRvcGxheVZpZGVvKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0c3RhcnRBdXRvcGxheSgpIHtcblx0XHRjb25zdCB7IGF1dG9wbGF5VGltZW91dCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBpc1ZpZGVvID0gdGhpcy5nZXRJc1ZpZGVvKCk7XG5cblx0XHRjbGVhckludGVydmFsKHRoaXMuYXV0b3BsYXlJZCk7XG5cblx0XHRpZiAoIWlzVmlkZW8pIHtcblx0XHRcdHRoaXMuYXV0b3BsYXlJZCA9IHNldEludGVydmFsKFxuXHRcdFx0XHQoKSA9PiB0aGlzLmFkdmFuY2UoKSxcblx0XHRcdFx0YXV0b3BsYXlUaW1lb3V0ICogMTAwMFxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRhZHZhbmNlKCkge1xuXHRcdGNvbnN0IHsgY3VycmVudEluZGV4LCB0b3RhbCwgbG9vcCwgc2xpZGVNb2RlbCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBpc1ZpZGVvID0gc2xpZGVNb2RlbCAmJiBzbGlkZU1vZGVsLnR5cGUgPT09ICd2aWRlbyc7XG5cblx0XHRpZiAoaXNWaWRlbykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IG5leHRJbmRleCA9XG5cdFx0XHRjdXJyZW50SW5kZXggKyAxIDwgdG90YWwgPyBjdXJyZW50SW5kZXggKyAxIDogbG9vcCA/IDAgOiBjdXJyZW50SW5kZXg7XG5cdFx0aWYgKGN1cnJlbnRJbmRleCAhPT0gbmV4dEluZGV4KSB7XG5cdFx0XHR0aGlzLnNldEluZGV4KG5leHRJbmRleCk7XG5cdFx0fVxuXHR9XG5cblx0c3RvcEF1dG9wbGF5KCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvcGxheUlkKTtcblx0fVxuXG5cdHNldEluZGV4KGluZGV4KSB7XG5cdFx0dGhpcy5zdGF0ZS5jdXJyZW50SW5kZXggPSBpbmRleDtcblxuXHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKGAvc2xpZGVzL3NsaWRlLSR7aW5kZXggKyAxfWApO1xuXHR9XG5cblx0Z2V0SXNWaWRlbygpIHtcblx0XHRjb25zdCBpc1ZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdHlwZT1cInZpZGVvXCJdJykubGVuZ3RoO1xuXG5cdFx0cmV0dXJuIGlzVmlkZW87XG5cdH1cblxuXHRvblJvdXRlQ2hhbmdlKHsgc2xpZGVNb2RlbCB9KSB7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdC4uLnRoaXMuc3RhdGUsXG5cdFx0XHRzbGlkZU1vZGVsLFxuXHRcdFx0Y3VycmVudEluZGV4OiBzbGlkZU1vZGVsLmluZGV4LFxuXHRcdH07XG5cblx0XHRjb25zdCB7IGRhdGEgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3Qgc2hvdWxkQXV0b3BsYXkgPSBkYXRhICYmIGRhdGEuYXV0b3BsYXkgJiYgZGF0YS5hdXRvcGxheS5lbmFibGVkO1xuXHRcdGlmIChzaG91bGRBdXRvcGxheSAmJiB0aGlzLmdldElzVmlkZW8oKSkge1xuXHRcdFx0dGhpcy5hdXRvcGxheVZpZGVvKCk7XG5cdFx0fVxuXHR9XG5cblx0YXV0b3BsYXlWaWRlbygpIHtcblx0XHRjb25zdCB3YXNFbmFibGVkID0gdGhpcy5zdGF0ZS5lbmFibGVkO1xuXHRcdHRoaXMuZGlzYWJsZSgpO1xuXG5cdFx0Ly8gbGlzdGVuIHRvIHZpZGVvIGV2ZW50c1xuXHRcdGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdHlwZT1cInZpZGVvXCJdYCk7XG5cblx0XHRpZiAodmlkZW8pIHtcblx0XHRcdGNvbnN0IGlmcmFtZSA9IHZpZGVvLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuXHRcdFx0Y29uc3Qgc3JjID0gaWZyYW1lICYmIGlmcmFtZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuXG5cdFx0XHRsZXQgcHJvdmlkZXI7XG5cdFx0XHRpZiAoIXNyYykge1xuXHRcdFx0XHRwcm92aWRlciA9ICdsb2NhbCc7XG5cdFx0XHR9IGVsc2UgaWYgKHNyYy5pbmRleE9mKCdodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8nKSA9PT0gMCkge1xuXHRcdFx0XHRwcm92aWRlciA9ICd2aW1lbyc7XG5cdFx0XHR9IGVsc2UgaWYgKHNyYy5pbmRleE9mKCdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nKSA9PT0gMCkge1xuXHRcdFx0XHRwcm92aWRlciA9ICd5b3V0dWJlJztcblx0XHRcdH1cblxuXHRcdFx0aWYgKHByb3ZpZGVyID09PSAnbG9jYWwnKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlTG9jYWxQbGF5ZXIoeyB3YXNFbmFibGVkIH0pO1xuXHRcdFx0fSBlbHNlIGlmIChwcm92aWRlciA9PT0gJ3ZpbWVvJykge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZVZpbWVvUGxheWVyKHsgd2FzRW5hYmxlZCB9KTtcblx0XHRcdH0gZWxzZSBpZiAocHJvdmlkZXIgPT09ICd5b3V0dWJlJykge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZVlvdXR1YmVQbGF5ZXIoeyB3YXNFbmFibGVkIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZUxvY2FsUGxheWVyKHsgd2FzRW5hYmxlZCA9IGZhbHNlIH0gPSB7fSkge1xuXHRcdGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdHlwZT1cInZpZGVvXCJdIHZpZGVvYCk7XG5cblx0XHRpZiAodGhpcy5zdGF0ZS5raW9zaykge1xuXHRcdFx0dmlkZW8ucmVtb3ZlQXR0cmlidXRlKCdjb250cm9scycpO1xuXHRcdH1cblxuXHRcdHZpZGVvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgKCkgPT4ge1xuXHRcdFx0Y29uc29sZS5sb2coJ2xvY2FsIHZpZGVvIGVuZGVkICcsIHdhc0VuYWJsZWQpO1xuXHRcdFx0aWYgKHdhc0VuYWJsZWQpIHtcblx0XHRcdFx0dGhpcy5lbmFibGUoKTtcblx0XHRcdFx0dGhpcy5hZHZhbmNlKCk7XG5cdFx0XHRcdHRoaXMuc3RhcnRBdXRvcGxheSgpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Y3JlYXRlVmltZW9QbGF5ZXIoeyB3YXNFbmFibGVkID0gZmFsc2UgfSA9IHt9KSB7XG5cdFx0Y29uc3QgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10eXBlPVwidmlkZW9cIl1gKTtcblx0XHRjb25zdCBpZnJhbWUgPSB2aWRlby5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcblxuXHRcdGxldCBzcmMgPSBpZnJhbWUuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuXHRcdGNvbnNvbGUubG9nKCdraW9zayAnLCB0aGlzLnN0YXRlLmtpb3NrKTtcblxuXHRcdGlmICh0aGlzLnN0YXRlLmtpb3NrKSB7XG5cdFx0XHRzcmMgPSBzcmMuaW5kZXhPZignPycpID09PSAtMSA/IHNyYy5jb25jYXQoJz8nKSA6IHNyYy5jb25jYXQoJyYnKTtcblx0XHRcdHNyYyA9IHNyYy5yZXBsYWNlKCdjb250cm9scz0xJywgJycpLmNvbmNhdCgnY29udHJvbHM9MCcpO1xuXHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcblx0XHR9XG5cblx0XHRjb25zdCBwbGF5ZXIgPSBuZXcgVmltZW8uUGxheWVyKGlmcmFtZSk7XG5cblx0XHQvLyBhdXRvcGxheSBhdCBlbmQgb3IgYWZ0ZXIgdGltZW91dFxuXHRcdGNvbnN0IGF1dG9wbGF5VGltZW91dCA9IHZpZGVvLmdldEF0dHJpYnV0ZSgnZGF0YS1hdXRvcGxheS10aW1lb3V0Jyk7XG5cblx0XHQvLyBpZiBhdXRvcGxheVRpbWVvdXQgaXMgYSBudW1iZXIsXG5cdFx0Ly8gdXNlIHRoYXQgdmFsdWUgdG8gYWR2YW5jZVxuXHRcdC8vIG90aGVyd2lzZSB3YWl0IHVudGlsIGVuZCBvZiB2aWRlb1xuXHRcdGNvbnN0IGF1dG9wbGF5VGltZW91dElzTnVtYmVyID1cblx0XHRcdGF1dG9wbGF5VGltZW91dCAmJiBhdXRvcGxheVRpbWVvdXQgPT0gcGFyc2VJbnQoYXV0b3BsYXlUaW1lb3V0LCAxMCk7XG5cblx0XHRpZiAoYXV0b3BsYXlUaW1lb3V0SXNOdW1iZXIpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvcGxheUlkKTtcblx0XHRcdHRoaXMuYXV0b3BsYXlJZCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0dGhpcy5hZHZhbmNlKCk7XG5cdFx0XHRcdHRoaXMuc3RhcnRBdXRvcGxheSgpO1xuXHRcdFx0fSwgYXV0b3BsYXlUaW1lb3V0ICogMTAwMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHdoZW4gdGhlIHZpZGVvIGhhcyBlbWl0dGVkIGl0cyBjb21wbGV0ZSBldmVudFxuXHRcdFx0Ly8gZW5hYmxlIGF1dG9wbGF5LlxuXHRcdFx0cGxheWVyLm9uKCdlbmRlZCcsIChkYXRhKSA9PiB7XG5cdFx0XHRcdC8vIGJ1dCBvbmx5IGlmIGF1dG9wbGF5IHdhcyBlbmFibGVkXG5cdFx0XHRcdGNvbnNvbGUubG9nKCd2aW1lbyBlbmRlZCAnLCB3YXNFbmFibGVkKTtcblx0XHRcdFx0aWYgKHdhc0VuYWJsZWQpIHtcblx0XHRcdFx0XHR0aGlzLmVuYWJsZSgpO1xuXHRcdFx0XHRcdHRoaXMuYWR2YW5jZSgpO1xuXHRcdFx0XHRcdHRoaXMuc3RhcnRBdXRvcGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRvbllUUGxheWVyU3RhdGVDaGFuZ2UoeyB3YXNFbmFibGVkLCBldmVudCB9KSB7XG5cdFx0Y29uc29sZS5sb2coJ3l0IGVuZGVkICcsIHdhc0VuYWJsZWQpO1xuXHRcdGlmIChldmVudC5kYXRhID09PSAwICYmIHdhc0VuYWJsZWQpIHtcblx0XHRcdHRoaXMuZW5hYmxlKCk7XG5cdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdHRoaXMuc3RhcnRBdXRvcGxheSgpO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZVlvdXR1YmVQbGF5ZXIoeyB3YXNFbmFibGVkID0gZmFsc2UgfSA9IHt9KSB7XG5cdFx0Y29uc29sZS5sb2coJ2NyZWF0aW5nIHlvdXR1YmUgcGxheWVyJyk7XG5cblx0XHRjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXR5cGU9XCJ2aWRlb1wiXWApO1xuXHRcdGNvbnN0IGlmcmFtZSA9IHZpZGVvLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuXHRcdGxldCBzcmMgPSBpZnJhbWUuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblx0XHRpZiAodGhpcy5zdGF0ZS5raW9zaykge1xuXHRcdFx0c3JjID0gc3JjLmluZGV4T2YoJz8nKSA9PT0gLTEgPyBzcmMuY29uY2F0KCc/JykgOiBzcmMuY29uY2F0KCcmJyk7XG5cdFx0XHRzcmMgPSBzcmMucmVwbGFjZSgnY29udHJvbHM9MScsICcnKS5jb25jYXQoJ2NvbnRyb2xzPTAnKTtcblx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG5cdFx0fVxuXG5cdFx0dmFyIHRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0dGFnLnNyYyA9ICdodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpJztcblx0XHR2YXIgZmlyc3RTY3JpcHRUYWcgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0JylbMF07XG5cdFx0Zmlyc3RTY3JpcHRUYWcucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFnLCBmaXJzdFNjcmlwdFRhZyk7XG5cblx0XHR2YXIgcGxheWVyO1xuXG5cdFx0d2luZG93Lm9uWW91VHViZUlmcmFtZUFQSVJlYWR5ID0gKCkgPT4ge1xuXHRcdFx0cGxheWVyID0gbmV3IFlULlBsYXllcigneXRwbGF5ZXInLCB7XG5cdFx0XHRcdGF1dG9wbGF5OiAxLFxuXHRcdFx0XHRldmVudHM6IHtcblx0XHRcdFx0XHQvLyBvblJlYWR5OiBvblBsYXllclJlYWR5LFxuXHRcdFx0XHRcdG9uU3RhdGVDaGFuZ2U6IChldmVudCkgPT5cblx0XHRcdFx0XHRcdHRoaXMub25ZVFBsYXllclN0YXRlQ2hhbmdlKHsgd2FzRW5hYmxlZCwgZXZlbnQgfSksXG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0Lypcblx0XHRmdW5jdGlvbiBvblBsYXllclJlYWR5KGV2ZW50KSB7XG5cdFx0XHQvLyBldmVudC50YXJnZXQucGxheVZpZGVvKCk7XG5cdFx0fVxuXHRcdCovXG5cblx0XHQvLyBhdXRvcGxheSBhdCBlbmQgb3IgYWZ0ZXIgdGltZW91dFxuXHRcdGNvbnN0IGF1dG9wbGF5VGltZW91dCA9IHZpZGVvLmdldEF0dHJpYnV0ZSgnZGF0YS1hdXRvcGxheS10aW1lb3V0Jyk7XG5cblx0XHQvLyBpZiBhdXRvcGxheVRpbWVvdXQgaXMgYSBudW1iZXIsXG5cdFx0Ly8gdXNlIHRoYXQgdmFsdWUgdG8gYWR2YW5jZVxuXHRcdC8vIG90aGVyd2lzZSB3YWl0IHVudGlsIGVuZCBvZiB2aWRlb1xuXHRcdGNvbnN0IGF1dG9wbGF5VGltZW91dElzTnVtYmVyID1cblx0XHRcdGF1dG9wbGF5VGltZW91dCA9PSBwYXJzZUludChhdXRvcGxheVRpbWVvdXQsIDEwKTtcblxuXHRcdGlmIChhdXRvcGxheVRpbWVvdXRJc051bWJlcikge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9wbGF5SWQpO1xuXHRcdFx0dGhpcy5hdXRvcGxheUlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdFx0dGhpcy5zdGFydEF1dG9wbGF5KCk7XG5cdFx0XHR9LCBhdXRvcGxheVRpbWVvdXQgKiAxMDAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gdGhlIHZpZGVvIGlzIGFscmVhZHkgbGlzdGVuaW5nXG5cdFx0XHQvLyB0byBpdCdzIG93biBjb21wbGV0ZSBldmVudFxuXHRcdFx0Ly8gd2l0aCB0aGUgeW91dHViZSBwbGF5ZXIgYXBpXG5cdFx0fVxuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9wbGF5SWQpO1xuXHRcdHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEF1dG9wbGF5O1xuIiwiLy8gaW1wb3J0IHsgTWVkaWFRdWVyeSB9IGZyb20gJ2ZvdW5kYXRpb24tc2l0ZXMnO1xuLy8gaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcblxuLy8gY2xhc3MgRGVidWdnZXIge1xuLy8gXHRjb25zdHJ1Y3RvcigpIHtcbi8vIFx0XHR0aGlzLnN0YXRlID0ge307XG5cbi8vIFx0XHQvLyBjb250YWluZXIgZGl2XG4vLyBcdFx0dGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbi8vIFx0XHR0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAnZGVidWdnZXInO1xuLy8gXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5jb250YWluZXIpO1xuXG4vLyBcdFx0dGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbi8vIFx0XHR0aGlzLmNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4vLyBcdFx0dGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5jYW52YXMpO1xuXG4vLyBcdFx0dGhpcy5yZW5kZXIoKTtcblxuLy8gXHRcdCQod2luZG93KS5vbignY2hhbmdlZC56Zi5tZWRpYXF1ZXJ5JywgKGV2ZW50LCBuZXdTaXplLCBvbGRTaXplKSA9PlxuLy8gXHRcdFx0dGhpcy5yZW5kZXIoKVxuLy8gXHRcdCk7XG4vLyBcdH1cblxuLy8gXHRyZW5kZXIoKSB7XG4vLyBcdFx0Y29uc3QgdyA9IE51bWJlcihcbi8vIFx0XHRcdGRvY3VtZW50XG4vLyBcdFx0XHRcdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hY3R1YWwtd2lkdGgnKVxuLy8gXHRcdFx0XHQuZ2V0QXR0cmlidXRlKCdkYXRhLWFjdHVhbC13aWR0aCcpXG4vLyBcdFx0KTtcblxuLy8gXHRcdGNvbnN0IGggPSBOdW1iZXIoXG4vLyBcdFx0XHRkb2N1bWVudFxuLy8gXHRcdFx0XHQucXVlcnlTZWxlY3RvcignW2RhdGEtYWN0dWFsLWhlaWdodCcpXG4vLyBcdFx0XHRcdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0dWFsLWhlaWdodCcpXG4vLyBcdFx0KTtcblxuLy8gXHRcdGlmICghdyB8fCAhaCkge1xuLy8gXHRcdFx0dGhpcy5jbGVhcigpO1xuLy8gXHRcdFx0cmV0dXJuO1xuLy8gXHRcdH1cblxuLy8gXHRcdGNvbnN0IHRvdGFsV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbi8vIFx0XHRjb25zdCB0b3RhbEhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbi8vIFx0XHRjb25zdCB0aWxlV2lkdGggPSB0b3RhbFdpZHRoIC8gdzsgLy8gaG93IHdpZGUgaXMgYSBmb290XG4vLyBcdFx0Y29uc3QgdGlsZUhlaWdodCA9IHRvdGFsSGVpZ2h0IC8gaDsgLy8gaG93IHRhbGwgaXMgYSBmb290XG5cbi8vIFx0XHRpZiAoTWVkaWFRdWVyeS5pcygndmFzdCcpKSB7XG4vLyBcdFx0XHR0aGlzLmNhbnZhcy53aWR0aCA9IHRpbGVXaWR0aDtcbi8vIFx0XHRcdHRoaXMuY2FudmFzLmhlaWdodCA9IHRpbGVIZWlnaHQ7XG5cbi8vIFx0XHRcdC8vIGJvdHRvbSBhbmQgcmlnaHQgbGluZXNcbi8vIFx0XHRcdHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbi8vIFx0XHRcdHRoaXMuY29udGV4dC5tb3ZlVG8oMCwgdGlsZUhlaWdodCk7XG4vLyBcdFx0XHR0aGlzLmNvbnRleHQubGluZVRvKDAsIDApO1xuLy8gXHRcdFx0dGhpcy5jb250ZXh0LmxpbmVUbyh0aWxlV2lkdGgsIDApO1xuLy8gXHRcdFx0dGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuXG4vLyBcdFx0XHQvLyB0aWNrcyBldmVyeSAxLzQgZm9vdCBhbG9uZyB4IGFuZCB5IGF4aXNcbi8vIFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4vLyBcdFx0XHRcdGNvbnN0IHggPSAodGlsZVdpZHRoIC8gNCkgKiBpO1xuLy8gXHRcdFx0XHRjb25zdCB5ID0gKHRpbGVIZWlnaHQgLyA0KSAqIGk7XG4vLyBcdFx0XHRcdGNvbnN0IHhMZW5ndGggPSBpID09PSAyID8gNTAgOiAyNTtcbi8vIFx0XHRcdFx0Y29uc3QgeUxlbmd0aCA9IGkgPT09IDIgPyA1MCA6IDI1O1xuLy8gXHRcdFx0XHR0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4vLyBcdFx0XHRcdHRoaXMuY29udGV4dC5tb3ZlVG8oMCwgeSk7XG4vLyBcdFx0XHRcdHRoaXMuY29udGV4dC5saW5lVG8oeExlbmd0aCwgeSk7XG4vLyBcdFx0XHRcdHRoaXMuY29udGV4dC5zdHJva2UoKTtcblxuLy8gXHRcdFx0XHR0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4vLyBcdFx0XHRcdHRoaXMuY29udGV4dC5tb3ZlVG8oeCwgMCk7XG4vLyBcdFx0XHRcdHRoaXMuY29udGV4dC5saW5lVG8oeCwgeUxlbmd0aCk7XG4vLyBcdFx0XHRcdHRoaXMuY29udGV4dC5zdHJva2UoKTtcbi8vIFx0XHRcdH1cblxuLy8gXHRcdFx0dmFyIGRhdGEgPSB0aGlzLmNhbnZhcy50b0RhdGFVUkwoKTtcblxuLy8gXHRcdFx0dGhpcy5jb250YWluZXIuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCgnICsgZGF0YSArICcpJztcbi8vIFx0XHR9IGVsc2Uge1xuLy8gXHRcdFx0Ly8gd2hlbiBub3QgYSB2YXN0IG1lZGlhcXVlcnksXG4vLyBcdFx0XHR0aGlzLmNsZWFyKCk7XG4vLyBcdFx0fVxuLy8gXHR9XG5cbi8vIFx0Y2xlYXIoKSB7XG4vLyBcdFx0Y29uc3QgdG90YWxXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuLy8gXHRcdGNvbnN0IHRvdGFsSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuLy8gXHRcdHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdG90YWxXaWR0aCwgdG90YWxIZWlnaHQpO1xuLy8gXHR9XG4vLyB9XG5cbi8vIGV4cG9ydCBkZWZhdWx0IERlYnVnZ2VyO1xuIiwiLy8gRnJvbSBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9tdWRnZS81ODMwMzgyXG5cbmNsYXNzIEV2ZW50RW1pdHRlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuZXZlbnRzID0ge307XG5cdH1cblxuXHRfZ2V0RXZlbnRMaXN0QnlOYW1lKGV2ZW50TmFtZSkge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5ldmVudHNbZXZlbnROYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRcdHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0gPSBuZXcgU2V0KCk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmV2ZW50c1tldmVudE5hbWVdO1xuXHR9XG5cblx0b24oZXZlbnROYW1lLCBmbikge1xuXHRcdHRoaXMuX2dldEV2ZW50TGlzdEJ5TmFtZShldmVudE5hbWUpLmFkZChmbik7XG5cdH1cblxuXHRvbmNlKGV2ZW50TmFtZSwgZm4pIHtcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblxuXHRcdGNvbnN0IG9uY2VGbiA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcblx0XHRcdHNlbGYucmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lLCBvbmNlRm4pO1xuXHRcdFx0Zm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fTtcblx0XHR0aGlzLm9uKGV2ZW50TmFtZSwgb25jZUZuKTtcblx0fVxuXG5cdGVtaXQoZXZlbnROYW1lLCAuLi5hcmdzKSB7XG5cdFx0dGhpcy5fZ2V0RXZlbnRMaXN0QnlOYW1lKGV2ZW50TmFtZSkuZm9yRWFjaChcblx0XHRcdGZ1bmN0aW9uKGZuKSB7XG5cdFx0XHRcdGZuLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXHRcdFx0fS5iaW5kKHRoaXMpXG5cdFx0KTtcblx0fVxuXG5cdHJlbW92ZUxpc3RlbmVyKGV2ZW50TmFtZSwgZm4pIHtcblx0XHR0aGlzLl9nZXRFdmVudExpc3RCeU5hbWUoZXZlbnROYW1lKS5kZWxldGUoZm4pO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50RW1pdHRlcjtcbiIsImNsYXNzIE5hdmlnYXRpb24ge1xuXHRjb25zdHJ1Y3Rvcih7IHJvdXRlciwgdmlzaWJsZSA9IGZhbHNlLCBjb250YWluZXJJZCA9ICdjb250cm9scycgfSA9IHt9KSB7XG5cdFx0dGhpcy5zdGF0ZSA9IHsgdmlzaWJsZSB9O1xuXG5cdFx0dGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZClcblx0XHRcdD8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpXG5cdFx0XHQ6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cdFx0dGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG5cdFx0dGhpcy5yb3V0ZXIuYWRkRXZlbnRMaXN0ZW5lcignb25SZWFkeScsIChhcmdzKSA9PiB0aGlzLm9uUm91dGVyUmVhZHkoYXJncykpO1xuXHRcdHRoaXMucm91dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ29uUm91dGVDaGFuZ2UnLCAoYXJncykgPT5cblx0XHRcdHRoaXMub25Sb3V0ZUNoYW5nZShhcmdzKVxuXHRcdCk7XG5cdH1cblxuXHRzaG93KCkge1xuXHRcdHRoaXMuc3RhdGUudmlzaWJsZSA9IHRydWU7XG5cdFx0dGhpcy5yZW5kZXIoKTtcblx0fVxuXG5cdGhpZGUoKSB7XG5cdFx0dGhpcy5zdGF0ZS52aXNpYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5jbGVhcigpO1xuXHR9XG5cblx0ZW5hYmxlKCkge1xuXHRcdHRoaXMuc3RhdGUuZW5hYmxlZCA9IHRydWU7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xuXHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG5cblx0XHQvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuXHRcdC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSwgZmFsc2UpO1xuXHR9XG5cblx0ZGlzYWJsZSgpIHtcblx0XHQvLyB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG5cblx0XHR0aGlzLnN0YXRlLmVuYWJsZWQgPSBmYWxzZTtcblx0fVxuXG5cdG9uS2V5RG93bihlKSB7XG5cdFx0c3dpdGNoIChlLmNvZGUpIHtcblx0XHRcdGNhc2UgJ0Fycm93UmlnaHQnOlxuXHRcdFx0XHR0aGlzLm5leHQoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICdBcnJvd0xlZnQnOlxuXHRcdFx0XHR0aGlzLnByZXYoKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0bmV4dCgpIHtcblx0XHRjb25zdCB7IGN1cnJlbnRJbmRleCwgdG90YWwgfSA9IHRoaXMuc3RhdGU7XG5cdFx0aWYgKGN1cnJlbnRJbmRleCArIDEgPCB0b3RhbCkge1xuXHRcdFx0dGhpcy5zZXRJbmRleChjdXJyZW50SW5kZXggKyAxKTtcblx0XHR9XG5cdH1cblxuXHRwcmV2KCkge1xuXHRcdGNvbnN0IHsgY3VycmVudEluZGV4IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGlmIChjdXJyZW50SW5kZXggLSAxID49IDApIHtcblx0XHRcdHRoaXMuc2V0SW5kZXgoY3VycmVudEluZGV4IC0gMSk7XG5cdFx0fVxuXHR9XG5cblx0c2V0SW5kZXgoaW5kZXgpIHtcblx0XHR0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoYC9zbGlkZXMvc2xpZGUtJHtpbmRleCArIDF9YCk7XG5cdH1cblxuXHQvLyBvblBvcFN0YXRlKGV2ZW50KSB7XG5cdC8vIFx0Y29uc29sZS5sb2coJ3N0YXRlICcsIGhpc3Rvcnkuc3RhdGUpO1xuXHQvLyB9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgY3VycmVudEluZGV4LCB0b3RhbCwga2lvc2sgfSA9IHRoaXMuc3RhdGU7XG5cblx0XHRjb25zdCBtYXJrdXAgPSBgXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidG9wLWJhci1sZWZ0XCI+XG5cdFx0XHRcdDx1bCBjbGFzcz1cImRyb3Bkb3duIG1lbnVcIj5cblx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtZW51LXRleHRcIj5UZWQncyBQcmVzZW50YXRpb248L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQke1xuXHRcdFx0XHQha2lvc2tcblx0XHRcdFx0XHQ/IGA8ZGl2IGNsYXNzPVwidG9wLWJhci1yaWdodFwiPlxuXHRcdFx0XHQ8dWwgY2xhc3M9XCJtZW51XCI+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b25cIiBkYXRhLWFjdGlvbj1cInByZXZcIj5cblx0XHRcdFx0XHRcdFx0UHJldlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQ8bGk+PHA+JHtjdXJyZW50SW5kZXggKyAxfSAvICR7dG90YWx9PC9wPjwvbGk+XG5cdFx0XHRcdFx0PGxpPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidXR0b25cIiBkYXRhLWFjdGlvbj1cIm5leHRcIj5cblx0XHRcdFx0XHRcdFx0TmV4dFxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0PC91bD5cblx0XHRcdDwvZGl2PmBcblx0XHRcdFx0XHQ6IGA8cD4ke2N1cnJlbnRJbmRleCArIDF9IC8gJHt0b3RhbH08L3A+YFxuXHRcdFx0fVxuXHRcdGA7XG5cblx0XHR0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSBtYXJrdXA7XG5cblx0XHQvLyBzZXQgdXAgZXZlbnQgbGlzdGVuZXJzXG5cdFx0Y29uc3QgcHJldkVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYWN0aW9uPXByZXZdJyk7XG5cdFx0cHJldkVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB0aGlzLnByZXYoKSk7XG5cdFx0fSk7XG5cblx0XHRjb25zdCBuZXh0RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY3Rpb249bmV4dF0nKTtcblx0XHRuZXh0RWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMubmV4dCgpKTtcblx0XHR9KTtcblxuXHRcdGlmICh0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCA9PT0gMCkge1xuXHRcdFx0cHJldkVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZCcpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJldkVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiBlbC5jbGFzc0xpc3QucmVtb3ZlKCdkaXNhYmxlZCcpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5zdGF0ZS5jdXJyZW50SW5kZXggPT09IHRoaXMuc3RhdGUudG90YWwgLSAxKSB7XG5cdFx0XHRuZXh0RWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXh0RWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJykpO1xuXHRcdH1cblx0fVxuXG5cdG9uUm91dGVyUmVhZHkoeyBjdXJyZW50SW5kZXgsIHRvdGFsLCBkYXRhIH0pIHtcblx0XHRjb25zdCBraW9zayA9IGRhdGEuYXV0b3BsYXkgJiYgZGF0YS5hdXRvcGxheS5raW9zaztcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Li4udGhpcy5zdGF0ZSxcblx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHRjdXJyZW50SW5kZXgsXG5cdFx0XHR0b3RhbCxcblx0XHRcdGtpb3NrLFxuXHRcdH07XG5cdFx0dGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuZW5hYmxlKCk7XG5cblx0XHR0aGlzLnN0YXRlLnZpc2libGUgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuXHR9XG5cblx0b25Sb3V0ZUNoYW5nZSh7IHNsaWRlTW9kZWwgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHQuLi50aGlzLnN0YXRlLFxuXHRcdFx0Y3VycmVudEluZGV4OiBzbGlkZU1vZGVsLmluZGV4LFxuXHRcdH07XG5cblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjtcbiIsImltcG9ydCBOYXZpZ28gZnJvbSAnTmF2aWdvJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnSlMvZXZlbnQtZW1pdHRlci5qcyc7XG5cbmNsYXNzIFJvdXRlciB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHRoaXMuc3RhdGUgPSB7IHJlYWR5OiBmYWxzZSB9O1xuXHRcdHRoaXMucm91dGVyID0gbmV3IE5hdmlnbyhudWxsLCB0cnVlKTtcblx0XHR0aGlzLmV2ZW50RW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblx0fVxuXG5cdGxvYWQoanNvbikge1xuXHRcdGZldGNoKGpzb24pXG5cdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0cmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcblx0XHRcdH0pXG5cdFx0XHQudGhlbigoZGF0YSkgPT4ge1xuXHRcdFx0XHR0aGlzLmRhdGEgPSBkYXRhO1xuXG5cdFx0XHRcdHRoaXMucm91dGVyXG5cdFx0XHRcdFx0Lm9uKCcvc2xpZGVzLzppZCcsICgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMubG9hZFNsaWRlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucmVzb2x2ZSgpO1xuXG5cdFx0XHRcdHRoaXMucm91dGVyXG5cdFx0XHRcdFx0Lm9uKCgpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMubG9hZFNsaWRlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQucmVzb2x2ZSgpO1xuXG5cdFx0XHRcdHRoaXMucm91dGVyLm5vdEZvdW5kKCgpID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygnTm90IGZvdW5kJyk7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdHRoaXMuc3RhdGUucmVhZHkgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLm9uUmVhZHkodGhpcy5jYWxsYmFjayk7XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uKGVycikge1xuXHRcdFx0XHQvLyBUaGVyZSB3YXMgYW4gZXJyb3Jcblx0XHRcdFx0Y29uc29sZS53YXJuKCdUaGVyZSB3YXMgYW4gZXJyb3IgbG9hZGluZyB0aGUganNvbiBmaWxlLicsIGVycik7XG5cdFx0XHR9KTtcblx0fVxuXG5cdGdldFNsaWRlTW9kZWwoKSB7XG5cdFx0Ly8gZGVyaXZlIHRoZSBzbGlkZSBmcm9tIHRoZSB1cmxcblx0XHRjb25zdCBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cdFx0Ly8gZ2V0IHRoZSBzbGlkZSBpbmRleCBmcm9tIHRoZSBoYXNoLCBvciBkZWZhdWx0IHRvIDFcblx0XHRsZXQgc2xpZGVJbmRleCA9IHBhcnNlSW50KGhhc2guc3BsaXQoJ3NsaWRlLScpWzFdIHx8IDEsIDEwKTtcblx0XHQvLyBzbGlkZXMgYXJlIGxhYmVsbGVkIDEsIDIsIDMsIGJ1dCBhcmUgYXJyYXlzICgwLCAxLCAyKVxuXHRcdHNsaWRlSW5kZXggLT0gMTtcblxuXHRcdGNvbnN0IHNsaWRlTW9kZWwgPSB0aGlzLmRhdGEuc2xpZGVzW3NsaWRlSW5kZXhdO1xuXG5cdFx0cmV0dXJuIHsgLi4uc2xpZGVNb2RlbCwgaW5kZXg6IHNsaWRlSW5kZXggfTtcblx0fVxuXG5cdGxvYWRTbGlkZSgpIHtcblx0XHRjb25zdCBzbGlkZU1vZGVsID0gdGhpcy5nZXRTbGlkZU1vZGVsKCk7XG5cblx0XHRjb25zdCBodG1sID0gcmVxdWlyZShgLi4vc2xpZGVzLyR7c2xpZGVNb2RlbC5sb2N9YCk7XG5cdFx0Y29uc3QgcHJlc2VudGF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJlc2VudGF0aW9uJylbMF07XG5cdFx0Y29uc3QgY29udGVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudHMnKTtcblxuXHRcdGNvbnRlbnRzLmlubmVySFRNTCA9IGh0bWw7XG5cblx0XHQvLyBzZXQgYmFja2dyb3VuZCBjb2xvcnNcblx0XHRjb25zdCBiYWNrZ3JvdW5kQ29sb3JMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcblx0XHRcdCdkaXZbZGF0YS1iYWNrZ3JvdW5kLWNvbG9yXSdcblx0XHQpO1xuXHRcdHByZXNlbnRhdGlvbi5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYmFja2dyb3VuZC1jb2xvcicpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBiYWNrZ3JvdW5kQ29sb3JMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBjb2xvciA9IGJhY2tncm91bmRDb2xvckxpc3RbaV0uZ2V0QXR0cmlidXRlKFxuXHRcdFx0XHQnZGF0YS1iYWNrZ3JvdW5kLWNvbG9yJ1xuXHRcdFx0KTtcblx0XHRcdHByZXNlbnRhdGlvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcblx0XHR9XG5cblx0XHQvLyBzZXQgYmFja2dyb3VuZCBpbWFnZXNcblx0XHRjb25zdCBiYWNrZ3JvdW5kTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLWJhY2tncm91bmRdJyk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJhY2tncm91bmRMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCB1cmwgPSBiYWNrZ3JvdW5kTGlzdFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYmFja2dyb3VuZCcpO1xuXHRcdFx0YmFja2dyb3VuZExpc3RbaV0uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJ1wiICsgdXJsICsgXCInKVwiO1xuXHRcdH1cblxuXHRcdC8vIHBlcmZvcm0gYW55IGFsaWdubWVudCBhZGp1c3RtZW50c1xuXHRcdHZhciBhbGlnbm1lbnRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtYWxpZ25dJyk7XG5cdFx0Y29udGVudHMuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RleHQtYWxpZ24nKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYWxpZ25tZW50TGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgYWxpZ25tZW50ID0gYWxpZ25tZW50TGlzdFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWxpZ24nKTtcblx0XHRcdGNvbnRlbnRzLnN0eWxlLnRleHRBbGlnbiA9IGFsaWdubWVudDtcblx0XHR9XG5cblx0XHQvLyBwZXJmb3JtIGFueSBjb2x1bW5hciBhZGp1c3RtZW50c1xuXHRcdHZhciBjb2x1bW5hckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbZGF0YS1jb2x1bW5dJyk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNvbHVtbmFyTGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgY29sdW1uID0gY29sdW1uYXJMaXN0W2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1jb2x1bW4nKTtcblx0XHRcdGNvbHVtbmFyTGlzdFtpXS5wYXJlbnROb2RlLnN0eWxlLmJvcmRlciA9ICcycHggc29saWQgcmVkJztcblx0XHR9XG5cdH1cblxuXHRuYXZpZ2F0ZShwYXRoKSB7XG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUocGF0aCk7XG5cblx0XHQvLyB1c2Ugc2V0VGltZW91dCB3aXRoIDAgdGltZSB0byBzdW1tb24gYXQgZW5kIG9mIGZyYW1lXG5cdFx0Ly8gc28gY29udGVudHMgaGF2ZSBhbiBvcHBvcnR1bml0eSB0byByZW5kZXJcblx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdGNvbnN0IHNsaWRlTW9kZWwgPSB0aGlzLmdldFNsaWRlTW9kZWwoKTtcblx0XHRcdHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ29uUm91dGVDaGFuZ2UnLCB7IHNsaWRlTW9kZWwsIHBhdGggfSk7XG5cdFx0fSwgMCk7XG5cdH1cblxuXHRvblJlYWR5KGNhbGxiYWNrKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUucmVhZHkpIHtcblx0XHRcdGNvbnN0IHNsaWRlTW9kZWwgPSB0aGlzLmdldFNsaWRlTW9kZWwoKTtcblx0XHRcdGNvbnN0IHsgaW5kZXggfSA9IHNsaWRlTW9kZWw7XG5cdFx0XHRjb25zdCB0b3RhbCA9IHRoaXMuZGF0YS5zbGlkZXMubGVuZ3RoO1xuXG5cdFx0XHR0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdvblJlYWR5Jywge1xuXHRcdFx0XHRjdXJyZW50SW5kZXg6IGluZGV4LFxuXHRcdFx0XHR0b3RhbCxcblx0XHRcdFx0ZGF0YTogdGhpcy5kYXRhLFxuXHRcdFx0XHRzbGlkZU1vZGVsLFxuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuZXZlbnRFbWl0dGVyLmFkZCgnb25SZWFkeScsIGNhbGxiYWNrKTtcblx0XHR9XG5cdH1cblxuXHRhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcblx0XHR0aGlzLmV2ZW50RW1pdHRlci5vbihldmVudE5hbWUsIGNhbGxiYWNrKTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBSb3V0ZXI7XG4iLCJpbXBvcnQgUm91dGVyIGZyb20gJ0pTL3JvdXRlci5qcyc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICdKUy9uYXZpZ2F0aW9uLmpzeCc7XG5pbXBvcnQgQXV0b3BsYXlDb250cm9scyBmcm9tICdKUy9hdXRvcGxheS5qc3gnO1xuaW1wb3J0IERlYnVnZ2VyIGZyb20gJ0pTL2RlYnVnZ2VyLmpzeCc7XG5cbmNvbnN0IGlzRGVtbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRlbW9dYCk7XG5cbmlmIChpc0RlbW8pIHtcblx0Y29uc3Qgcm91dGVyID0gbmV3IFJvdXRlcigpO1xuXHRjb25zdCBuYXYgPSBuZXcgTmF2aWdhdGlvbih7IHJvdXRlciwgdmlzaWJsZTogdHJ1ZSB9KTtcblx0Y29uc3QgYXV0b3BsYXlDb250cm9scyA9IG5ldyBBdXRvcGxheUNvbnRyb2xzKHsgcm91dGVyIH0pO1xuXG5cdGNvbnN0IGRlbW9VcmkgPSBkb2N1bWVudFxuXHRcdC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1kZW1vXWApXG5cdFx0LmdldEF0dHJpYnV0ZSgnZGF0YS1kZW1vJyk7XG5cblx0cm91dGVyLmxvYWQoZGVtb1VyaSk7XG59XG5cbmNvbnN0IGlzRGVidWdnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1kZWJ1Z11gKTtcbmlmIChpc0RlYnVnZ2VyICYmIGlzRGVidWdnZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWRlYnVnJykgPT09ICd0cnVlJykge1xuXHRjb25zdCBteURlYnVnZ2VyID0gbmV3IERlYnVnZ2VyKGlzRGVidWdnZXIpO1xufVxuIiwidmFyIG1hcCA9IHtcblx0XCIuL3RlZC9zbGlkZS0wMS10aXRsZS5tZFwiOiBcIi4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDEtdGl0bGUubWRcIixcblx0XCIuL3RlZC9zbGlkZS0wMi1iYWNrZ3JvdW5kLm1kXCI6IFwiLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wMi1iYWNrZ3JvdW5kLm1kXCIsXG5cdFwiLi90ZWQvc2xpZGUtMDMtdGhlbWUubWRcIjogXCIuL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTAzLXRoZW1lLm1kXCIsXG5cdFwiLi90ZWQvc2xpZGUtMDQtY29weS5tZFwiOiBcIi4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDQtY29weS5tZFwiLFxuXHRcIi4vdGVkL3NsaWRlLTA1LWltYWdlLm1kXCI6IFwiLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wNS1pbWFnZS5tZFwiLFxuXHRcIi4vdGVkL3NsaWRlLTA2LWNvbHVtbnMubWRcIjogXCIuL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA2LWNvbHVtbnMubWRcIixcblx0XCIuL3RlZC9zbGlkZS0wNy12aWRlby1sb2NhbC5tZFwiOiBcIi4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDctdmlkZW8tbG9jYWwubWRcIixcblx0XCIuL3RlZC9zbGlkZS0wNy12aWRlby12aW1lby5tZFwiOiBcIi4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDctdmlkZW8tdmltZW8ubWRcIixcblx0XCIuL3RlZC9zbGlkZS0wNy12aWRlby15b3V0dWJlLm1kXCI6IFwiLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wNy12aWRlby15b3V0dWJlLm1kXCIsXG5cdFwiLi90ZWQvc2xpZGUtMDgtM2QubWRcIjogXCIuL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA4LTNkLm1kXCIsXG5cdFwiLi90ZWQvc2xpZGUtMDktdGhhbmtzLm1kXCI6IFwiLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wOS10aGFua3MubWRcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvc2xpZGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGgxIGlkPVxcXCJ0aXRsZS1zbGlkZVxcXCI+VGl0bGUgU2xpZGU8L2gxPlxcbjxwPkJ5IFRlZDwvcD5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGRhdGEtYmFja2dyb3VuZD1cXFwiL2ltZy9hZHJpYW4taW5mZXJudXMtR0xmN2JBd0NkWWctdW5zcGxhc2guanBnXFxcIj48L2Rpdj5cXG5cXG48aDEgaWQ9XFxcInNsaWRlLTJcXFwiPlNsaWRlIDI8L2gxPlxcbjxwPkltYWdlIHN1cHBvcnQ8L3A+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBkYXRhLWJhY2tncm91bmQ9XFxcIi9pbWcvYWRyaWFuLWluZmVybnVzLUdMZjdiQXdDZFlnLXVuc3BsYXNoLmpwZ1xcXCI+PC9kaXY+XFxuPGRpdiBkYXRhLXRoZW1lPVxcXCJkYXJrXFxcIj5cXG48aDE+U2xpZGUgMzwvaDE+XFxuPHA+VGhlbWUgU3VwcG9ydDwvcD5cXG48L2Rpdj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGRhdGEtYWxpZ249XFxcImxlZnRcXFwiPlxcbjxwPlxcbkNhdCBpcHN1bSBkb2xvciBzaXQgYW1ldC4gRGVtYW5kIHRvIGJlIGxldCBvdXRzaWRlIGF0IG9uY2UuIEVhdCBhbGwgdGhlIHBvd2VyIGNvcmRzLiBQcmVzZW50IGJlbGx5LlxcbjwvcD5cXG48cD5cXG5QdXJyIGZvciBubyByZWFzb24uIFBvdW5jZSBvbiB1bnN1c3BlY3RpbmcgcGVyc29uLlxcbjwvcD5cXG48L2Rpdj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8cD48aW1nIHNyYz1cXFwiLy9wbGFjZWtpdHRlbi5jb20vNjAwLzYwMFxcXCIgYWx0PVxcXCJDdXRlIEtpdHRlblxcXCI+PC9wPlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgZGF0YS1iYWNrZ3JvdW5kPVxcXCIvaW1nL2Fkcmlhbi1pbmZlcm51cy1HTGY3YkF3Q2RZZy11bnNwbGFzaC5qcGdcXFwiPjwvZGl2PlxcbjxkaXYgY2xhc3M9XFxcImdyaWQteCBncmlkLXBhZGRpbmcteFxcXCI+XFxuICA8ZGl2IGNsYXNzPVxcXCJjZWxsIG1lZGl1bS02XFxcIj5cXG4gICAgPGltZyBjbGFzcz1cXFwiY29udGFpblxcXCIgc3JjPVxcXCIvL3BsYWNla2l0dGVuLmNvbS82MDAvNjAwXFxcIiBhbHQ9XFxcIkEgY3V0ZSBraXR0ZW5cXFwiIC8+XFxuICA8L2Rpdj5cXG4gIDxkaXYgY2xhc3M9XFxcImNlbGwgbWVkaXVtLTYgYWxpZ24tc2VsZi1taWRkbGUgdGV4dC1sZWZ0XFxcIj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2hvdy1mb3ItbmVhclxcXCI+XFxuICAgICAgPHA+Q2F0IGlwc3VtIGRvbG9yIHNpdCBhbWV0LiBEZW1hbmQgdG8gYmUgbGV0IG91dHNpZGUgYXQgb25jZSwgYW5kIGV4cGVjdCBvd25lciB0byB3YWl0IGZvciBtZSBhcyBpIHRoaW5rIGFib3V0IGl0LjwvcD5cXG4gICAgICA8L2Rpdj5cXG4gICAgPGRpdiBjbGFzcz1cXFwic2hvdy1mb3ItZmFyXFxcIj5cXG4gICAgICA8cD5DYXQgaXBzdW0gZG9sb3Igc2l0IGFtZXQuPC9wPlxcbiAgICA8L2Rpdj5cXG4gIDwvZGl2PlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInJlc3BvbnNpdmUtZW1iZWRcXFwiIGRhdGEtYmFja2dyb3VuZC1jb2xvcj1cXFwiIzAwMDAwMFxcXCIgZGF0YS10eXBlPVxcXCJ2aWRlb1xcXCIgPlxcbjx2aWRlbyBjb250cm9scyBhdXRvcGxheSBtdXRlZD5cXG4gIDxzb3VyY2Ugc3JjPVxcXCIvbW92L3RvdGVtLWJ5LWx1Y2FzdHN3aWNrLm1wNFxcXCIgdHlwZT1cXFwidmlkZW8vbXA0XFxcIj5cXG48L3ZpZGVvPlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInJlc3BvbnNpdmUtZW1iZWRcXFwiIGRhdGEtYmFja2dyb3VuZC1jb2xvcj1cXFwiIzAwMDAwMFxcXCIgZGF0YS10eXBlPVxcXCJ2aWRlb1xcXCI+XFxuICA8aWZyYW1lIHNyYz1cXFwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLzc2OTc5ODcxP2F1dG9wbGF5PTFcXFwiIHdpZHRoPVxcXCI2NDBcXFwiIGhlaWdodD1cXFwiMzY4XFxcIiBmcmFtZWJvcmRlcj1cXFwiMFxcXCIgYWxsb3c9XFxcImF1dG9wbGF5OyBmdWxsc2NyZWVuXFxcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwicmVzcG9uc2l2ZS1lbWJlZFxcXCIgZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVxcXCIjMDAwMDAwXFxcIiBkYXRhLXR5cGU9XFxcInZpZGVvXFxcIiA+XFxuICA8aWZyYW1lIGlkPVxcXCJ5dHBsYXllclxcXCIgd2lkdGg9XFxcIjU2MFxcXCIgaGVpZ2h0PVxcXCIzMTVcXFwiIHNyYz1cXFwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvYWZDVVBxQ3pPSHc/YXV0b3BsYXk9MSZlbmFibGVqc2FwaT0xXFxcIiBmcmFtZWJvcmRlcj1cXFwiMFxcXCIgYWxsb3c9XFxcImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmVcXFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cXG48L2Rpdj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJyZXNwb25zaXZlLWVtYmVkXFxcIiBkYXRhLWJhY2tncm91bmQtY29sb3I9XFxcIiMwMDAwMDBcXFwiIGRhdGEtdHlwZT1cXFwidmlkZW9cXFwiPlxcblxcbjxkaXYgY2xhc3M9XFxcInNrZXRjaGZhYi1lbWJlZC13cmFwcGVyXFxcIj5cXG4gIDxpZnJhbWUgdGl0bGU9XFxcIkEgM0QgbW9kZWxcXFwiIHdpZHRoPVxcXCI2NDBcXFwiIGhlaWdodD1cXFwiNDgwXFxcIiBzcmM9XFxcImh0dHBzOi8vc2tldGNoZmFiLmNvbS9tb2RlbHMvZWVkZThjMTM5NGRjNDEzMmFmMmYwMmYwNmQ0OTdmYTgvZW1iZWQ/YXV0b3N0YXJ0PTEmYW1wO3VpX2NvbnRyb2xzPTEmYW1wO3VpX2luZm9zPTEmYW1wO3VpX2luc3BlY3Rvcj0xJmFtcDt1aV9zdG9wPTEmYW1wO3VpX3dhdGVybWFyaz0xJmFtcDt1aV93YXRlcm1hcmtfbGluaz0xXFxcIiBmcmFtZWJvcmRlcj1cXFwiMFxcXCIgYWxsb3c9XFxcImF1dG9wbGF5OyBmdWxsc2NyZWVuOyB2clxcXCIgbW96YWxsb3dmdWxsc2NyZWVuPVxcXCJ0cnVlXFxcIiB3ZWJraXRhbGxvd2Z1bGxzY3JlZW49XFxcInRydWVcXFwiPjwvaWZyYW1lPlxcbiAgPHAgc3R5bGU9XFxcImZvbnQtc2l6ZTogMTNweDsgZm9udC13ZWlnaHQ6IG5vcm1hbDsgbWFyZ2luOiA1cHg7IGNvbG9yOiAjNEE0QTRBO1xcXCI+XFxuICAgICAgPGEgaHJlZj1cXFwiaHR0cHM6Ly9za2V0Y2hmYWIuY29tLzNkLW1vZGVscy9uaW50ZW5kby1nYW1lYm95LTE5ODktZWVkZThjMTM5NGRjNDEzMmFmMmYwMmYwNmQ0OTdmYTg/dXRtX21lZGl1bT1lbWJlZCZ1dG1fc291cmNlPXdlYnNpdGUmdXRtX2NhbXBhaWduPXNoYXJlLXBvcHVwXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzFDQUFEOTtcXFwiPk5pbnRlbmRvIEdhbWVib3kgMTk4OTwvYT5cXG4gICAgICBieSA8YSBocmVmPVxcXCJodHRwczovL3NrZXRjaGZhYi5jb20vc2hyZWRuZWN0b3I/dXRtX21lZGl1bT1lbWJlZCZ1dG1fc291cmNlPXdlYnNpdGUmdXRtX2NhbXBhaWduPXNoYXJlLXBvcHVwXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCIgc3R5bGU9XFxcImZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogIzFDQUFEOTtcXFwiPnNocmVkbmVjdG9yPC9hPlxcbiAgICAgIG9uIDxhIGhyZWY9XFxcImh0dHBzOi8vc2tldGNoZmFiLmNvbT91dG1fbWVkaXVtPWVtYmVkJnV0bV9zb3VyY2U9d2Vic2l0ZSZ1dG1fY2FtcGFpZ249c2hhcmUtcG9wdXBcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjMUNBQUQ5O1xcXCI+U2tldGNoZmFiPC9hPlxcbiAgPC9wPlxcbjwvZGl2PlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxwPjxzcGFuIGRhdGEtdGhlbWU9XFxcImRhcmtcXFwiPlxcbjxoMT5UaGFuayB5b3UhPC9oMT5cXG48aDI+WW91ciBmcmllbmQsIFRlZDwvaDI+XFxuPC9zcGFuPjwvcD5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiXSwic291cmNlUm9vdCI6IiJ9