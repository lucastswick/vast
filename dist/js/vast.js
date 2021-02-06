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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL05hdmlnby9saWIvbmF2aWdvLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXV0b3BsYXkuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9kZWJ1Z2dlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdmlnYXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Zhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDEtdGl0bGUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDItYmFja2dyb3VuZC5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wMy10aGVtZS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wNC1jb3B5Lm1kIiwid2VicGFjazovLy8uL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA1LWltYWdlLm1kIiwid2VicGFjazovLy8uL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA2LWNvbHVtbnMubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDctdmlkZW8tbG9jYWwubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDctdmlkZW8tdmltZW8ubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDctdmlkZW8teW91dHViZS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wOC0zZC5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wOS10aGFua3MubWQiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiZXZlbnRzIiwiZXZlbnROYW1lIiwiU2V0IiwiZm4iLCJfZ2V0RXZlbnRMaXN0QnlOYW1lIiwiYWRkIiwic2VsZiIsIm9uY2VGbiIsInJlbW92ZUxpc3RlbmVyIiwiYXJncyIsImFwcGx5Iiwib24iLCJmb3JFYWNoIiwiYmluZCIsIlJvdXRlciIsInN0YXRlIiwicmVhZHkiLCJyb3V0ZXIiLCJOYXZpZ28iLCJldmVudEVtaXR0ZXIiLCJqc29uIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibG9hZFNsaWRlIiwicmVzb2x2ZSIsIm5vdEZvdW5kIiwiY29uc29sZSIsImxvZyIsIm9uUmVhZHkiLCJjYWxsYmFjayIsImVyciIsIndhcm4iLCJoYXNoIiwid2luZG93IiwibG9jYXRpb24iLCJzbGlkZUluZGV4IiwicGFyc2VJbnQiLCJzcGxpdCIsInNsaWRlTW9kZWwiLCJzbGlkZXMiLCJpbmRleCIsImdldFNsaWRlTW9kZWwiLCJodG1sIiwicmVxdWlyZSIsImxvYyIsInByZXNlbnRhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnRlbnRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJiYWNrZ3JvdW5kQ29sb3JMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsInN0eWxlIiwicmVtb3ZlUHJvcGVydHkiLCJpIiwibGVuZ3RoIiwiY29sb3IiLCJnZXRBdHRyaWJ1dGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kTGlzdCIsInVybCIsImJhY2tncm91bmRJbWFnZSIsImFsaWdubWVudExpc3QiLCJhbGlnbm1lbnQiLCJ0ZXh0QWxpZ24iLCJjb2x1bW5hckxpc3QiLCJjb2x1bW4iLCJwYXJlbnROb2RlIiwiYm9yZGVyIiwicGF0aCIsIm5hdmlnYXRlIiwic2V0VGltZW91dCIsImVtaXQiLCJ0b3RhbCIsImN1cnJlbnRJbmRleCIsImlzRGVtbyIsInF1ZXJ5U2VsZWN0b3IiLCJuYXYiLCJOYXZpZ2F0aW9uIiwidmlzaWJsZSIsImF1dG9wbGF5Q29udHJvbHMiLCJBdXRvcGxheUNvbnRyb2xzIiwiZGVtb1VyaSIsImxvYWQiLCJpc0RlYnVnZ2VyIiwibXlEZWJ1Z2dlciIsIkRlYnVnZ2VyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsZUFBZSxLQUFvRCxvQkFBb0IsU0FBNEQsQ0FBQyxpQkFBaUIsYUFBYSw4RUFBOEUsZ0JBQWdCLGFBQWEscUdBQXFHLGFBQWEsZ0ZBQWdGLGtCQUFrQiw0Z0JBQTRnQixjQUFjLHVFQUF1RSxjQUFjLDZDQUE2QyxnQkFBZ0IsaUJBQWlCLGdCQUFnQixtQkFBbUIsa0ZBQWtGLGtCQUFrQixTQUFTLE9BQU8scUZBQXFGLDJDQUEyQywrR0FBK0csd0ZBQXdGLHNFQUFzRSxzQkFBc0Isa0NBQWtDLFlBQVksTUFBTSxZQUFZLDBCQUEwQixxQkFBcUIsU0FBUyxFQUFFLGFBQWEsZ0JBQWdCLHdC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RCxFQUFvRTtBQUNuRSxNQUFNNEIsVUFBVSxHQUFHLElBQUlDLHNEQUFKLENBQWFGLFVBQWIsQ0FBbkI7QUFDQSxDOzs7Ozs7Ozs7OztBQ3RCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEOzs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBLHlPQUF5TztBQUN6TztBQUNBLHNCOzs7Ozs7Ozs7OztBQ0hBO0FBQ0EsK1FBQStRLFVBQVUsaUJBQWlCLGlCQUFpQixXQUFXO0FBQ3RVO0FBQ0Esc0I7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSxxU0FBcVMsa0JBQWtCLGVBQWUsbUJBQW1CLGNBQWMsbUJBQW1CLHlEQUF5RCxZQUFZLHlHQUF5RyxxQkFBcUIsYUFBYSxnQkFBZ0IsdU5BQXVOLGdCQUFnQiw4TEFBOEwsZ0JBQWdCLHdLQUF3SyxnQkFBZ0I7QUFDdnNDO0FBQ0Esc0I7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0Esc0IiLCJmaWxlIjoidmFzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pzL3Zhc3QuanNcIik7XG4iLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZSh0KTplLk5hdmlnbz10KCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfTtmdW5jdGlvbiB0KCl7cmV0dXJuIShcInVuZGVmaW5lZFwiPT10eXBlb2Ygd2luZG93fHwhd2luZG93Lmhpc3Rvcnl8fCF3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUpfWZ1bmN0aW9uIG4oZSxuLG8pe3RoaXMucm9vdD1udWxsLHRoaXMuX3JvdXRlcz1bXSx0aGlzLl91c2VIYXNoPW4sdGhpcy5faGFzaD12b2lkIDA9PT1vP1wiI1wiOm8sdGhpcy5fcGF1c2VkPSExLHRoaXMuX2Rlc3Ryb3llZD0hMSx0aGlzLl9sYXN0Um91dGVSZXNvbHZlZD1udWxsLHRoaXMuX25vdEZvdW5kSGFuZGxlcj1udWxsLHRoaXMuX2RlZmF1bHRIYW5kbGVyPW51bGwsdGhpcy5fdXNlUHVzaFN0YXRlPSFuJiZ0KCksdGhpcy5fb25Mb2NhdGlvbkNoYW5nZT10aGlzLl9vbkxvY2F0aW9uQ2hhbmdlLmJpbmQodGhpcyksdGhpcy5fZ2VuZXJpY0hvb2tzPW51bGwsdGhpcy5faGlzdG9yeUFQSVVwZGF0ZU1ldGhvZD1cInB1c2hTdGF0ZVwiLGU/dGhpcy5yb290PW4/ZS5yZXBsYWNlKC9cXC8kLyxcIi9cIit0aGlzLl9oYXNoKTplLnJlcGxhY2UoL1xcLyQvLFwiXCIpOm4mJih0aGlzLnJvb3Q9dGhpcy5fY0xvYygpLnNwbGl0KHRoaXMuX2hhc2gpWzBdLnJlcGxhY2UoL1xcLyQvLFwiL1wiK3RoaXMuX2hhc2gpKSx0aGlzLl9saXN0ZW4oKSx0aGlzLnVwZGF0ZVBhZ2VMaW5rcygpfWZ1bmN0aW9uIG8oZSl7cmV0dXJuIGUgaW5zdGFuY2VvZiBSZWdFeHA/ZTplLnJlcGxhY2UoL1xcLyskLyxcIlwiKS5yZXBsYWNlKC9eXFwvKy8sXCJeL1wiKX1mdW5jdGlvbiBpKGUpe3JldHVybiBlLnJlcGxhY2UoL1xcLyQvLFwiXCIpLnNwbGl0KFwiL1wiKS5sZW5ndGh9ZnVuY3Rpb24gcyhlLHQpe3JldHVybiBpKHQpLWkoZSl9ZnVuY3Rpb24gcihlLHQpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4oYXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOltdKS5tYXAoZnVuY3Rpb24odCl7dmFyIGk9ZnVuY3Rpb24oZSl7dmFyIHQ9W107cmV0dXJue3JlZ2V4cDplIGluc3RhbmNlb2YgUmVnRXhwP2U6bmV3IFJlZ0V4cChlLnJlcGxhY2Uobi5QQVJBTUVURVJfUkVHRVhQLGZ1bmN0aW9uKGUsbyxpKXtyZXR1cm4gdC5wdXNoKGkpLG4uUkVQTEFDRV9WQVJJQUJMRV9SRUdFWFB9KS5yZXBsYWNlKG4uV0lMRENBUkRfUkVHRVhQLG4uUkVQTEFDRV9XSUxEQ0FSRCkrbi5GT0xMT1dFRF9CWV9TTEFTSF9SRUdFWFAsbi5NQVRDSF9SRUdFWFBfRkxBR1MpLHBhcmFtTmFtZXM6dH19KG8odC5yb3V0ZSkpLHM9aS5yZWdleHAscj1pLnBhcmFtTmFtZXMsYT1lLnJlcGxhY2UoL15cXC8rLyxcIi9cIikubWF0Y2gocyksaD1mdW5jdGlvbihlLHQpe3JldHVybiAwPT09dC5sZW5ndGg/bnVsbDplP2Uuc2xpY2UoMSxlLmxlbmd0aCkucmVkdWNlKGZ1bmN0aW9uKGUsbixvKXtyZXR1cm4gbnVsbD09PWUmJihlPXt9KSxlW3Rbb11dPWRlY29kZVVSSUNvbXBvbmVudChuKSxlfSxudWxsKTpudWxsfShhLHIpO3JldHVybiEhYSYme21hdGNoOmEscm91dGU6dCxwYXJhbXM6aH19KS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGV9KX0oZSx0KVswXXx8ITF9ZnVuY3Rpb24gYShlLHQpe3ZhciBuPXQubWFwKGZ1bmN0aW9uKHQpe3JldHVyblwiXCI9PT10LnJvdXRlfHxcIipcIj09PXQucm91dGU/ZTplLnNwbGl0KG5ldyBSZWdFeHAodC5yb3V0ZStcIigkfC8pXCIpKVswXX0pLGk9byhlKTtyZXR1cm4gbi5sZW5ndGg+MT9uLnJlZHVjZShmdW5jdGlvbihlLHQpe3JldHVybiBlLmxlbmd0aD50Lmxlbmd0aCYmKGU9dCksZX0sblswXSk6MT09PW4ubGVuZ3RoP25bMF06aX1mdW5jdGlvbiBoKGUsbixvKXt2YXIgaSxzPWZ1bmN0aW9uKGUpe3JldHVybiBlLnNwbGl0KC9cXD8oLiopPyQvKVswXX07cmV0dXJuIHZvaWQgMD09PW8mJihvPVwiI1wiKSx0KCkmJiFuP3MoZSkuc3BsaXQobylbMF06KGk9ZS5zcGxpdChvKSkubGVuZ3RoPjE/cyhpWzFdKTpzKGlbMF0pfWZ1bmN0aW9uIHUodCxuLG8pe2lmKG4mJlwib2JqZWN0XCI9PT0odm9pZCAwPT09bj9cInVuZGVmaW5lZFwiOmUobikpKXtpZihuLmJlZm9yZSlyZXR1cm4gdm9pZCBuLmJlZm9yZShmdW5jdGlvbigpeyghKGFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdKXx8YXJndW1lbnRzWzBdKSYmKHQoKSxuLmFmdGVyJiZuLmFmdGVyKG8pKX0sbyk7aWYobi5hZnRlcilyZXR1cm4gdCgpLHZvaWQobi5hZnRlciYmbi5hZnRlcihvKSl9dCgpfXJldHVybiBuLnByb3RvdHlwZT17aGVscGVyczp7bWF0Y2g6cixyb290OmEsY2xlYW46byxnZXRPbmx5VVJMOmh9LG5hdmlnYXRlOmZ1bmN0aW9uKGUsdCl7dmFyIG47cmV0dXJuIGU9ZXx8XCJcIix0aGlzLl91c2VQdXNoU3RhdGU/KG49KG49KHQ/XCJcIjp0aGlzLl9nZXRSb290KCkrXCIvXCIpK2UucmVwbGFjZSgvXlxcLysvLFwiL1wiKSkucmVwbGFjZSgvKFteOl0pKFxcL3syLH0pL2csXCIkMS9cIiksaGlzdG9yeVt0aGlzLl9oaXN0b3J5QVBJVXBkYXRlTWV0aG9kXSh7fSxcIlwiLG4pLHRoaXMucmVzb2x2ZSgpKTpcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYoZT1lLnJlcGxhY2UobmV3IFJlZ0V4cChcIl5cIit0aGlzLl9oYXNoKSxcIlwiKSx3aW5kb3cubG9jYXRpb24uaHJlZj13aW5kb3cubG9jYXRpb24uaHJlZi5yZXBsYWNlKC8jJC8sXCJcIikucmVwbGFjZShuZXcgUmVnRXhwKHRoaXMuX2hhc2grXCIuKiRcIiksXCJcIikrdGhpcy5faGFzaCtlKSx0aGlzfSxvbjpmdW5jdGlvbigpe2Zvcih2YXIgdD10aGlzLG49YXJndW1lbnRzLmxlbmd0aCxvPUFycmF5KG4pLGk9MDtpPG47aSsrKW9baV09YXJndW1lbnRzW2ldO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG9bMF0pdGhpcy5fZGVmYXVsdEhhbmRsZXI9e2hhbmRsZXI6b1swXSxob29rczpvWzFdfTtlbHNlIGlmKG8ubGVuZ3RoPj0yKWlmKFwiL1wiPT09b1swXSl7dmFyIHI9b1sxXTtcIm9iamVjdFwiPT09ZShvWzFdKSYmKHI9b1sxXS51c2VzKSx0aGlzLl9kZWZhdWx0SGFuZGxlcj17aGFuZGxlcjpyLGhvb2tzOm9bMl19fWVsc2UgdGhpcy5fYWRkKG9bMF0sb1sxXSxvWzJdKTtlbHNlXCJvYmplY3RcIj09PWUob1swXSkmJk9iamVjdC5rZXlzKG9bMF0pLnNvcnQocykuZm9yRWFjaChmdW5jdGlvbihlKXt0Lm9uKGUsb1swXVtlXSl9KTtyZXR1cm4gdGhpc30sb2ZmOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsIT09dGhpcy5fZGVmYXVsdEhhbmRsZXImJmU9PT10aGlzLl9kZWZhdWx0SGFuZGxlci5oYW5kbGVyP3RoaXMuX2RlZmF1bHRIYW5kbGVyPW51bGw6bnVsbCE9PXRoaXMuX25vdEZvdW5kSGFuZGxlciYmZT09PXRoaXMuX25vdEZvdW5kSGFuZGxlci5oYW5kbGVyJiYodGhpcy5fbm90Rm91bmRIYW5kbGVyPW51bGwpLHRoaXMuX3JvdXRlcz10aGlzLl9yb3V0ZXMucmVkdWNlKGZ1bmN0aW9uKHQsbil7cmV0dXJuIG4uaGFuZGxlciE9PWUmJnQucHVzaChuKSx0fSxbXSksdGhpc30sbm90Rm91bmQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gdGhpcy5fbm90Rm91bmRIYW5kbGVyPXtoYW5kbGVyOmUsaG9va3M6dH0sdGhpc30scmVzb2x2ZTpmdW5jdGlvbihlKXt2YXIgbixvLGk9dGhpcyxzPShlfHx0aGlzLl9jTG9jKCkpLnJlcGxhY2UodGhpcy5fZ2V0Um9vdCgpLFwiXCIpO3RoaXMuX3VzZUhhc2gmJihzPXMucmVwbGFjZShuZXcgUmVnRXhwKFwiXi9cIit0aGlzLl9oYXNoKSxcIi9cIikpO3ZhciBhPWZ1bmN0aW9uKGUpe3JldHVybiBlLnNwbGl0KC9cXD8oLiopPyQvKS5zbGljZSgxKS5qb2luKFwiXCIpfShlfHx0aGlzLl9jTG9jKCkpLGw9aChzLHRoaXMuX3VzZUhhc2gsdGhpcy5faGFzaCk7cmV0dXJuIXRoaXMuX3BhdXNlZCYmKHRoaXMuX2xhc3RSb3V0ZVJlc29sdmVkJiZsPT09dGhpcy5fbGFzdFJvdXRlUmVzb2x2ZWQudXJsJiZhPT09dGhpcy5fbGFzdFJvdXRlUmVzb2x2ZWQucXVlcnk/KHRoaXMuX2xhc3RSb3V0ZVJlc29sdmVkLmhvb2tzJiZ0aGlzLl9sYXN0Um91dGVSZXNvbHZlZC5ob29rcy5hbHJlYWR5JiZ0aGlzLl9sYXN0Um91dGVSZXNvbHZlZC5ob29rcy5hbHJlYWR5KHRoaXMuX2xhc3RSb3V0ZVJlc29sdmVkLnBhcmFtcyksITEpOihvPXIobCx0aGlzLl9yb3V0ZXMpKT8odGhpcy5fY2FsbExlYXZlKCksdGhpcy5fbGFzdFJvdXRlUmVzb2x2ZWQ9e3VybDpsLHF1ZXJ5OmEsaG9va3M6by5yb3V0ZS5ob29rcyxwYXJhbXM6by5wYXJhbXMsbmFtZTpvLnJvdXRlLm5hbWV9LG49by5yb3V0ZS5oYW5kbGVyLHUoZnVuY3Rpb24oKXt1KGZ1bmN0aW9uKCl7by5yb3V0ZS5yb3V0ZSBpbnN0YW5jZW9mIFJlZ0V4cD9uLmFwcGx5KHZvaWQgMCxvLm1hdGNoLnNsaWNlKDEsby5tYXRjaC5sZW5ndGgpKTpuKG8ucGFyYW1zLGEpfSxvLnJvdXRlLmhvb2tzLG8ucGFyYW1zLGkuX2dlbmVyaWNIb29rcyl9LHRoaXMuX2dlbmVyaWNIb29rcyxvLnBhcmFtcyksbyk6dGhpcy5fZGVmYXVsdEhhbmRsZXImJihcIlwiPT09bHx8XCIvXCI9PT1sfHxsPT09dGhpcy5faGFzaHx8ZnVuY3Rpb24oZSxuLG8pe2lmKHQoKSYmIW4pcmV0dXJuITE7aWYoIWUubWF0Y2gobykpcmV0dXJuITE7dmFyIGk9ZS5zcGxpdChvKTtyZXR1cm4gaS5sZW5ndGg8Mnx8XCJcIj09PWlbMV19KGwsdGhpcy5fdXNlSGFzaCx0aGlzLl9oYXNoKSk/KHUoZnVuY3Rpb24oKXt1KGZ1bmN0aW9uKCl7aS5fY2FsbExlYXZlKCksaS5fbGFzdFJvdXRlUmVzb2x2ZWQ9e3VybDpsLHF1ZXJ5OmEsaG9va3M6aS5fZGVmYXVsdEhhbmRsZXIuaG9va3N9LGkuX2RlZmF1bHRIYW5kbGVyLmhhbmRsZXIoYSl9LGkuX2RlZmF1bHRIYW5kbGVyLmhvb2tzKX0sdGhpcy5fZ2VuZXJpY0hvb2tzKSwhMCk6KHRoaXMuX25vdEZvdW5kSGFuZGxlciYmdShmdW5jdGlvbigpe3UoZnVuY3Rpb24oKXtpLl9jYWxsTGVhdmUoKSxpLl9sYXN0Um91dGVSZXNvbHZlZD17dXJsOmwscXVlcnk6YSxob29rczppLl9ub3RGb3VuZEhhbmRsZXIuaG9va3N9LGkuX25vdEZvdW5kSGFuZGxlci5oYW5kbGVyKGEpfSxpLl9ub3RGb3VuZEhhbmRsZXIuaG9va3MpfSx0aGlzLl9nZW5lcmljSG9va3MpLCExKSl9LGRlc3Ryb3k6ZnVuY3Rpb24oKXt0aGlzLl9yb3V0ZXM9W10sdGhpcy5fZGVzdHJveWVkPSEwLHRoaXMuX2xhc3RSb3V0ZVJlc29sdmVkPW51bGwsdGhpcy5fZ2VuZXJpY0hvb2tzPW51bGwsY2xlYXJUaW1lb3V0KHRoaXMuX2xpc3RlbmluZ0ludGVydmFsKSxcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiYod2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJwb3BzdGF0ZVwiLHRoaXMuX29uTG9jYXRpb25DaGFuZ2UpLHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLHRoaXMuX29uTG9jYXRpb25DaGFuZ2UpKX0sdXBkYXRlUGFnZUxpbmtzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztcInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQmJnRoaXMuX2ZpbmRMaW5rcygpLmZvckVhY2goZnVuY3Rpb24odCl7dC5oYXNMaXN0ZW5lckF0dGFjaGVkfHwodC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbihuKXtpZigobi5jdHJsS2V5fHxuLm1ldGFLZXkpJiZcImFcIj09bi50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpKXJldHVybiExO3ZhciBvPWUuZ2V0TGlua1BhdGgodCk7ZS5fZGVzdHJveWVkfHwobi5wcmV2ZW50RGVmYXVsdCgpLGUubmF2aWdhdGUoby5yZXBsYWNlKC9cXC8rJC8sXCJcIikucmVwbGFjZSgvXlxcLysvLFwiL1wiKSkpfSksdC5oYXNMaXN0ZW5lckF0dGFjaGVkPSEwKX0pfSxnZW5lcmF0ZTpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30sbj10aGlzLl9yb3V0ZXMucmVkdWNlKGZ1bmN0aW9uKG4sbyl7dmFyIGk7aWYoby5uYW1lPT09ZSlmb3IoaSBpbiBuPW8ucm91dGUsdCluPW4udG9TdHJpbmcoKS5yZXBsYWNlKFwiOlwiK2ksdFtpXSk7cmV0dXJuIG59LFwiXCIpO3JldHVybiB0aGlzLl91c2VIYXNoP3RoaXMuX2hhc2grbjpufSxsaW5rOmZ1bmN0aW9uKGUpe3JldHVybiB0aGlzLl9nZXRSb290KCkrZX0scGF1c2U6ZnVuY3Rpb24oKXt2YXIgZT0hKGFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdKXx8YXJndW1lbnRzWzBdO3RoaXMuX3BhdXNlZD1lLHRoaXMuX2hpc3RvcnlBUElVcGRhdGVNZXRob2Q9ZT9cInJlcGxhY2VTdGF0ZVwiOlwicHVzaFN0YXRlXCJ9LHJlc3VtZTpmdW5jdGlvbigpe3RoaXMucGF1c2UoITEpfSxoaXN0b3J5QVBJVXBkYXRlTWV0aG9kOmZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDA9PT1lP3RoaXMuX2hpc3RvcnlBUElVcGRhdGVNZXRob2Q6KHRoaXMuX2hpc3RvcnlBUElVcGRhdGVNZXRob2Q9ZSxlKX0sZGlzYWJsZUlmQVBJTm90QXZhaWxhYmxlOmZ1bmN0aW9uKCl7dCgpfHx0aGlzLmRlc3Ryb3koKX0sbGFzdFJvdXRlUmVzb2x2ZWQ6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbGFzdFJvdXRlUmVzb2x2ZWR9LGdldExpbmtQYXRoOmZ1bmN0aW9uKGUpe3JldHVybiBlLmdldEF0dHJpYnV0ZShcImhyZWZcIil9LGhvb2tzOmZ1bmN0aW9uKGUpe3RoaXMuX2dlbmVyaWNIb29rcz1lfSxfYWRkOmZ1bmN0aW9uKHQpe3ZhciBuPWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTpudWxsLG89YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOm51bGw7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PWVuY29kZVVSSSh0KSksdGhpcy5fcm91dGVzLnB1c2goXCJvYmplY3RcIj09PSh2b2lkIDA9PT1uP1widW5kZWZpbmVkXCI6ZShuKSk/e3JvdXRlOnQsaGFuZGxlcjpuLnVzZXMsbmFtZTpuLmFzLGhvb2tzOm98fG4uaG9va3N9Ontyb3V0ZTp0LGhhbmRsZXI6bixob29rczpvfSksdGhpcy5fYWRkfSxfZ2V0Um9vdDpmdW5jdGlvbigpe3JldHVybiBudWxsIT09dGhpcy5yb290P3RoaXMucm9vdDoodGhpcy5yb290PWEodGhpcy5fY0xvYygpLnNwbGl0KFwiP1wiKVswXSx0aGlzLl9yb3V0ZXMpLHRoaXMucm9vdCl9LF9saXN0ZW46ZnVuY3Rpb24oKXt2YXIgZT10aGlzO2lmKHRoaXMuX3VzZVB1c2hTdGF0ZSl3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsdGhpcy5fb25Mb2NhdGlvbkNoYW5nZSk7ZWxzZSBpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZcIm9uaGFzaGNoYW5nZVwiaW4gd2luZG93KXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiaGFzaGNoYW5nZVwiLHRoaXMuX29uTG9jYXRpb25DaGFuZ2UpO2Vsc2V7dmFyIHQ9dGhpcy5fY0xvYygpLG49dm9pZCAwLG89dm9pZCAwOyhvPWZ1bmN0aW9uKCl7bj1lLl9jTG9jKCksdCE9PW4mJih0PW4sZS5yZXNvbHZlKCkpLGUuX2xpc3RlbmluZ0ludGVydmFsPXNldFRpbWVvdXQobywyMDApfSkoKX19LF9jTG9jOmZ1bmN0aW9uKCl7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz92b2lkIDAhPT13aW5kb3cuX19OQVZJR09fV0lORE9XX0xPQ0FUSU9OX01PQ0tfXz93aW5kb3cuX19OQVZJR09fV0lORE9XX0xPQ0FUSU9OX01PQ0tfXzpvKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTpcIlwifSxfZmluZExpbmtzOmZ1bmN0aW9uKCl7cmV0dXJuW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtbmF2aWdvXVwiKSl9LF9vbkxvY2F0aW9uQ2hhbmdlOmZ1bmN0aW9uKCl7dGhpcy5yZXNvbHZlKCl9LF9jYWxsTGVhdmU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLl9sYXN0Um91dGVSZXNvbHZlZDtlJiZlLmhvb2tzJiZlLmhvb2tzLmxlYXZlJiZlLmhvb2tzLmxlYXZlKGUucGFyYW1zKX19LG4uUEFSQU1FVEVSX1JFR0VYUD0vKFs6Kl0pKFxcdyspL2csbi5XSUxEQ0FSRF9SRUdFWFA9L1xcKi9nLG4uUkVQTEFDRV9WQVJJQUJMRV9SRUdFWFA9XCIoW14vXSspXCIsbi5SRVBMQUNFX1dJTERDQVJEPVwiKD86LiopXCIsbi5GT0xMT1dFRF9CWV9TTEFTSF9SRUdFWFA9XCIoPzovJHwkKVwiLG4uTUFUQ0hfUkVHRVhQX0ZMQUdTPVwiXCIsbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bmF2aWdvLm1pbi5qcy5tYXBcbiIsImNsYXNzIEF1dG9wbGF5IHtcblx0Y29uc3RydWN0b3IoeyByb3V0ZXIgfSA9IHt9KSB7XG5cdFx0dGhpcy5zdGF0ZSA9IHt9O1xuXG5cdFx0dGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG5cdFx0dGhpcy5yb3V0ZXIuYWRkRXZlbnRMaXN0ZW5lcignb25SZWFkeScsIChhcmdzKSA9PiB0aGlzLm9uUm91dGVyUmVhZHkoYXJncykpO1xuXHRcdHRoaXMucm91dGVyLmFkZEV2ZW50TGlzdGVuZXIoJ29uUm91dGVDaGFuZ2UnLCAoYXJncykgPT5cblx0XHRcdHRoaXMub25Sb3V0ZUNoYW5nZShhcmdzKVxuXHRcdCk7XG5cdH1cblxuXHRlbmFibGUoKSB7XG5cdFx0dGhpcy5zdGF0ZS5lbmFibGVkID0gdHJ1ZTtcblx0XHR0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcblx0fVxuXG5cdGRpc2FibGUoKSB7XG5cdFx0dGhpcy5zdGF0ZS5lbmFibGVkID0gZmFsc2U7XG5cdFx0dGhpcy5zdG9wQXV0b3BsYXkoKTtcblx0fVxuXG5cdHRvZ2dsZSgpIHtcblx0XHR0aGlzLnN0YXRlLmVuYWJsZWQgPyB0aGlzLmRpc2FibGUoKSA6IHRoaXMuZW5hYmxlKCk7XG5cdFx0aWYgKHRoaXMuc3RhdGUuZW5hYmxlZCkge1xuXHRcdFx0dGhpcy5hZHZhbmNlKCk7XG5cdFx0fVxuXHR9XG5cblx0b25LZXlEb3duKGUpIHtcblx0XHRzd2l0Y2ggKGUuY29kZSkge1xuXHRcdFx0Y2FzZSAnU3BhY2UnOlxuXHRcdFx0XHR0aGlzLnRvZ2dsZSgpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRvblJvdXRlclJlYWR5KHsgY3VycmVudEluZGV4LCB0b3RhbCwgZGF0YSwgc2xpZGVNb2RlbCB9KSB7XG5cdFx0Y29uc3QgaXNWaWRlbyA9IHRoaXMuZ2V0SXNWaWRlbygpO1xuXHRcdGNvbnN0IHNob3VsZEF1dG9wbGF5ID0gZGF0YSAmJiBkYXRhLmF1dG9wbGF5ICYmIGRhdGEuYXV0b3BsYXkuZW5hYmxlZDtcblx0XHRjb25zdCBhdXRvcGxheVRpbWVvdXQgPVxuXHRcdFx0KHNob3VsZEF1dG9wbGF5ICYmIGRhdGEgJiYgZGF0YS5hdXRvcGxheSAmJiBkYXRhLmF1dG9wbGF5LnRpbWVvdXQpIHx8IDU7XG5cdFx0Y29uc3QgbG9vcCA9IGRhdGEgJiYgZGF0YS5hdXRvcGxheSAmJiBkYXRhLmF1dG9wbGF5Lmxvb3A7XG5cdFx0Y29uc3Qga2lvc2sgPSBkYXRhICYmIGRhdGEuYXV0b3BsYXkgJiYgZGF0YS5hdXRvcGxheS5raW9zaztcblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHQuLi50aGlzLnN0YXRlLFxuXHRcdFx0ZGF0YSxcblx0XHRcdGN1cnJlbnRJbmRleCxcblx0XHRcdHRvdGFsLFxuXHRcdFx0bG9vcCxcblx0XHRcdGtpb3NrLFxuXHRcdFx0YXV0b3BsYXlUaW1lb3V0LFxuXHRcdFx0c2xpZGVNb2RlbCxcblx0XHR9O1xuXG5cdFx0aWYgKCFraW9zaykge1xuXHRcdFx0dGhpcy5vbktleURvd24gPSB0aGlzLm9uS2V5RG93bi5iaW5kKHRoaXMpO1xuXHRcdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG5cdFx0fVxuXG5cdFx0aWYgKHNob3VsZEF1dG9wbGF5KSB7XG5cdFx0XHRpZiAoIWlzVmlkZW8pIHtcblx0XHRcdFx0dGhpcy5lbmFibGUoKTtcblx0XHRcdFx0dGhpcy5zdGFydEF1dG9wbGF5KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0aGlzLnN0YXRlLmVuYWJsZWQgPSB0cnVlO1xuXHRcdFx0XHR0aGlzLmF1dG9wbGF5VmlkZW8oKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRzdGFydEF1dG9wbGF5KCkge1xuXHRcdGNvbnN0IHsgYXV0b3BsYXlUaW1lb3V0IH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IGlzVmlkZW8gPSB0aGlzLmdldElzVmlkZW8oKTtcblxuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvcGxheUlkKTtcblxuXHRcdGlmICghaXNWaWRlbykge1xuXHRcdFx0dGhpcy5hdXRvcGxheUlkID0gc2V0SW50ZXJ2YWwoXG5cdFx0XHRcdCgpID0+IHRoaXMuYWR2YW5jZSgpLFxuXHRcdFx0XHRhdXRvcGxheVRpbWVvdXQgKiAxMDAwXG5cdFx0XHQpO1xuXHRcdH1cblx0fVxuXG5cdGFkdmFuY2UoKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50SW5kZXgsIHRvdGFsLCBsb29wLCBzbGlkZU1vZGVsIH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IGlzVmlkZW8gPSBzbGlkZU1vZGVsICYmIHNsaWRlTW9kZWwudHlwZSA9PT0gJ3ZpZGVvJztcblxuXHRcdGlmIChpc1ZpZGVvKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgbmV4dEluZGV4ID1cblx0XHRcdGN1cnJlbnRJbmRleCArIDEgPCB0b3RhbCA/IGN1cnJlbnRJbmRleCArIDEgOiBsb29wID8gMCA6IGN1cnJlbnRJbmRleDtcblx0XHRpZiAoY3VycmVudEluZGV4ICE9PSBuZXh0SW5kZXgpIHtcblx0XHRcdHRoaXMuc2V0SW5kZXgobmV4dEluZGV4KTtcblx0XHR9XG5cdH1cblxuXHRzdG9wQXV0b3BsYXkoKSB7XG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9wbGF5SWQpO1xuXHR9XG5cblx0c2V0SW5kZXgoaW5kZXgpIHtcblx0XHR0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCA9IGluZGV4O1xuXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoYC9zbGlkZXMvc2xpZGUtJHtpbmRleCArIDF9YCk7XG5cdH1cblxuXHRnZXRJc1ZpZGVvKCkge1xuXHRcdGNvbnN0IGlzVmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10eXBlPVwidmlkZW9cIl0nKS5sZW5ndGg7XG5cblx0XHRyZXR1cm4gaXNWaWRlbztcblx0fVxuXG5cdG9uUm91dGVDaGFuZ2UoeyBzbGlkZU1vZGVsIH0pIHtcblx0XHR0aGlzLnN0YXRlID0ge1xuXHRcdFx0Li4udGhpcy5zdGF0ZSxcblx0XHRcdHNsaWRlTW9kZWwsXG5cdFx0XHRjdXJyZW50SW5kZXg6IHNsaWRlTW9kZWwuaW5kZXgsXG5cdFx0fTtcblxuXHRcdGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcblx0XHRjb25zdCBzaG91bGRBdXRvcGxheSA9IGRhdGEgJiYgZGF0YS5hdXRvcGxheSAmJiBkYXRhLmF1dG9wbGF5LmVuYWJsZWQ7XG5cdFx0aWYgKHNob3VsZEF1dG9wbGF5ICYmIHRoaXMuZ2V0SXNWaWRlbygpKSB7XG5cdFx0XHR0aGlzLmF1dG9wbGF5VmlkZW8oKTtcblx0XHR9XG5cdH1cblxuXHRhdXRvcGxheVZpZGVvKCkge1xuXHRcdGNvbnN0IHdhc0VuYWJsZWQgPSB0aGlzLnN0YXRlLmVuYWJsZWQ7XG5cdFx0dGhpcy5kaXNhYmxlKCk7XG5cblx0XHQvLyBsaXN0ZW4gdG8gdmlkZW8gZXZlbnRzXG5cdFx0Y29uc3QgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10eXBlPVwidmlkZW9cIl1gKTtcblxuXHRcdGlmICh2aWRlbykge1xuXHRcdFx0Y29uc3QgaWZyYW1lID0gdmlkZW8ucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG5cdFx0XHRjb25zdCBzcmMgPSBpZnJhbWUgJiYgaWZyYW1lLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cblx0XHRcdGxldCBwcm92aWRlcjtcblx0XHRcdGlmICghc3JjKSB7XG5cdFx0XHRcdHByb3ZpZGVyID0gJ2xvY2FsJztcblx0XHRcdH0gZWxzZSBpZiAoc3JjLmluZGV4T2YoJ2h0dHBzOi8vcGxheWVyLnZpbWVvLmNvbS92aWRlbycpID09PSAwKSB7XG5cdFx0XHRcdHByb3ZpZGVyID0gJ3ZpbWVvJztcblx0XHRcdH0gZWxzZSBpZiAoc3JjLmluZGV4T2YoJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycpID09PSAwKSB7XG5cdFx0XHRcdHByb3ZpZGVyID0gJ3lvdXR1YmUnO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocHJvdmlkZXIgPT09ICdsb2NhbCcpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVMb2NhbFBsYXllcih7IHdhc0VuYWJsZWQgfSk7XG5cdFx0XHR9IGVsc2UgaWYgKHByb3ZpZGVyID09PSAndmltZW8nKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlVmltZW9QbGF5ZXIoeyB3YXNFbmFibGVkIH0pO1xuXHRcdFx0fSBlbHNlIGlmIChwcm92aWRlciA9PT0gJ3lvdXR1YmUnKSB7XG5cdFx0XHRcdHRoaXMuY3JlYXRlWW91dHViZVBsYXllcih7IHdhc0VuYWJsZWQgfSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlTG9jYWxQbGF5ZXIoeyB3YXNFbmFibGVkID0gZmFsc2UgfSA9IHt9KSB7XG5cdFx0Y29uc3QgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10eXBlPVwidmlkZW9cIl0gdmlkZW9gKTtcblxuXHRcdGlmICh0aGlzLnN0YXRlLmtpb3NrKSB7XG5cdFx0XHR2aWRlby5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRyb2xzJyk7XG5cdFx0fVxuXG5cdFx0dmlkZW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCAoKSA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygnbG9jYWwgdmlkZW8gZW5kZWQgJywgd2FzRW5hYmxlZCk7XG5cdFx0XHRpZiAod2FzRW5hYmxlZCkge1xuXHRcdFx0XHR0aGlzLmVuYWJsZSgpO1xuXHRcdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdFx0dGhpcy5zdGFydEF1dG9wbGF5KCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHRjcmVhdGVWaW1lb1BsYXllcih7IHdhc0VuYWJsZWQgPSBmYWxzZSB9ID0ge30pIHtcblx0XHRjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXR5cGU9XCJ2aWRlb1wiXWApO1xuXHRcdGNvbnN0IGlmcmFtZSA9IHZpZGVvLnF1ZXJ5U2VsZWN0b3IoJ2lmcmFtZScpO1xuXG5cdFx0bGV0IHNyYyA9IGlmcmFtZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuXG5cdFx0Y29uc29sZS5sb2coJ2tpb3NrICcsIHRoaXMuc3RhdGUua2lvc2spO1xuXG5cdFx0aWYgKHRoaXMuc3RhdGUua2lvc2spIHtcblx0XHRcdHNyYyA9IHNyYy5pbmRleE9mKCc/JykgPT09IC0xID8gc3JjLmNvbmNhdCgnPycpIDogc3JjLmNvbmNhdCgnJicpO1xuXHRcdFx0c3JjID0gc3JjLnJlcGxhY2UoJ2NvbnRyb2xzPTEnLCAnJykuY29uY2F0KCdjb250cm9scz0wJyk7XG5cdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xuXHRcdH1cblxuXHRcdGNvbnN0IHBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoaWZyYW1lKTtcblxuXHRcdC8vIGF1dG9wbGF5IGF0IGVuZCBvciBhZnRlciB0aW1lb3V0XG5cdFx0Y29uc3QgYXV0b3BsYXlUaW1lb3V0ID0gdmlkZW8uZ2V0QXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5LXRpbWVvdXQnKTtcblxuXHRcdC8vIGlmIGF1dG9wbGF5VGltZW91dCBpcyBhIG51bWJlcixcblx0XHQvLyB1c2UgdGhhdCB2YWx1ZSB0byBhZHZhbmNlXG5cdFx0Ly8gb3RoZXJ3aXNlIHdhaXQgdW50aWwgZW5kIG9mIHZpZGVvXG5cdFx0Y29uc3QgYXV0b3BsYXlUaW1lb3V0SXNOdW1iZXIgPVxuXHRcdFx0YXV0b3BsYXlUaW1lb3V0ICYmIGF1dG9wbGF5VGltZW91dCA9PSBwYXJzZUludChhdXRvcGxheVRpbWVvdXQsIDEwKTtcblxuXHRcdGlmIChhdXRvcGxheVRpbWVvdXRJc051bWJlcikge1xuXHRcdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9wbGF5SWQpO1xuXHRcdFx0dGhpcy5hdXRvcGxheUlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuXHRcdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdFx0dGhpcy5zdGFydEF1dG9wbGF5KCk7XG5cdFx0XHR9LCBhdXRvcGxheVRpbWVvdXQgKiAxMDAwKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gd2hlbiB0aGUgdmlkZW8gaGFzIGVtaXR0ZWQgaXRzIGNvbXBsZXRlIGV2ZW50XG5cdFx0XHQvLyBlbmFibGUgYXV0b3BsYXkuXG5cdFx0XHRwbGF5ZXIub24oJ2VuZGVkJywgKGRhdGEpID0+IHtcblx0XHRcdFx0Ly8gYnV0IG9ubHkgaWYgYXV0b3BsYXkgd2FzIGVuYWJsZWRcblx0XHRcdFx0Y29uc29sZS5sb2coJ3ZpbWVvIGVuZGVkICcsIHdhc0VuYWJsZWQpO1xuXHRcdFx0XHRpZiAod2FzRW5hYmxlZCkge1xuXHRcdFx0XHRcdHRoaXMuZW5hYmxlKCk7XG5cdFx0XHRcdFx0dGhpcy5hZHZhbmNlKCk7XG5cdFx0XHRcdFx0dGhpcy5zdGFydEF1dG9wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdG9uWVRQbGF5ZXJTdGF0ZUNoYW5nZSh7IHdhc0VuYWJsZWQsIGV2ZW50IH0pIHtcblx0XHRjb25zb2xlLmxvZygneXQgZW5kZWQgJywgd2FzRW5hYmxlZCk7XG5cdFx0aWYgKGV2ZW50LmRhdGEgPT09IDAgJiYgd2FzRW5hYmxlZCkge1xuXHRcdFx0dGhpcy5lbmFibGUoKTtcblx0XHRcdHRoaXMuYWR2YW5jZSgpO1xuXHRcdFx0dGhpcy5zdGFydEF1dG9wbGF5KCk7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlWW91dHViZVBsYXllcih7IHdhc0VuYWJsZWQgPSBmYWxzZSB9ID0ge30pIHtcblx0XHRjb25zb2xlLmxvZygnY3JlYXRpbmcgeW91dHViZSBwbGF5ZXInKTtcblxuXHRcdGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdHlwZT1cInZpZGVvXCJdYCk7XG5cdFx0Y29uc3QgaWZyYW1lID0gdmlkZW8ucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG5cdFx0bGV0IHNyYyA9IGlmcmFtZS5nZXRBdHRyaWJ1dGUoJ3NyYycpO1xuXHRcdGlmICh0aGlzLnN0YXRlLmtpb3NrKSB7XG5cdFx0XHRzcmMgPSBzcmMuaW5kZXhPZignPycpID09PSAtMSA/IHNyYy5jb25jYXQoJz8nKSA6IHNyYy5jb25jYXQoJyYnKTtcblx0XHRcdHNyYyA9IHNyYy5yZXBsYWNlKCdjb250cm9scz0xJywgJycpLmNvbmNhdCgnY29udHJvbHM9MCcpO1xuXHRcdFx0aWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcblx0XHR9XG5cblx0XHR2YXIgdGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHR0YWcuc3JjID0gJ2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2lmcmFtZV9hcGknO1xuXHRcdHZhciBmaXJzdFNjcmlwdFRhZyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKVswXTtcblx0XHRmaXJzdFNjcmlwdFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YWcsIGZpcnN0U2NyaXB0VGFnKTtcblxuXHRcdHZhciBwbGF5ZXI7XG5cblx0XHR3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSAoKSA9PiB7XG5cdFx0XHRwbGF5ZXIgPSBuZXcgWVQuUGxheWVyKCd5dHBsYXllcicsIHtcblx0XHRcdFx0YXV0b3BsYXk6IDEsXG5cdFx0XHRcdGV2ZW50czoge1xuXHRcdFx0XHRcdC8vIG9uUmVhZHk6IG9uUGxheWVyUmVhZHksXG5cdFx0XHRcdFx0b25TdGF0ZUNoYW5nZTogKGV2ZW50KSA9PlxuXHRcdFx0XHRcdFx0dGhpcy5vbllUUGxheWVyU3RhdGVDaGFuZ2UoeyB3YXNFbmFibGVkLCBldmVudCB9KSxcblx0XHRcdFx0fSxcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHQvKlxuXHRcdGZ1bmN0aW9uIG9uUGxheWVyUmVhZHkoZXZlbnQpIHtcblx0XHRcdC8vIGV2ZW50LnRhcmdldC5wbGF5VmlkZW8oKTtcblx0XHR9XG5cdFx0Ki9cblxuXHRcdC8vIGF1dG9wbGF5IGF0IGVuZCBvciBhZnRlciB0aW1lb3V0XG5cdFx0Y29uc3QgYXV0b3BsYXlUaW1lb3V0ID0gdmlkZW8uZ2V0QXR0cmlidXRlKCdkYXRhLWF1dG9wbGF5LXRpbWVvdXQnKTtcblxuXHRcdC8vIGlmIGF1dG9wbGF5VGltZW91dCBpcyBhIG51bWJlcixcblx0XHQvLyB1c2UgdGhhdCB2YWx1ZSB0byBhZHZhbmNlXG5cdFx0Ly8gb3RoZXJ3aXNlIHdhaXQgdW50aWwgZW5kIG9mIHZpZGVvXG5cdFx0Y29uc3QgYXV0b3BsYXlUaW1lb3V0SXNOdW1iZXIgPVxuXHRcdFx0YXV0b3BsYXlUaW1lb3V0ID09IHBhcnNlSW50KGF1dG9wbGF5VGltZW91dCwgMTApO1xuXG5cdFx0aWYgKGF1dG9wbGF5VGltZW91dElzTnVtYmVyKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMuYXV0b3BsYXlJZCk7XG5cdFx0XHR0aGlzLmF1dG9wbGF5SWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuYWR2YW5jZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcblx0XHRcdH0sIGF1dG9wbGF5VGltZW91dCAqIDEwMDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB0aGUgdmlkZW8gaXMgYWxyZWFkeSBsaXN0ZW5pbmdcblx0XHRcdC8vIHRvIGl0J3Mgb3duIGNvbXBsZXRlIGV2ZW50XG5cdFx0XHQvLyB3aXRoIHRoZSB5b3V0dWJlIHBsYXllciBhcGlcblx0XHR9XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuYXV0b3BsYXlJZCk7XG5cdFx0dGhpcy5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0b3BsYXk7XG4iLCIvLyBpbXBvcnQgeyBNZWRpYVF1ZXJ5IH0gZnJvbSAnZm91bmRhdGlvbi1zaXRlcyc7XG4vLyBpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuXG4vLyBjbGFzcyBEZWJ1Z2dlciB7XG4vLyBcdGNvbnN0cnVjdG9yKCkge1xuLy8gXHRcdHRoaXMuc3RhdGUgPSB7fTtcblxuLy8gXHRcdC8vIGNvbnRhaW5lciBkaXZcbi8vIFx0XHR0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuLy8gXHRcdHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9ICdkZWJ1Z2dlcic7XG4vLyBcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XG5cbi8vIFx0XHR0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuLy8gXHRcdHRoaXMuY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cbi8vIFx0XHR0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XG5cbi8vIFx0XHR0aGlzLnJlbmRlcigpO1xuXG4vLyBcdFx0JCh3aW5kb3cpLm9uKCdjaGFuZ2VkLnpmLm1lZGlhcXVlcnknLCAoZXZlbnQsIG5ld1NpemUsIG9sZFNpemUpID0+XG4vLyBcdFx0XHR0aGlzLnJlbmRlcigpXG4vLyBcdFx0KTtcbi8vIFx0fVxuXG4vLyBcdHJlbmRlcigpIHtcbi8vIFx0XHRjb25zdCB3ID0gTnVtYmVyKFxuLy8gXHRcdFx0ZG9jdW1lbnRcbi8vIFx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdHVhbC13aWR0aCcpXG4vLyBcdFx0XHRcdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0dWFsLXdpZHRoJylcbi8vIFx0XHQpO1xuXG4vLyBcdFx0Y29uc3QgaCA9IE51bWJlcihcbi8vIFx0XHRcdGRvY3VtZW50XG4vLyBcdFx0XHRcdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hY3R1YWwtaGVpZ2h0Jylcbi8vIFx0XHRcdFx0LmdldEF0dHJpYnV0ZSgnZGF0YS1hY3R1YWwtaGVpZ2h0Jylcbi8vIFx0XHQpO1xuXG4vLyBcdFx0aWYgKCF3IHx8ICFoKSB7XG4vLyBcdFx0XHR0aGlzLmNsZWFyKCk7XG4vLyBcdFx0XHRyZXR1cm47XG4vLyBcdFx0fVxuXG4vLyBcdFx0Y29uc3QgdG90YWxXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuLy8gXHRcdGNvbnN0IHRvdGFsSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuLy8gXHRcdGNvbnN0IHRpbGVXaWR0aCA9IHRvdGFsV2lkdGggLyB3OyAvLyBob3cgd2lkZSBpcyBhIGZvb3Rcbi8vIFx0XHRjb25zdCB0aWxlSGVpZ2h0ID0gdG90YWxIZWlnaHQgLyBoOyAvLyBob3cgdGFsbCBpcyBhIGZvb3RcblxuLy8gXHRcdGlmIChNZWRpYVF1ZXJ5LmlzKCd2YXN0JykpIHtcbi8vIFx0XHRcdHRoaXMuY2FudmFzLndpZHRoID0gdGlsZVdpZHRoO1xuLy8gXHRcdFx0dGhpcy5jYW52YXMuaGVpZ2h0ID0gdGlsZUhlaWdodDtcblxuLy8gXHRcdFx0Ly8gYm90dG9tIGFuZCByaWdodCBsaW5lc1xuLy8gXHRcdFx0dGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuLy8gXHRcdFx0dGhpcy5jb250ZXh0Lm1vdmVUbygwLCB0aWxlSGVpZ2h0KTtcbi8vIFx0XHRcdHRoaXMuY29udGV4dC5saW5lVG8oMCwgMCk7XG4vLyBcdFx0XHR0aGlzLmNvbnRleHQubGluZVRvKHRpbGVXaWR0aCwgMCk7XG4vLyBcdFx0XHR0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG5cbi8vIFx0XHRcdC8vIHRpY2tzIGV2ZXJ5IDEvNCBmb290IGFsb25nIHggYW5kIHkgYXhpc1xuLy8gXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcbi8vIFx0XHRcdFx0Y29uc3QgeCA9ICh0aWxlV2lkdGggLyA0KSAqIGk7XG4vLyBcdFx0XHRcdGNvbnN0IHkgPSAodGlsZUhlaWdodCAvIDQpICogaTtcbi8vIFx0XHRcdFx0Y29uc3QgeExlbmd0aCA9IGkgPT09IDIgPyA1MCA6IDI1O1xuLy8gXHRcdFx0XHRjb25zdCB5TGVuZ3RoID0gaSA9PT0gMiA/IDUwIDogMjU7XG4vLyBcdFx0XHRcdHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbi8vIFx0XHRcdFx0dGhpcy5jb250ZXh0Lm1vdmVUbygwLCB5KTtcbi8vIFx0XHRcdFx0dGhpcy5jb250ZXh0LmxpbmVUbyh4TGVuZ3RoLCB5KTtcbi8vIFx0XHRcdFx0dGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuXG4vLyBcdFx0XHRcdHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcbi8vIFx0XHRcdFx0dGhpcy5jb250ZXh0Lm1vdmVUbyh4LCAwKTtcbi8vIFx0XHRcdFx0dGhpcy5jb250ZXh0LmxpbmVUbyh4LCB5TGVuZ3RoKTtcbi8vIFx0XHRcdFx0dGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuLy8gXHRcdFx0fVxuXG4vLyBcdFx0XHR2YXIgZGF0YSA9IHRoaXMuY2FudmFzLnRvRGF0YVVSTCgpO1xuXG4vLyBcdFx0XHR0aGlzLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBkYXRhICsgJyknO1xuLy8gXHRcdH0gZWxzZSB7XG4vLyBcdFx0XHQvLyB3aGVuIG5vdCBhIHZhc3QgbWVkaWFxdWVyeSxcbi8vIFx0XHRcdHRoaXMuY2xlYXIoKTtcbi8vIFx0XHR9XG4vLyBcdH1cblxuLy8gXHRjbGVhcigpIHtcbi8vIFx0XHRjb25zdCB0b3RhbFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4vLyBcdFx0Y29uc3QgdG90YWxIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4vLyBcdFx0dGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0b3RhbFdpZHRoLCB0b3RhbEhlaWdodCk7XG4vLyBcdH1cbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgRGVidWdnZXI7XG4iLCIvLyBGcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL211ZGdlLzU4MzAzODJcblxuY2xhc3MgRXZlbnRFbWl0dGVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5ldmVudHMgPSB7fTtcblx0fVxuXG5cdF9nZXRFdmVudExpc3RCeU5hbWUoZXZlbnROYW1lKSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IG5ldyBTZXQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG5cdH1cblxuXHRvbihldmVudE5hbWUsIGZuKSB7XG5cdFx0dGhpcy5fZ2V0RXZlbnRMaXN0QnlOYW1lKGV2ZW50TmFtZSkuYWRkKGZuKTtcblx0fVxuXG5cdG9uY2UoZXZlbnROYW1lLCBmbikge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cdFx0Y29uc3Qgb25jZUZuID0gZnVuY3Rpb24oLi4uYXJncykge1xuXHRcdFx0c2VsZi5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIG9uY2VGbik7XG5cdFx0XHRmbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9O1xuXHRcdHRoaXMub24oZXZlbnROYW1lLCBvbmNlRm4pO1xuXHR9XG5cblx0ZW1pdChldmVudE5hbWUsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLl9nZXRFdmVudExpc3RCeU5hbWUoZXZlbnROYW1lKS5mb3JFYWNoKFxuXHRcdFx0ZnVuY3Rpb24oZm4pIHtcblx0XHRcdFx0Zm4uYXBwbHkodGhpcywgYXJncyk7XG5cdFx0XHR9LmJpbmQodGhpcylcblx0XHQpO1xuXHR9XG5cblx0cmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lLCBmbikge1xuXHRcdHRoaXMuX2dldEV2ZW50TGlzdEJ5TmFtZShldmVudE5hbWUpLmRlbGV0ZShmbik7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyO1xuIiwiY2xhc3MgTmF2aWdhdGlvbiB7XG5cdGNvbnN0cnVjdG9yKHsgcm91dGVyLCB2aXNpYmxlID0gZmFsc2UsIGNvbnRhaW5lcklkID0gJ2NvbnRyb2xzJyB9ID0ge30pIHtcblx0XHR0aGlzLnN0YXRlID0geyB2aXNpYmxlIH07XG5cblx0XHR0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKVxuXHRcdFx0PyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZClcblx0XHRcdDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0XHR0aGlzLnJvdXRlciA9IHJvdXRlcjtcblx0XHR0aGlzLnJvdXRlci5hZGRFdmVudExpc3RlbmVyKCdvblJlYWR5JywgKGFyZ3MpID0+IHRoaXMub25Sb3V0ZXJSZWFkeShhcmdzKSk7XG5cdFx0dGhpcy5yb3V0ZXIuYWRkRXZlbnRMaXN0ZW5lcignb25Sb3V0ZUNoYW5nZScsIChhcmdzKSA9PlxuXHRcdFx0dGhpcy5vblJvdXRlQ2hhbmdlKGFyZ3MpXG5cdFx0KTtcblx0fVxuXG5cdHNob3coKSB7XG5cdFx0dGhpcy5zdGF0ZS52aXNpYmxlID0gdHJ1ZTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0aGlkZSgpIHtcblx0XHR0aGlzLnN0YXRlLnZpc2libGUgPSBmYWxzZTtcblx0XHR0aGlzLmNsZWFyKCk7XG5cdH1cblxuXHRlbmFibGUoKSB7XG5cdFx0dGhpcy5zdGF0ZS5lbmFibGVkID0gdHJ1ZTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcblxuXHRcdC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG5cdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlLCBmYWxzZSk7XG5cdH1cblxuXHRkaXNhYmxlKCkge1xuXHRcdC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcblxuXHRcdHRoaXMuc3RhdGUuZW5hYmxlZCA9IGZhbHNlO1xuXHR9XG5cblx0b25LZXlEb3duKGUpIHtcblx0XHRzd2l0Y2ggKGUuY29kZSkge1xuXHRcdFx0Y2FzZSAnQXJyb3dSaWdodCc6XG5cdFx0XHRcdHRoaXMubmV4dCgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0Fycm93TGVmdCc6XG5cdFx0XHRcdHRoaXMucHJldigpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRuZXh0KCkge1xuXHRcdGNvbnN0IHsgY3VycmVudEluZGV4LCB0b3RhbCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRpZiAoY3VycmVudEluZGV4ICsgMSA8IHRvdGFsKSB7XG5cdFx0XHR0aGlzLnNldEluZGV4KGN1cnJlbnRJbmRleCArIDEpO1xuXHRcdH1cblx0fVxuXG5cdHByZXYoKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50SW5kZXggfSA9IHRoaXMuc3RhdGU7XG5cdFx0aWYgKGN1cnJlbnRJbmRleCAtIDEgPj0gMCkge1xuXHRcdFx0dGhpcy5zZXRJbmRleChjdXJyZW50SW5kZXggLSAxKTtcblx0XHR9XG5cdH1cblxuXHRzZXRJbmRleChpbmRleCkge1xuXHRcdHRoaXMuc3RhdGUuY3VycmVudEluZGV4ID0gaW5kZXg7XG5cblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShgL3NsaWRlcy9zbGlkZS0ke2luZGV4ICsgMX1gKTtcblx0fVxuXG5cdC8vIG9uUG9wU3RhdGUoZXZlbnQpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygnc3RhdGUgJywgaGlzdG9yeS5zdGF0ZSk7XG5cdC8vIH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50SW5kZXgsIHRvdGFsLCBraW9zayB9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdGNvbnN0IG1hcmt1cCA9IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJ0b3AtYmFyLWxlZnRcIj5cblx0XHRcdFx0PHVsIGNsYXNzPVwiZHJvcGRvd24gbWVudVwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1lbnUtdGV4dFwiPlRlZCdzIFByZXNlbnRhdGlvbjwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdCR7XG5cdFx0XHRcdCFraW9za1xuXHRcdFx0XHRcdD8gYDxkaXYgY2xhc3M9XCJ0b3AtYmFyLXJpZ2h0XCI+XG5cdFx0XHRcdDx1bCBjbGFzcz1cIm1lbnVcIj5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvblwiIGRhdGEtYWN0aW9uPVwicHJldlwiPlxuXHRcdFx0XHRcdFx0XHRQcmV2XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT48cD4ke2N1cnJlbnRJbmRleCArIDF9IC8gJHt0b3RhbH08L3A+PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvblwiIGRhdGEtYWN0aW9uPVwibmV4dFwiPlxuXHRcdFx0XHRcdFx0XHROZXh0XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+YFxuXHRcdFx0XHRcdDogYDxwPiR7Y3VycmVudEluZGV4ICsgMX0gLyAke3RvdGFsfTwvcD5gXG5cdFx0XHR9XG5cdFx0YDtcblxuXHRcdHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IG1hcmt1cDtcblxuXHRcdC8vIHNldCB1cCBldmVudCBsaXN0ZW5lcnNcblx0XHRjb25zdCBwcmV2RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY3Rpb249cHJldl0nKTtcblx0XHRwcmV2RWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMucHJldigpKTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IG5leHRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFjdGlvbj1uZXh0XScpO1xuXHRcdG5leHRFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5uZXh0KCkpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKHRoaXMuc3RhdGUuY3VycmVudEluZGV4ID09PSAwKSB7XG5cdFx0XHRwcmV2RWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwcmV2RWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJykpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCA9PT0gdGhpcy5zdGF0ZS50b3RhbCAtIDEpIHtcblx0XHRcdG5leHRFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5leHRFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKSk7XG5cdFx0fVxuXHR9XG5cblx0b25Sb3V0ZXJSZWFkeSh7IGN1cnJlbnRJbmRleCwgdG90YWwsIGRhdGEgfSkge1xuXHRcdGNvbnN0IGtpb3NrID0gZGF0YS5hdXRvcGxheSAmJiBkYXRhLmF1dG9wbGF5Lmtpb3NrO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHQuLi50aGlzLnN0YXRlLFxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdGN1cnJlbnRJbmRleCxcblx0XHRcdHRvdGFsLFxuXHRcdFx0a2lvc2ssXG5cdFx0fTtcblx0XHR0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5lbmFibGUoKTtcblxuXHRcdHRoaXMuc3RhdGUudmlzaWJsZSA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XG5cdH1cblxuXHRvblJvdXRlQ2hhbmdlKHsgc2xpZGVNb2RlbCB9KSB7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdC4uLnRoaXMuc3RhdGUsXG5cdFx0XHRjdXJyZW50SW5kZXg6IHNsaWRlTW9kZWwuaW5kZXgsXG5cdFx0fTtcblxuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIiwiaW1wb3J0IE5hdmlnbyBmcm9tICdOYXZpZ28nO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdKUy9ldmVudC1lbWl0dGVyLmpzJztcblxuY2xhc3MgUm91dGVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IHsgcmVhZHk6IGZhbHNlIH07XG5cdFx0dGhpcy5yb3V0ZXIgPSBuZXcgTmF2aWdvKG51bGwsIHRydWUpO1xuXHRcdHRoaXMuZXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHR9XG5cblx0bG9hZChqc29uKSB7XG5cdFx0ZmV0Y2goanNvbilcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cblx0XHRcdFx0dGhpcy5yb3V0ZXJcblx0XHRcdFx0XHQub24oJy9zbGlkZXMvOmlkJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2FkU2xpZGUoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5yZXNvbHZlKCk7XG5cblx0XHRcdFx0dGhpcy5yb3V0ZXJcblx0XHRcdFx0XHQub24oKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2FkU2xpZGUoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5yZXNvbHZlKCk7XG5cblx0XHRcdFx0dGhpcy5yb3V0ZXIubm90Rm91bmQoKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdOb3QgZm91bmQnKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5zdGF0ZS5yZWFkeSA9IHRydWU7XG5cdFx0XHRcdHRoaXMub25SZWFkeSh0aGlzLmNhbGxiYWNrKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHRcdC8vIFRoZXJlIHdhcyBhbiBlcnJvclxuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1RoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBqc29uIGZpbGUuJywgZXJyKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Z2V0U2xpZGVNb2RlbCgpIHtcblx0XHQvLyBkZXJpdmUgdGhlIHNsaWRlIGZyb20gdGhlIHVybFxuXHRcdGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHQvLyBnZXQgdGhlIHNsaWRlIGluZGV4IGZyb20gdGhlIGhhc2gsIG9yIGRlZmF1bHQgdG8gMVxuXHRcdGxldCBzbGlkZUluZGV4ID0gcGFyc2VJbnQoaGFzaC5zcGxpdCgnc2xpZGUtJylbMV0gfHwgMSwgMTApO1xuXHRcdC8vIHNsaWRlcyBhcmUgbGFiZWxsZWQgMSwgMiwgMywgYnV0IGFyZSBhcnJheXMgKDAsIDEsIDIpXG5cdFx0c2xpZGVJbmRleCAtPSAxO1xuXG5cdFx0Y29uc3Qgc2xpZGVNb2RlbCA9IHRoaXMuZGF0YS5zbGlkZXNbc2xpZGVJbmRleF07XG5cblx0XHRyZXR1cm4geyAuLi5zbGlkZU1vZGVsLCBpbmRleDogc2xpZGVJbmRleCB9O1xuXHR9XG5cblx0bG9hZFNsaWRlKCkge1xuXHRcdGNvbnN0IHNsaWRlTW9kZWwgPSB0aGlzLmdldFNsaWRlTW9kZWwoKTtcblxuXHRcdGNvbnN0IGh0bWwgPSByZXF1aXJlKGAuLi9zbGlkZXMvJHtzbGlkZU1vZGVsLmxvY31gKTtcblx0XHRjb25zdCBwcmVzZW50YXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmVzZW50YXRpb24nKVswXTtcblx0XHRjb25zdCBjb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50cycpO1xuXG5cdFx0Y29udGVudHMuaW5uZXJIVE1MID0gaHRtbDtcblxuXHRcdC8vIHNldCBiYWNrZ3JvdW5kIGNvbG9yc1xuXHRcdGNvbnN0IGJhY2tncm91bmRDb2xvckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0J2RpdltkYXRhLWJhY2tncm91bmQtY29sb3JdJ1xuXHRcdCk7XG5cdFx0cHJlc2VudGF0aW9uLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJhY2tncm91bmRDb2xvckxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGNvbG9yID0gYmFja2dyb3VuZENvbG9yTGlzdFtpXS5nZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdCdkYXRhLWJhY2tncm91bmQtY29sb3InXG5cdFx0XHQpO1xuXHRcdFx0cHJlc2VudGF0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuXHRcdH1cblxuXHRcdC8vIHNldCBiYWNrZ3JvdW5kIGltYWdlc1xuXHRcdGNvbnN0IGJhY2tncm91bmRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtYmFja2dyb3VuZF0nKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYmFja2dyb3VuZExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHVybCA9IGJhY2tncm91bmRMaXN0W2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kJyk7XG5cdFx0XHRiYWNrZ3JvdW5kTGlzdFtpXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyB1cmwgKyBcIicpXCI7XG5cdFx0fVxuXG5cdFx0Ly8gcGVyZm9ybSBhbnkgYWxpZ25tZW50IGFkanVzdG1lbnRzXG5cdFx0dmFyIGFsaWdubWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbZGF0YS1hbGlnbl0nKTtcblx0XHRjb250ZW50cy5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndGV4dC1hbGlnbicpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhbGlnbm1lbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBhbGlnbm1lbnQgPSBhbGlnbm1lbnRMaXN0W2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1hbGlnbicpO1xuXHRcdFx0Y29udGVudHMuc3R5bGUudGV4dEFsaWduID0gYWxpZ25tZW50O1xuXHRcdH1cblxuXHRcdC8vIHBlcmZvcm0gYW55IGNvbHVtbmFyIGFkanVzdG1lbnRzXG5cdFx0dmFyIGNvbHVtbmFyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLWNvbHVtbl0nKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uYXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBjb2x1bW4gPSBjb2x1bW5hckxpc3RbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbicpO1xuXHRcdFx0Y29sdW1uYXJMaXN0W2ldLnBhcmVudE5vZGUuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCByZWQnO1xuXHRcdH1cblx0fVxuXG5cdG5hdmlnYXRlKHBhdGgpIHtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShwYXRoKTtcblxuXHRcdC8vIHVzZSBzZXRUaW1lb3V0IHdpdGggMCB0aW1lIHRvIHN1bW1vbiBhdCBlbmQgb2YgZnJhbWVcblx0XHQvLyBzbyBjb250ZW50cyBoYXZlIGFuIG9wcG9ydHVuaXR5IHRvIHJlbmRlclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2xpZGVNb2RlbCA9IHRoaXMuZ2V0U2xpZGVNb2RlbCgpO1xuXHRcdFx0dGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnb25Sb3V0ZUNoYW5nZScsIHsgc2xpZGVNb2RlbCwgcGF0aCB9KTtcblx0XHR9LCAwKTtcblx0fVxuXG5cdG9uUmVhZHkoY2FsbGJhY2spIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5yZWFkeSkge1xuXHRcdFx0Y29uc3Qgc2xpZGVNb2RlbCA9IHRoaXMuZ2V0U2xpZGVNb2RlbCgpO1xuXHRcdFx0Y29uc3QgeyBpbmRleCB9ID0gc2xpZGVNb2RlbDtcblx0XHRcdGNvbnN0IHRvdGFsID0gdGhpcy5kYXRhLnNsaWRlcy5sZW5ndGg7XG5cblx0XHRcdHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ29uUmVhZHknLCB7XG5cdFx0XHRcdGN1cnJlbnRJbmRleDogaW5kZXgsXG5cdFx0XHRcdHRvdGFsLFxuXHRcdFx0XHRkYXRhOiB0aGlzLmRhdGEsXG5cdFx0XHRcdHNsaWRlTW9kZWwsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5ldmVudEVtaXR0ZXIuYWRkKCdvblJlYWR5JywgY2FsbGJhY2spO1xuXHRcdH1cblx0fVxuXG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZXZlbnRFbWl0dGVyLm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAnSlMvcm91dGVyLmpzJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ0pTL25hdmlnYXRpb24uanN4JztcbmltcG9ydCBBdXRvcGxheUNvbnRyb2xzIGZyb20gJ0pTL2F1dG9wbGF5LmpzeCc7XG5pbXBvcnQgRGVidWdnZXIgZnJvbSAnSlMvZGVidWdnZXIuanN4JztcblxuY29uc3QgaXNEZW1vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZGVtb11gKTtcblxuaWYgKGlzRGVtbykge1xuXHRjb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cdGNvbnN0IG5hdiA9IG5ldyBOYXZpZ2F0aW9uKHsgcm91dGVyLCB2aXNpYmxlOiB0cnVlIH0pO1xuXHRjb25zdCBhdXRvcGxheUNvbnRyb2xzID0gbmV3IEF1dG9wbGF5Q29udHJvbHMoeyByb3V0ZXIgfSk7XG5cblx0Y29uc3QgZGVtb1VyaSA9IGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRlbW9dYClcblx0XHQuZ2V0QXR0cmlidXRlKCdkYXRhLWRlbW8nKTtcblxuXHRyb3V0ZXIubG9hZChkZW1vVXJpKTtcbn1cblxuY29uc3QgaXNEZWJ1Z2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRlYnVnXWApO1xuaWYgKGlzRGVidWdnZXIgJiYgaXNEZWJ1Z2dlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVidWcnKSA9PT0gJ3RydWUnKSB7XG5cdGNvbnN0IG15RGVidWdnZXIgPSBuZXcgRGVidWdnZXIoaXNEZWJ1Z2dlcik7XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vdGVkL3NsaWRlLTAxLXRpdGxlLm1kXCI6IFwiLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wMS10aXRsZS5tZFwiLFxuXHRcIi4vdGVkL3NsaWRlLTAyLWJhY2tncm91bmQubWRcIjogXCIuL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTAyLWJhY2tncm91bmQubWRcIixcblx0XCIuL3RlZC9zbGlkZS0wMy10aGVtZS5tZFwiOiBcIi4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDMtdGhlbWUubWRcIixcblx0XCIuL3RlZC9zbGlkZS0wNC1jb3B5Lm1kXCI6IFwiLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wNC1jb3B5Lm1kXCIsXG5cdFwiLi90ZWQvc2xpZGUtMDUtaW1hZ2UubWRcIjogXCIuL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA1LWltYWdlLm1kXCIsXG5cdFwiLi90ZWQvc2xpZGUtMDYtY29sdW1ucy5tZFwiOiBcIi4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDYtY29sdW1ucy5tZFwiLFxuXHRcIi4vdGVkL3NsaWRlLTA3LXZpZGVvLWxvY2FsLm1kXCI6IFwiLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wNy12aWRlby1sb2NhbC5tZFwiLFxuXHRcIi4vdGVkL3NsaWRlLTA3LXZpZGVvLXZpbWVvLm1kXCI6IFwiLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wNy12aWRlby12aW1lby5tZFwiLFxuXHRcIi4vdGVkL3NsaWRlLTA3LXZpZGVvLXlvdXR1YmUubWRcIjogXCIuL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA3LXZpZGVvLXlvdXR1YmUubWRcIixcblx0XCIuL3RlZC9zbGlkZS0wOC0zZC5tZFwiOiBcIi4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDgtM2QubWRcIixcblx0XCIuL3RlZC9zbGlkZS0wOS10aGFua3MubWRcIjogXCIuL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA5LXRoYW5rcy5tZFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9zbGlkZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8aDEgaWQ9XFxcInRpdGxlLXNsaWRlXFxcIj5UaXRsZSBTbGlkZTwvaDE+XFxuPHA+QnkgVGVkPC9wPlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgZGF0YS1iYWNrZ3JvdW5kPVxcXCIvaW1nL2Fkcmlhbi1pbmZlcm51cy1HTGY3YkF3Q2RZZy11bnNwbGFzaC5qcGdcXFwiPjwvZGl2PlxcblxcbjxoMSBpZD1cXFwic2xpZGUtMlxcXCI+U2xpZGUgMjwvaDE+XFxuPHA+SW1hZ2Ugc3VwcG9ydDwvcD5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGRhdGEtYmFja2dyb3VuZD1cXFwiL2ltZy9hZHJpYW4taW5mZXJudXMtR0xmN2JBd0NkWWctdW5zcGxhc2guanBnXFxcIj48L2Rpdj5cXG48ZGl2IGRhdGEtdGhlbWU9XFxcImRhcmtcXFwiPlxcbjxoMT5TbGlkZSAzPC9oMT5cXG48cD5UaGVtZSBTdXBwb3J0PC9wPlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgZGF0YS1hbGlnbj1cXFwibGVmdFxcXCI+XFxuPHA+XFxuQ2F0IGlwc3VtIGRvbG9yIHNpdCBhbWV0LiBEZW1hbmQgdG8gYmUgbGV0IG91dHNpZGUgYXQgb25jZS4gRWF0IGFsbCB0aGUgcG93ZXIgY29yZHMuIFByZXNlbnQgYmVsbHkuXFxuPC9wPlxcbjxwPlxcblB1cnIgZm9yIG5vIHJlYXNvbi4gUG91bmNlIG9uIHVuc3VzcGVjdGluZyBwZXJzb24uXFxuPC9wPlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxwPjxpbWcgc3JjPVxcXCIvL3BsYWNla2l0dGVuLmNvbS82MDAvNjAwXFxcIiBhbHQ9XFxcIkN1dGUgS2l0dGVuXFxcIj48L3A+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBkYXRhLWJhY2tncm91bmQ9XFxcIi9pbWcvYWRyaWFuLWluZmVybnVzLUdMZjdiQXdDZFlnLXVuc3BsYXNoLmpwZ1xcXCI+PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiZ3JpZC14IGdyaWQtcGFkZGluZy14XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNlbGwgbWVkaXVtLTZcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJjb250YWluXFxcIiBzcmM9XFxcIi8vcGxhY2VraXR0ZW4uY29tLzYwMC82MDBcXFwiIGFsdD1cXFwiQSBjdXRlIGtpdHRlblxcXCIgLz5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY2VsbCBtZWRpdW0tNiBhbGlnbi1zZWxmLW1pZGRsZSB0ZXh0LWxlZnRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaG93LWZvci1uZWFyXFxcIj5cXG4gICAgICA8cD5DYXQgaXBzdW0gZG9sb3Igc2l0IGFtZXQuIERlbWFuZCB0byBiZSBsZXQgb3V0c2lkZSBhdCBvbmNlLCBhbmQgZXhwZWN0IG93bmVyIHRvIHdhaXQgZm9yIG1lIGFzIGkgdGhpbmsgYWJvdXQgaXQuPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaG93LWZvci1mYXJcXFwiPlxcbiAgICAgIDxwPkNhdCBpcHN1bSBkb2xvciBzaXQgYW1ldC48L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwicmVzcG9uc2l2ZS1lbWJlZFxcXCIgZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVxcXCIjMDAwMDAwXFxcIiBkYXRhLXR5cGU9XFxcInZpZGVvXFxcIiA+XFxuPHZpZGVvIGNvbnRyb2xzIGF1dG9wbGF5IG11dGVkPlxcbiAgPHNvdXJjZSBzcmM9XFxcIi9tb3YvdG90ZW0tYnktbHVjYXN0c3dpY2subXA0XFxcIiB0eXBlPVxcXCJ2aWRlby9tcDRcXFwiPlxcbjwvdmlkZW8+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwicmVzcG9uc2l2ZS1lbWJlZFxcXCIgZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVxcXCIjMDAwMDAwXFxcIiBkYXRhLXR5cGU9XFxcInZpZGVvXFxcIj5cXG4gIDxpZnJhbWUgc3JjPVxcXCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNzY5Nzk4NzE/YXV0b3BsYXk9MVxcXCIgd2lkdGg9XFxcIjY0MFxcXCIgaGVpZ2h0PVxcXCIzNjhcXFwiIGZyYW1lYm9yZGVyPVxcXCIwXFxcIiBhbGxvdz1cXFwiYXV0b3BsYXk7IGZ1bGxzY3JlZW5cXFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cXG48L2Rpdj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJyZXNwb25zaXZlLWVtYmVkXFxcIiBkYXRhLWJhY2tncm91bmQtY29sb3I9XFxcIiMwMDAwMDBcXFwiIGRhdGEtdHlwZT1cXFwidmlkZW9cXFwiID5cXG4gIDxpZnJhbWUgaWQ9XFxcInl0cGxheWVyXFxcIiB3aWR0aD1cXFwiNTYwXFxcIiBoZWlnaHQ9XFxcIjMxNVxcXCIgc3JjPVxcXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9hZkNVUHFDek9Idz9hdXRvcGxheT0xJmVuYWJsZWpzYXBpPTFcXFwiIGZyYW1lYm9yZGVyPVxcXCIwXFxcIiBhbGxvdz1cXFwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVxcXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInJlc3BvbnNpdmUtZW1iZWRcXFwiIGRhdGEtYmFja2dyb3VuZC1jb2xvcj1cXFwiIzAwMDAwMFxcXCIgZGF0YS10eXBlPVxcXCJ2aWRlb1xcXCI+XFxuXFxuPGRpdiBjbGFzcz1cXFwic2tldGNoZmFiLWVtYmVkLXdyYXBwZXJcXFwiPlxcbiAgPGlmcmFtZSB0aXRsZT1cXFwiQSAzRCBtb2RlbFxcXCIgd2lkdGg9XFxcIjY0MFxcXCIgaGVpZ2h0PVxcXCI0ODBcXFwiIHNyYz1cXFwiaHR0cHM6Ly9za2V0Y2hmYWIuY29tL21vZGVscy9lZWRlOGMxMzk0ZGM0MTMyYWYyZjAyZjA2ZDQ5N2ZhOC9lbWJlZD9hdXRvc3RhcnQ9MSZhbXA7dWlfY29udHJvbHM9MSZhbXA7dWlfaW5mb3M9MSZhbXA7dWlfaW5zcGVjdG9yPTEmYW1wO3VpX3N0b3A9MSZhbXA7dWlfd2F0ZXJtYXJrPTEmYW1wO3VpX3dhdGVybWFya19saW5rPTFcXFwiIGZyYW1lYm9yZGVyPVxcXCIwXFxcIiBhbGxvdz1cXFwiYXV0b3BsYXk7IGZ1bGxzY3JlZW47IHZyXFxcIiBtb3phbGxvd2Z1bGxzY3JlZW49XFxcInRydWVcXFwiIHdlYmtpdGFsbG93ZnVsbHNjcmVlbj1cXFwidHJ1ZVxcXCI+PC9pZnJhbWU+XFxuICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogbm9ybWFsOyBtYXJnaW46IDVweDsgY29sb3I6ICM0QTRBNEE7XFxcIj5cXG4gICAgICA8YSBocmVmPVxcXCJodHRwczovL3NrZXRjaGZhYi5jb20vM2QtbW9kZWxzL25pbnRlbmRvLWdhbWVib3ktMTk4OS1lZWRlOGMxMzk0ZGM0MTMyYWYyZjAyZjA2ZDQ5N2ZhOD91dG1fbWVkaXVtPWVtYmVkJnV0bV9zb3VyY2U9d2Vic2l0ZSZ1dG1fY2FtcGFpZ249c2hhcmUtcG9wdXBcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjMUNBQUQ5O1xcXCI+TmludGVuZG8gR2FtZWJveSAxOTg5PC9hPlxcbiAgICAgIGJ5IDxhIGhyZWY9XFxcImh0dHBzOi8vc2tldGNoZmFiLmNvbS9zaHJlZG5lY3Rvcj91dG1fbWVkaXVtPWVtYmVkJnV0bV9zb3VyY2U9d2Vic2l0ZSZ1dG1fY2FtcGFpZ249c2hhcmUtcG9wdXBcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjMUNBQUQ5O1xcXCI+c2hyZWRuZWN0b3I8L2E+XFxuICAgICAgb24gPGEgaHJlZj1cXFwiaHR0cHM6Ly9za2V0Y2hmYWIuY29tP3V0bV9tZWRpdW09ZW1iZWQmdXRtX3NvdXJjZT13ZWJzaXRlJnV0bV9jYW1wYWlnbj1zaGFyZS1wb3B1cFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICMxQ0FBRDk7XFxcIj5Ta2V0Y2hmYWI8L2E+XFxuICA8L3A+XFxuPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHA+PHNwYW4gZGF0YS10aGVtZT1cXFwiZGFya1xcXCI+XFxuPGgxPlRoYW5rIHlvdSE8L2gxPlxcbjxoMj5Zb3VyIGZyaWVuZCwgVGVkPC9oMj5cXG48L3NwYW4+PC9wPlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyJdLCJzb3VyY2VSb290IjoiIn0=