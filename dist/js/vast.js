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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Debugger {
	constructor() {
		this.state = {};

		// container div
		this.container = document.createElement('div');
		this.container.className = 'debugger';
		document.body.appendChild(this.container);

		this.canvas = document.createElement('canvas');
		this.context = this.canvas.getContext('2d');

		this.container.appendChild(this.canvas);

		this.render();

		var mqWatcher = window.matchMedia('(min-width: 2000px)');
		mqWatcher.addEventListener('change', () => this.render());
	}

	render() {
		var mqWatcher = window.matchMedia('(min-width: 2000px)');
		const isVast = mqWatcher.matches;

		const w = Number(
			document
				.querySelector('[data-actual-width')
				.getAttribute('data-actual-width')
		);

		const h = Number(
			document
				.querySelector('[data-actual-height')
				.getAttribute('data-actual-height')
		);

		if (!w || !h) {
			this.clear();
			return;
		}

		const totalWidth = window.innerWidth;
		const totalHeight = window.innerHeight;
		const tileWidth = totalWidth / w; // how wide is a foot
		const tileHeight = totalHeight / h; // how tall is a foot

		if (isVast) {
			this.canvas.width = tileWidth;
			this.canvas.height = tileHeight;

			// bottom and right lines
			this.context.beginPath();
			this.context.moveTo(0, tileHeight);
			this.context.lineTo(0, 0);
			this.context.lineTo(tileWidth, 0);
			this.context.stroke();

			// ticks every 1/4 foot along x and y axis
			for (var i = 0; i < 4; i++) {
				const x = (tileWidth / 4) * i;
				const y = (tileHeight / 4) * i;
				const xLength = i === 2 ? 50 : 25;
				const yLength = i === 2 ? 50 : 25;
				this.context.beginPath();
				this.context.moveTo(0, y);
				this.context.lineTo(xLength, y);
				this.context.stroke();

				this.context.beginPath();
				this.context.moveTo(x, 0);
				this.context.lineTo(x, yLength);
				this.context.stroke();
			}

			var data = this.canvas.toDataURL();

			this.container.style.backgroundImage = 'url(' + data + ')';
		} else {
			// when not a vast mediaquery,
			this.clear();
		}
	}

	clear() {
		const totalWidth = window.innerWidth;
		const totalHeight = window.innerHeight;
		this.context.clearRect(0, 0, totalWidth, totalHeight);

		var data = this.canvas.toDataURL();
		this.container.style.backgroundImage = 'url(' + data + ')';
	}
}

/* harmony default export */ __webpack_exports__["default"] = (Debugger);


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
  var myDebugger = new JS_debugger_jsx__WEBPACK_IMPORTED_MODULE_3__["default"](isDebugger);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL05hdmlnby9saWIvbmF2aWdvLm1pbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvYXV0b3BsYXkuanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9kZWJ1Z2dlci5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2V2ZW50LWVtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL25hdmlnYXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9qcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3Zhc3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDEtdGl0bGUubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDItYmFja2dyb3VuZC5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wMy10aGVtZS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wNC1jb3B5Lm1kIiwid2VicGFjazovLy8uL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA1LWltYWdlLm1kIiwid2VicGFjazovLy8uL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA2LWNvbHVtbnMubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDctdmlkZW8tbG9jYWwubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDctdmlkZW8tdmltZW8ubWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDctdmlkZW8teW91dHViZS5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wOC0zZC5tZCIsIndlYnBhY2s6Ly8vLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wOS10aGFua3MubWQiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiZXZlbnRzIiwiZXZlbnROYW1lIiwiU2V0IiwiZm4iLCJfZ2V0RXZlbnRMaXN0QnlOYW1lIiwiYWRkIiwic2VsZiIsIm9uY2VGbiIsInJlbW92ZUxpc3RlbmVyIiwiYXJncyIsImFwcGx5Iiwib24iLCJmb3JFYWNoIiwiYmluZCIsIlJvdXRlciIsInN0YXRlIiwicmVhZHkiLCJyb3V0ZXIiLCJOYXZpZ28iLCJldmVudEVtaXR0ZXIiLCJqc29uIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibG9hZFNsaWRlIiwicmVzb2x2ZSIsIm5vdEZvdW5kIiwiY29uc29sZSIsImxvZyIsIm9uUmVhZHkiLCJjYWxsYmFjayIsImVyciIsIndhcm4iLCJoYXNoIiwid2luZG93IiwibG9jYXRpb24iLCJzbGlkZUluZGV4IiwicGFyc2VJbnQiLCJzcGxpdCIsInNsaWRlTW9kZWwiLCJzbGlkZXMiLCJpbmRleCIsImdldFNsaWRlTW9kZWwiLCJodG1sIiwicmVxdWlyZSIsImxvYyIsInByZXNlbnRhdGlvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbnRlbnRzIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCJiYWNrZ3JvdW5kQ29sb3JMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsInN0eWxlIiwicmVtb3ZlUHJvcGVydHkiLCJpIiwibGVuZ3RoIiwiY29sb3IiLCJnZXRBdHRyaWJ1dGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kTGlzdCIsInVybCIsImJhY2tncm91bmRJbWFnZSIsImFsaWdubWVudExpc3QiLCJhbGlnbm1lbnQiLCJ0ZXh0QWxpZ24iLCJjb2x1bW5hckxpc3QiLCJjb2x1bW4iLCJwYXJlbnROb2RlIiwiYm9yZGVyIiwicGF0aCIsIm5hdmlnYXRlIiwic2V0VGltZW91dCIsImVtaXQiLCJ0b3RhbCIsImN1cnJlbnRJbmRleCIsImlzRGVtbyIsInF1ZXJ5U2VsZWN0b3IiLCJuYXYiLCJOYXZpZ2F0aW9uIiwidmlzaWJsZSIsImF1dG9wbGF5Q29udHJvbHMiLCJBdXRvcGxheUNvbnRyb2xzIiwiZGVtb1VyaSIsImxvYWQiLCJpc0RlYnVnZ2VyIiwibXlEZWJ1Z2dlciIsIkRlYnVnZ2VyIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsZUFBZSxLQUFvRCxvQkFBb0IsU0FBNEQsQ0FBQyxpQkFBaUIsYUFBYSw4RUFBOEUsZ0JBQWdCLGFBQWEscUdBQXFHLGFBQWEsZ0ZBQWdGLGtCQUFrQiw0Z0JBQTRnQixjQUFjLHVFQUF1RSxjQUFjLDZDQUE2QyxnQkFBZ0IsaUJBQWlCLGdCQUFnQixtQkFBbUIsa0ZBQWtGLGtCQUFrQixTQUFTLE9BQU8scUZBQXFGLDJDQUEyQywrR0FBK0csd0ZBQXdGLHNFQUFzRSxzQkFBc0Isa0NBQWtDLFlBQVksTUFBTSxZQUFZLDBCQUEwQixxQkFBcUIsU0FBUyxFQUFFLGFBQWEsZ0JBQWdCLHdC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QTBDLE1BQTVELEVBQW9FO0FBQ25FLE1BQU00QixVQUFVLEdBQUcsSUFBSUMsdURBQUosQ0FBYUYsVUFBYixDQUFuQjtBQUNBLEM7Ozs7Ozs7Ozs7O0FDdEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkQ7Ozs7Ozs7Ozs7O0FDaENBO0FBQ0E7QUFDQTtBQUNBLHNCOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLHNCOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLHNCOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLHNCOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLHNCOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLHNCOzs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBLHNCOzs7Ozs7Ozs7OztBQ0hBO0FBQ0EseU9BQXlPO0FBQ3pPO0FBQ0Esc0I7Ozs7Ozs7Ozs7O0FDSEE7QUFDQSwrUUFBK1EsVUFBVSxpQkFBaUIsaUJBQWlCLFdBQVc7QUFDdFU7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBLHFTQUFxUyxrQkFBa0IsZUFBZSxtQkFBbUIsY0FBYyxtQkFBbUIseURBQXlELFlBQVkseUdBQXlHLHFCQUFxQixhQUFhLGdCQUFnQix1TkFBdU4sZ0JBQWdCLDhMQUE4TCxnQkFBZ0Isd0tBQXdLLGdCQUFnQjtBQUN2c0M7QUFDQSxzQjs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQSxzQiIsImZpbGUiOiJ2YXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanMvdmFzdC5qc1wiKTtcbiIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKHQpOmUuTmF2aWdvPXQoKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBlPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9O2Z1bmN0aW9uIHQoKXtyZXR1cm4hKFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3d8fCF3aW5kb3cuaGlzdG9yeXx8IXdpbmRvdy5oaXN0b3J5LnB1c2hTdGF0ZSl9ZnVuY3Rpb24gbihlLG4sbyl7dGhpcy5yb290PW51bGwsdGhpcy5fcm91dGVzPVtdLHRoaXMuX3VzZUhhc2g9bix0aGlzLl9oYXNoPXZvaWQgMD09PW8/XCIjXCI6byx0aGlzLl9wYXVzZWQ9ITEsdGhpcy5fZGVzdHJveWVkPSExLHRoaXMuX2xhc3RSb3V0ZVJlc29sdmVkPW51bGwsdGhpcy5fbm90Rm91bmRIYW5kbGVyPW51bGwsdGhpcy5fZGVmYXVsdEhhbmRsZXI9bnVsbCx0aGlzLl91c2VQdXNoU3RhdGU9IW4mJnQoKSx0aGlzLl9vbkxvY2F0aW9uQ2hhbmdlPXRoaXMuX29uTG9jYXRpb25DaGFuZ2UuYmluZCh0aGlzKSx0aGlzLl9nZW5lcmljSG9va3M9bnVsbCx0aGlzLl9oaXN0b3J5QVBJVXBkYXRlTWV0aG9kPVwicHVzaFN0YXRlXCIsZT90aGlzLnJvb3Q9bj9lLnJlcGxhY2UoL1xcLyQvLFwiL1wiK3RoaXMuX2hhc2gpOmUucmVwbGFjZSgvXFwvJC8sXCJcIik6biYmKHRoaXMucm9vdD10aGlzLl9jTG9jKCkuc3BsaXQodGhpcy5faGFzaClbMF0ucmVwbGFjZSgvXFwvJC8sXCIvXCIrdGhpcy5faGFzaCkpLHRoaXMuX2xpc3RlbigpLHRoaXMudXBkYXRlUGFnZUxpbmtzKCl9ZnVuY3Rpb24gbyhlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIFJlZ0V4cD9lOmUucmVwbGFjZSgvXFwvKyQvLFwiXCIpLnJlcGxhY2UoL15cXC8rLyxcIl4vXCIpfWZ1bmN0aW9uIGkoZSl7cmV0dXJuIGUucmVwbGFjZSgvXFwvJC8sXCJcIikuc3BsaXQoXCIvXCIpLmxlbmd0aH1mdW5jdGlvbiBzKGUsdCl7cmV0dXJuIGkodCktaShlKX1mdW5jdGlvbiByKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybihhcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06W10pLm1hcChmdW5jdGlvbih0KXt2YXIgaT1mdW5jdGlvbihlKXt2YXIgdD1bXTtyZXR1cm57cmVnZXhwOmUgaW5zdGFuY2VvZiBSZWdFeHA/ZTpuZXcgUmVnRXhwKGUucmVwbGFjZShuLlBBUkFNRVRFUl9SRUdFWFAsZnVuY3Rpb24oZSxvLGkpe3JldHVybiB0LnB1c2goaSksbi5SRVBMQUNFX1ZBUklBQkxFX1JFR0VYUH0pLnJlcGxhY2Uobi5XSUxEQ0FSRF9SRUdFWFAsbi5SRVBMQUNFX1dJTERDQVJEKStuLkZPTExPV0VEX0JZX1NMQVNIX1JFR0VYUCxuLk1BVENIX1JFR0VYUF9GTEFHUykscGFyYW1OYW1lczp0fX0obyh0LnJvdXRlKSkscz1pLnJlZ2V4cCxyPWkucGFyYW1OYW1lcyxhPWUucmVwbGFjZSgvXlxcLysvLFwiL1wiKS5tYXRjaChzKSxoPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIDA9PT10Lmxlbmd0aD9udWxsOmU/ZS5zbGljZSgxLGUubGVuZ3RoKS5yZWR1Y2UoZnVuY3Rpb24oZSxuLG8pe3JldHVybiBudWxsPT09ZSYmKGU9e30pLGVbdFtvXV09ZGVjb2RlVVJJQ29tcG9uZW50KG4pLGV9LG51bGwpOm51bGx9KGEscik7cmV0dXJuISFhJiZ7bWF0Y2g6YSxyb3V0ZTp0LHBhcmFtczpofX0pLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZX0pfShlLHQpWzBdfHwhMX1mdW5jdGlvbiBhKGUsdCl7dmFyIG49dC5tYXAoZnVuY3Rpb24odCl7cmV0dXJuXCJcIj09PXQucm91dGV8fFwiKlwiPT09dC5yb3V0ZT9lOmUuc3BsaXQobmV3IFJlZ0V4cCh0LnJvdXRlK1wiKCR8LylcIikpWzBdfSksaT1vKGUpO3JldHVybiBuLmxlbmd0aD4xP24ucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUubGVuZ3RoPnQubGVuZ3RoJiYoZT10KSxlfSxuWzBdKToxPT09bi5sZW5ndGg/blswXTppfWZ1bmN0aW9uIGgoZSxuLG8pe3ZhciBpLHM9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc3BsaXQoL1xcPyguKik/JC8pWzBdfTtyZXR1cm4gdm9pZCAwPT09byYmKG89XCIjXCIpLHQoKSYmIW4/cyhlKS5zcGxpdChvKVswXTooaT1lLnNwbGl0KG8pKS5sZW5ndGg+MT9zKGlbMV0pOnMoaVswXSl9ZnVuY3Rpb24gdSh0LG4sbyl7aWYobiYmXCJvYmplY3RcIj09PSh2b2lkIDA9PT1uP1widW5kZWZpbmVkXCI6ZShuKSkpe2lmKG4uYmVmb3JlKXJldHVybiB2b2lkIG4uYmVmb3JlKGZ1bmN0aW9uKCl7KCEoYXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0pfHxhcmd1bWVudHNbMF0pJiYodCgpLG4uYWZ0ZXImJm4uYWZ0ZXIobykpfSxvKTtpZihuLmFmdGVyKXJldHVybiB0KCksdm9pZChuLmFmdGVyJiZuLmFmdGVyKG8pKX10KCl9cmV0dXJuIG4ucHJvdG90eXBlPXtoZWxwZXJzOnttYXRjaDpyLHJvb3Q6YSxjbGVhbjpvLGdldE9ubHlVUkw6aH0sbmF2aWdhdGU6ZnVuY3Rpb24oZSx0KXt2YXIgbjtyZXR1cm4gZT1lfHxcIlwiLHRoaXMuX3VzZVB1c2hTdGF0ZT8obj0obj0odD9cIlwiOnRoaXMuX2dldFJvb3QoKStcIi9cIikrZS5yZXBsYWNlKC9eXFwvKy8sXCIvXCIpKS5yZXBsYWNlKC8oW146XSkoXFwvezIsfSkvZyxcIiQxL1wiKSxoaXN0b3J5W3RoaXMuX2hpc3RvcnlBUElVcGRhdGVNZXRob2RdKHt9LFwiXCIsbiksdGhpcy5yZXNvbHZlKCkpOlwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJihlPWUucmVwbGFjZShuZXcgUmVnRXhwKFwiXlwiK3RoaXMuX2hhc2gpLFwiXCIpLHdpbmRvdy5sb2NhdGlvbi5ocmVmPXdpbmRvdy5sb2NhdGlvbi5ocmVmLnJlcGxhY2UoLyMkLyxcIlwiKS5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5faGFzaCtcIi4qJFwiKSxcIlwiKSt0aGlzLl9oYXNoK2UpLHRoaXN9LG9uOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PXRoaXMsbj1hcmd1bWVudHMubGVuZ3RoLG89QXJyYXkobiksaT0wO2k8bjtpKyspb1tpXT1hcmd1bWVudHNbaV07aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygb1swXSl0aGlzLl9kZWZhdWx0SGFuZGxlcj17aGFuZGxlcjpvWzBdLGhvb2tzOm9bMV19O2Vsc2UgaWYoby5sZW5ndGg+PTIpaWYoXCIvXCI9PT1vWzBdKXt2YXIgcj1vWzFdO1wib2JqZWN0XCI9PT1lKG9bMV0pJiYocj1vWzFdLnVzZXMpLHRoaXMuX2RlZmF1bHRIYW5kbGVyPXtoYW5kbGVyOnIsaG9va3M6b1syXX19ZWxzZSB0aGlzLl9hZGQob1swXSxvWzFdLG9bMl0pO2Vsc2VcIm9iamVjdFwiPT09ZShvWzBdKSYmT2JqZWN0LmtleXMob1swXSkuc29ydChzKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3Qub24oZSxvWzBdW2VdKX0pO3JldHVybiB0aGlzfSxvZmY6ZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPT10aGlzLl9kZWZhdWx0SGFuZGxlciYmZT09PXRoaXMuX2RlZmF1bHRIYW5kbGVyLmhhbmRsZXI/dGhpcy5fZGVmYXVsdEhhbmRsZXI9bnVsbDpudWxsIT09dGhpcy5fbm90Rm91bmRIYW5kbGVyJiZlPT09dGhpcy5fbm90Rm91bmRIYW5kbGVyLmhhbmRsZXImJih0aGlzLl9ub3RGb3VuZEhhbmRsZXI9bnVsbCksdGhpcy5fcm91dGVzPXRoaXMuX3JvdXRlcy5yZWR1Y2UoZnVuY3Rpb24odCxuKXtyZXR1cm4gbi5oYW5kbGVyIT09ZSYmdC5wdXNoKG4pLHR9LFtdKSx0aGlzfSxub3RGb3VuZDpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLl9ub3RGb3VuZEhhbmRsZXI9e2hhbmRsZXI6ZSxob29rczp0fSx0aGlzfSxyZXNvbHZlOmZ1bmN0aW9uKGUpe3ZhciBuLG8saT10aGlzLHM9KGV8fHRoaXMuX2NMb2MoKSkucmVwbGFjZSh0aGlzLl9nZXRSb290KCksXCJcIik7dGhpcy5fdXNlSGFzaCYmKHM9cy5yZXBsYWNlKG5ldyBSZWdFeHAoXCJeL1wiK3RoaXMuX2hhc2gpLFwiL1wiKSk7dmFyIGE9ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc3BsaXQoL1xcPyguKik/JC8pLnNsaWNlKDEpLmpvaW4oXCJcIil9KGV8fHRoaXMuX2NMb2MoKSksbD1oKHMsdGhpcy5fdXNlSGFzaCx0aGlzLl9oYXNoKTtyZXR1cm4hdGhpcy5fcGF1c2VkJiYodGhpcy5fbGFzdFJvdXRlUmVzb2x2ZWQmJmw9PT10aGlzLl9sYXN0Um91dGVSZXNvbHZlZC51cmwmJmE9PT10aGlzLl9sYXN0Um91dGVSZXNvbHZlZC5xdWVyeT8odGhpcy5fbGFzdFJvdXRlUmVzb2x2ZWQuaG9va3MmJnRoaXMuX2xhc3RSb3V0ZVJlc29sdmVkLmhvb2tzLmFscmVhZHkmJnRoaXMuX2xhc3RSb3V0ZVJlc29sdmVkLmhvb2tzLmFscmVhZHkodGhpcy5fbGFzdFJvdXRlUmVzb2x2ZWQucGFyYW1zKSwhMSk6KG89cihsLHRoaXMuX3JvdXRlcykpPyh0aGlzLl9jYWxsTGVhdmUoKSx0aGlzLl9sYXN0Um91dGVSZXNvbHZlZD17dXJsOmwscXVlcnk6YSxob29rczpvLnJvdXRlLmhvb2tzLHBhcmFtczpvLnBhcmFtcyxuYW1lOm8ucm91dGUubmFtZX0sbj1vLnJvdXRlLmhhbmRsZXIsdShmdW5jdGlvbigpe3UoZnVuY3Rpb24oKXtvLnJvdXRlLnJvdXRlIGluc3RhbmNlb2YgUmVnRXhwP24uYXBwbHkodm9pZCAwLG8ubWF0Y2guc2xpY2UoMSxvLm1hdGNoLmxlbmd0aCkpOm4oby5wYXJhbXMsYSl9LG8ucm91dGUuaG9va3Msby5wYXJhbXMsaS5fZ2VuZXJpY0hvb2tzKX0sdGhpcy5fZ2VuZXJpY0hvb2tzLG8ucGFyYW1zKSxvKTp0aGlzLl9kZWZhdWx0SGFuZGxlciYmKFwiXCI9PT1sfHxcIi9cIj09PWx8fGw9PT10aGlzLl9oYXNofHxmdW5jdGlvbihlLG4sbyl7aWYodCgpJiYhbilyZXR1cm4hMTtpZighZS5tYXRjaChvKSlyZXR1cm4hMTt2YXIgaT1lLnNwbGl0KG8pO3JldHVybiBpLmxlbmd0aDwyfHxcIlwiPT09aVsxXX0obCx0aGlzLl91c2VIYXNoLHRoaXMuX2hhc2gpKT8odShmdW5jdGlvbigpe3UoZnVuY3Rpb24oKXtpLl9jYWxsTGVhdmUoKSxpLl9sYXN0Um91dGVSZXNvbHZlZD17dXJsOmwscXVlcnk6YSxob29rczppLl9kZWZhdWx0SGFuZGxlci5ob29rc30saS5fZGVmYXVsdEhhbmRsZXIuaGFuZGxlcihhKX0saS5fZGVmYXVsdEhhbmRsZXIuaG9va3MpfSx0aGlzLl9nZW5lcmljSG9va3MpLCEwKToodGhpcy5fbm90Rm91bmRIYW5kbGVyJiZ1KGZ1bmN0aW9uKCl7dShmdW5jdGlvbigpe2kuX2NhbGxMZWF2ZSgpLGkuX2xhc3RSb3V0ZVJlc29sdmVkPXt1cmw6bCxxdWVyeTphLGhvb2tzOmkuX25vdEZvdW5kSGFuZGxlci5ob29rc30saS5fbm90Rm91bmRIYW5kbGVyLmhhbmRsZXIoYSl9LGkuX25vdEZvdW5kSGFuZGxlci5ob29rcyl9LHRoaXMuX2dlbmVyaWNIb29rcyksITEpKX0sZGVzdHJveTpmdW5jdGlvbigpe3RoaXMuX3JvdXRlcz1bXSx0aGlzLl9kZXN0cm95ZWQ9ITAsdGhpcy5fbGFzdFJvdXRlUmVzb2x2ZWQ9bnVsbCx0aGlzLl9nZW5lcmljSG9va3M9bnVsbCxjbGVhclRpbWVvdXQodGhpcy5fbGlzdGVuaW5nSW50ZXJ2YWwpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJih3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInBvcHN0YXRlXCIsdGhpcy5fb25Mb2NhdGlvbkNoYW5nZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsdGhpcy5fb25Mb2NhdGlvbkNoYW5nZSkpfSx1cGRhdGVQYWdlTGlua3M6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO1widW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmdGhpcy5fZmluZExpbmtzKCkuZm9yRWFjaChmdW5jdGlvbih0KXt0Lmhhc0xpc3RlbmVyQXR0YWNoZWR8fCh0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKG4pe2lmKChuLmN0cmxLZXl8fG4ubWV0YUtleSkmJlwiYVwiPT1uLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpcmV0dXJuITE7dmFyIG89ZS5nZXRMaW5rUGF0aCh0KTtlLl9kZXN0cm95ZWR8fChuLnByZXZlbnREZWZhdWx0KCksZS5uYXZpZ2F0ZShvLnJlcGxhY2UoL1xcLyskLyxcIlwiKS5yZXBsYWNlKC9eXFwvKy8sXCIvXCIpKSl9KSx0Lmhhc0xpc3RlbmVyQXR0YWNoZWQ9ITApfSl9LGdlbmVyYXRlOmZ1bmN0aW9uKGUpe3ZhciB0PWFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdP2FyZ3VtZW50c1sxXTp7fSxuPXRoaXMuX3JvdXRlcy5yZWR1Y2UoZnVuY3Rpb24obixvKXt2YXIgaTtpZihvLm5hbWU9PT1lKWZvcihpIGluIG49by5yb3V0ZSx0KW49bi50b1N0cmluZygpLnJlcGxhY2UoXCI6XCIraSx0W2ldKTtyZXR1cm4gbn0sXCJcIik7cmV0dXJuIHRoaXMuX3VzZUhhc2g/dGhpcy5faGFzaCtuOm59LGxpbms6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMuX2dldFJvb3QoKStlfSxwYXVzZTpmdW5jdGlvbigpe3ZhciBlPSEoYXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0pfHxhcmd1bWVudHNbMF07dGhpcy5fcGF1c2VkPWUsdGhpcy5faGlzdG9yeUFQSVVwZGF0ZU1ldGhvZD1lP1wicmVwbGFjZVN0YXRlXCI6XCJwdXNoU3RhdGVcIn0scmVzdW1lOmZ1bmN0aW9uKCl7dGhpcy5wYXVzZSghMSl9LGhpc3RvcnlBUElVcGRhdGVNZXRob2Q6ZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMD09PWU/dGhpcy5faGlzdG9yeUFQSVVwZGF0ZU1ldGhvZDoodGhpcy5faGlzdG9yeUFQSVVwZGF0ZU1ldGhvZD1lLGUpfSxkaXNhYmxlSWZBUElOb3RBdmFpbGFibGU6ZnVuY3Rpb24oKXt0KCl8fHRoaXMuZGVzdHJveSgpfSxsYXN0Um91dGVSZXNvbHZlZDpmdW5jdGlvbigpe3JldHVybiB0aGlzLl9sYXN0Um91dGVSZXNvbHZlZH0sZ2V0TGlua1BhdGg6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKX0saG9va3M6ZnVuY3Rpb24oZSl7dGhpcy5fZ2VuZXJpY0hvb2tzPWV9LF9hZGQ6ZnVuY3Rpb24odCl7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOm51bGwsbz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06bnVsbDtyZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9ZW5jb2RlVVJJKHQpKSx0aGlzLl9yb3V0ZXMucHVzaChcIm9iamVjdFwiPT09KHZvaWQgMD09PW4/XCJ1bmRlZmluZWRcIjplKG4pKT97cm91dGU6dCxoYW5kbGVyOm4udXNlcyxuYW1lOm4uYXMsaG9va3M6b3x8bi5ob29rc306e3JvdXRlOnQsaGFuZGxlcjpuLGhvb2tzOm99KSx0aGlzLl9hZGR9LF9nZXRSb290OmZ1bmN0aW9uKCl7cmV0dXJuIG51bGwhPT10aGlzLnJvb3Q/dGhpcy5yb290Oih0aGlzLnJvb3Q9YSh0aGlzLl9jTG9jKCkuc3BsaXQoXCI/XCIpWzBdLHRoaXMuX3JvdXRlcyksdGhpcy5yb290KX0sX2xpc3RlbjpmdW5jdGlvbigpe3ZhciBlPXRoaXM7aWYodGhpcy5fdXNlUHVzaFN0YXRlKXdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicG9wc3RhdGVcIix0aGlzLl9vbkxvY2F0aW9uQ2hhbmdlKTtlbHNlIGlmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cmJlwib25oYXNoY2hhbmdlXCJpbiB3aW5kb3cpd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsdGhpcy5fb25Mb2NhdGlvbkNoYW5nZSk7ZWxzZXt2YXIgdD10aGlzLl9jTG9jKCksbj12b2lkIDAsbz12b2lkIDA7KG89ZnVuY3Rpb24oKXtuPWUuX2NMb2MoKSx0IT09biYmKHQ9bixlLnJlc29sdmUoKSksZS5fbGlzdGVuaW5nSW50ZXJ2YWw9c2V0VGltZW91dChvLDIwMCl9KSgpfX0sX2NMb2M6ZnVuY3Rpb24oKXtyZXR1cm5cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3ZvaWQgMCE9PXdpbmRvdy5fX05BVklHT19XSU5ET1dfTE9DQVRJT05fTU9DS19fP3dpbmRvdy5fX05BVklHT19XSU5ET1dfTE9DQVRJT05fTU9DS19fOm8od2luZG93LmxvY2F0aW9uLmhyZWYpOlwiXCJ9LF9maW5kTGlua3M6ZnVuY3Rpb24oKXtyZXR1cm5bXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1uYXZpZ29dXCIpKX0sX29uTG9jYXRpb25DaGFuZ2U6ZnVuY3Rpb24oKXt0aGlzLnJlc29sdmUoKX0sX2NhbGxMZWF2ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMuX2xhc3RSb3V0ZVJlc29sdmVkO2UmJmUuaG9va3MmJmUuaG9va3MubGVhdmUmJmUuaG9va3MubGVhdmUoZS5wYXJhbXMpfX0sbi5QQVJBTUVURVJfUkVHRVhQPS8oWzoqXSkoXFx3KykvZyxuLldJTERDQVJEX1JFR0VYUD0vXFwqL2csbi5SRVBMQUNFX1ZBUklBQkxFX1JFR0VYUD1cIihbXi9dKylcIixuLlJFUExBQ0VfV0lMRENBUkQ9XCIoPzouKilcIixuLkZPTExPV0VEX0JZX1NMQVNIX1JFR0VYUD1cIig/Oi8kfCQpXCIsbi5NQVRDSF9SRUdFWFBfRkxBR1M9XCJcIixufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1uYXZpZ28ubWluLmpzLm1hcFxuIiwiY2xhc3MgQXV0b3BsYXkge1xuXHRjb25zdHJ1Y3Rvcih7IHJvdXRlciB9ID0ge30pIHtcblx0XHR0aGlzLnN0YXRlID0ge307XG5cblx0XHR0aGlzLnJvdXRlciA9IHJvdXRlcjtcblx0XHR0aGlzLnJvdXRlci5hZGRFdmVudExpc3RlbmVyKCdvblJlYWR5JywgKGFyZ3MpID0+IHRoaXMub25Sb3V0ZXJSZWFkeShhcmdzKSk7XG5cdFx0dGhpcy5yb3V0ZXIuYWRkRXZlbnRMaXN0ZW5lcignb25Sb3V0ZUNoYW5nZScsIChhcmdzKSA9PlxuXHRcdFx0dGhpcy5vblJvdXRlQ2hhbmdlKGFyZ3MpXG5cdFx0KTtcblx0fVxuXG5cdGVuYWJsZSgpIHtcblx0XHR0aGlzLnN0YXRlLmVuYWJsZWQgPSB0cnVlO1xuXHRcdHRoaXMuc3RhcnRBdXRvcGxheSgpO1xuXHR9XG5cblx0ZGlzYWJsZSgpIHtcblx0XHR0aGlzLnN0YXRlLmVuYWJsZWQgPSBmYWxzZTtcblx0XHR0aGlzLnN0b3BBdXRvcGxheSgpO1xuXHR9XG5cblx0dG9nZ2xlKCkge1xuXHRcdHRoaXMuc3RhdGUuZW5hYmxlZCA/IHRoaXMuZGlzYWJsZSgpIDogdGhpcy5lbmFibGUoKTtcblx0XHRpZiAodGhpcy5zdGF0ZS5lbmFibGVkKSB7XG5cdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHR9XG5cdH1cblxuXHRvbktleURvd24oZSkge1xuXHRcdHN3aXRjaCAoZS5jb2RlKSB7XG5cdFx0XHRjYXNlICdTcGFjZSc6XG5cdFx0XHRcdHRoaXMudG9nZ2xlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0fVxuXG5cdG9uUm91dGVyUmVhZHkoeyBjdXJyZW50SW5kZXgsIHRvdGFsLCBkYXRhLCBzbGlkZU1vZGVsIH0pIHtcblx0XHRjb25zdCBpc1ZpZGVvID0gdGhpcy5nZXRJc1ZpZGVvKCk7XG5cdFx0Y29uc3Qgc2hvdWxkQXV0b3BsYXkgPSBkYXRhICYmIGRhdGEuYXV0b3BsYXkgJiYgZGF0YS5hdXRvcGxheS5lbmFibGVkO1xuXHRcdGNvbnN0IGF1dG9wbGF5VGltZW91dCA9XG5cdFx0XHQoc2hvdWxkQXV0b3BsYXkgJiYgZGF0YSAmJiBkYXRhLmF1dG9wbGF5ICYmIGRhdGEuYXV0b3BsYXkudGltZW91dCkgfHwgNTtcblx0XHRjb25zdCBsb29wID0gZGF0YSAmJiBkYXRhLmF1dG9wbGF5ICYmIGRhdGEuYXV0b3BsYXkubG9vcDtcblx0XHRjb25zdCBraW9zayA9IGRhdGEgJiYgZGF0YS5hdXRvcGxheSAmJiBkYXRhLmF1dG9wbGF5Lmtpb3NrO1xuXG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdC4uLnRoaXMuc3RhdGUsXG5cdFx0XHRkYXRhLFxuXHRcdFx0Y3VycmVudEluZGV4LFxuXHRcdFx0dG90YWwsXG5cdFx0XHRsb29wLFxuXHRcdFx0a2lvc2ssXG5cdFx0XHRhdXRvcGxheVRpbWVvdXQsXG5cdFx0XHRzbGlkZU1vZGVsLFxuXHRcdH07XG5cblx0XHRpZiAoIWtpb3NrKSB7XG5cdFx0XHR0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG5cdFx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5vbktleURvd24pO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcblx0XHR9XG5cblx0XHRpZiAoc2hvdWxkQXV0b3BsYXkpIHtcblx0XHRcdGlmICghaXNWaWRlbykge1xuXHRcdFx0XHR0aGlzLmVuYWJsZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHRoaXMuc3RhdGUuZW5hYmxlZCA9IHRydWU7XG5cdFx0XHRcdHRoaXMuYXV0b3BsYXlWaWRlbygpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHN0YXJ0QXV0b3BsYXkoKSB7XG5cdFx0Y29uc3QgeyBhdXRvcGxheVRpbWVvdXQgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3QgaXNWaWRlbyA9IHRoaXMuZ2V0SXNWaWRlbygpO1xuXG5cdFx0Y2xlYXJJbnRlcnZhbCh0aGlzLmF1dG9wbGF5SWQpO1xuXG5cdFx0aWYgKCFpc1ZpZGVvKSB7XG5cdFx0XHR0aGlzLmF1dG9wbGF5SWQgPSBzZXRJbnRlcnZhbChcblx0XHRcdFx0KCkgPT4gdGhpcy5hZHZhbmNlKCksXG5cdFx0XHRcdGF1dG9wbGF5VGltZW91dCAqIDEwMDBcblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0YWR2YW5jZSgpIHtcblx0XHRjb25zdCB7IGN1cnJlbnRJbmRleCwgdG90YWwsIGxvb3AsIHNsaWRlTW9kZWwgfSA9IHRoaXMuc3RhdGU7XG5cdFx0Y29uc3QgaXNWaWRlbyA9IHNsaWRlTW9kZWwgJiYgc2xpZGVNb2RlbC50eXBlID09PSAndmlkZW8nO1xuXG5cdFx0aWYgKGlzVmlkZW8pIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb25zdCBuZXh0SW5kZXggPVxuXHRcdFx0Y3VycmVudEluZGV4ICsgMSA8IHRvdGFsID8gY3VycmVudEluZGV4ICsgMSA6IGxvb3AgPyAwIDogY3VycmVudEluZGV4O1xuXHRcdGlmIChjdXJyZW50SW5kZXggIT09IG5leHRJbmRleCkge1xuXHRcdFx0dGhpcy5zZXRJbmRleChuZXh0SW5kZXgpO1xuXHRcdH1cblx0fVxuXG5cdHN0b3BBdXRvcGxheSgpIHtcblx0XHRjbGVhckludGVydmFsKHRoaXMuYXV0b3BsYXlJZCk7XG5cdH1cblxuXHRzZXRJbmRleChpbmRleCkge1xuXHRcdHRoaXMuc3RhdGUuY3VycmVudEluZGV4ID0gaW5kZXg7XG5cblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShgL3NsaWRlcy9zbGlkZS0ke2luZGV4ICsgMX1gKTtcblx0fVxuXG5cdGdldElzVmlkZW8oKSB7XG5cdFx0Y29uc3QgaXNWaWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXR5cGU9XCJ2aWRlb1wiXScpLmxlbmd0aDtcblxuXHRcdHJldHVybiBpc1ZpZGVvO1xuXHR9XG5cblx0b25Sb3V0ZUNoYW5nZSh7IHNsaWRlTW9kZWwgfSkge1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHQuLi50aGlzLnN0YXRlLFxuXHRcdFx0c2xpZGVNb2RlbCxcblx0XHRcdGN1cnJlbnRJbmRleDogc2xpZGVNb2RlbC5pbmRleCxcblx0XHR9O1xuXG5cdFx0Y29uc3QgeyBkYXRhIH0gPSB0aGlzLnN0YXRlO1xuXHRcdGNvbnN0IHNob3VsZEF1dG9wbGF5ID0gZGF0YSAmJiBkYXRhLmF1dG9wbGF5ICYmIGRhdGEuYXV0b3BsYXkuZW5hYmxlZDtcblx0XHRpZiAoc2hvdWxkQXV0b3BsYXkgJiYgdGhpcy5nZXRJc1ZpZGVvKCkpIHtcblx0XHRcdHRoaXMuYXV0b3BsYXlWaWRlbygpO1xuXHRcdH1cblx0fVxuXG5cdGF1dG9wbGF5VmlkZW8oKSB7XG5cdFx0Y29uc3Qgd2FzRW5hYmxlZCA9IHRoaXMuc3RhdGUuZW5hYmxlZDtcblx0XHR0aGlzLmRpc2FibGUoKTtcblxuXHRcdC8vIGxpc3RlbiB0byB2aWRlbyBldmVudHNcblx0XHRjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXR5cGU9XCJ2aWRlb1wiXWApO1xuXG5cdFx0aWYgKHZpZGVvKSB7XG5cdFx0XHRjb25zdCBpZnJhbWUgPSB2aWRlby5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcblx0XHRcdGNvbnN0IHNyYyA9IGlmcmFtZSAmJiBpZnJhbWUuZ2V0QXR0cmlidXRlKCdzcmMnKTtcblxuXHRcdFx0bGV0IHByb3ZpZGVyO1xuXHRcdFx0aWYgKCFzcmMpIHtcblx0XHRcdFx0cHJvdmlkZXIgPSAnbG9jYWwnO1xuXHRcdFx0fSBlbHNlIGlmIChzcmMuaW5kZXhPZignaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL3ZpZGVvJykgPT09IDApIHtcblx0XHRcdFx0cHJvdmlkZXIgPSAndmltZW8nO1xuXHRcdFx0fSBlbHNlIGlmIChzcmMuaW5kZXhPZignaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJykgPT09IDApIHtcblx0XHRcdFx0cHJvdmlkZXIgPSAneW91dHViZSc7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwcm92aWRlciA9PT0gJ2xvY2FsJykge1xuXHRcdFx0XHR0aGlzLmNyZWF0ZUxvY2FsUGxheWVyKHsgd2FzRW5hYmxlZCB9KTtcblx0XHRcdH0gZWxzZSBpZiAocHJvdmlkZXIgPT09ICd2aW1lbycpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVWaW1lb1BsYXllcih7IHdhc0VuYWJsZWQgfSk7XG5cdFx0XHR9IGVsc2UgaWYgKHByb3ZpZGVyID09PSAneW91dHViZScpIHtcblx0XHRcdFx0dGhpcy5jcmVhdGVZb3V0dWJlUGxheWVyKHsgd2FzRW5hYmxlZCB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjcmVhdGVMb2NhbFBsYXllcih7IHdhc0VuYWJsZWQgPSBmYWxzZSB9ID0ge30pIHtcblx0XHRjb25zdCB2aWRlbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXR5cGU9XCJ2aWRlb1wiXSB2aWRlb2ApO1xuXG5cdFx0aWYgKHRoaXMuc3RhdGUua2lvc2spIHtcblx0XHRcdHZpZGVvLnJlbW92ZUF0dHJpYnV0ZSgnY29udHJvbHMnKTtcblx0XHR9XG5cblx0XHR2aWRlby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKCdsb2NhbCB2aWRlbyBlbmRlZCAnLCB3YXNFbmFibGVkKTtcblx0XHRcdGlmICh3YXNFbmFibGVkKSB7XG5cdFx0XHRcdHRoaXMuZW5hYmxlKCk7XG5cdFx0XHRcdHRoaXMuYWR2YW5jZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdGNyZWF0ZVZpbWVvUGxheWVyKHsgd2FzRW5hYmxlZCA9IGZhbHNlIH0gPSB7fSkge1xuXHRcdGNvbnN0IHZpZGVvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdHlwZT1cInZpZGVvXCJdYCk7XG5cdFx0Y29uc3QgaWZyYW1lID0gdmlkZW8ucXVlcnlTZWxlY3RvcignaWZyYW1lJyk7XG5cblx0XHRsZXQgc3JjID0gaWZyYW1lLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cblx0XHRjb25zb2xlLmxvZygna2lvc2sgJywgdGhpcy5zdGF0ZS5raW9zayk7XG5cblx0XHRpZiAodGhpcy5zdGF0ZS5raW9zaykge1xuXHRcdFx0c3JjID0gc3JjLmluZGV4T2YoJz8nKSA9PT0gLTEgPyBzcmMuY29uY2F0KCc/JykgOiBzcmMuY29uY2F0KCcmJyk7XG5cdFx0XHRzcmMgPSBzcmMucmVwbGFjZSgnY29udHJvbHM9MScsICcnKS5jb25jYXQoJ2NvbnRyb2xzPTAnKTtcblx0XHRcdGlmcmFtZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNyYyk7XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGxheWVyID0gbmV3IFZpbWVvLlBsYXllcihpZnJhbWUpO1xuXG5cdFx0Ly8gYXV0b3BsYXkgYXQgZW5kIG9yIGFmdGVyIHRpbWVvdXRcblx0XHRjb25zdCBhdXRvcGxheVRpbWVvdXQgPSB2aWRlby5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXV0b3BsYXktdGltZW91dCcpO1xuXG5cdFx0Ly8gaWYgYXV0b3BsYXlUaW1lb3V0IGlzIGEgbnVtYmVyLFxuXHRcdC8vIHVzZSB0aGF0IHZhbHVlIHRvIGFkdmFuY2Vcblx0XHQvLyBvdGhlcndpc2Ugd2FpdCB1bnRpbCBlbmQgb2YgdmlkZW9cblx0XHRjb25zdCBhdXRvcGxheVRpbWVvdXRJc051bWJlciA9XG5cdFx0XHRhdXRvcGxheVRpbWVvdXQgJiYgYXV0b3BsYXlUaW1lb3V0ID09IHBhcnNlSW50KGF1dG9wbGF5VGltZW91dCwgMTApO1xuXG5cdFx0aWYgKGF1dG9wbGF5VGltZW91dElzTnVtYmVyKSB7XG5cdFx0XHRjbGVhckludGVydmFsKHRoaXMuYXV0b3BsYXlJZCk7XG5cdFx0XHR0aGlzLmF1dG9wbGF5SWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRcdHRoaXMuYWR2YW5jZSgpO1xuXHRcdFx0XHR0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcblx0XHRcdH0sIGF1dG9wbGF5VGltZW91dCAqIDEwMDApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB3aGVuIHRoZSB2aWRlbyBoYXMgZW1pdHRlZCBpdHMgY29tcGxldGUgZXZlbnRcblx0XHRcdC8vIGVuYWJsZSBhdXRvcGxheS5cblx0XHRcdHBsYXllci5vbignZW5kZWQnLCAoZGF0YSkgPT4ge1xuXHRcdFx0XHQvLyBidXQgb25seSBpZiBhdXRvcGxheSB3YXMgZW5hYmxlZFxuXHRcdFx0XHRjb25zb2xlLmxvZygndmltZW8gZW5kZWQgJywgd2FzRW5hYmxlZCk7XG5cdFx0XHRcdGlmICh3YXNFbmFibGVkKSB7XG5cdFx0XHRcdFx0dGhpcy5lbmFibGUoKTtcblx0XHRcdFx0XHR0aGlzLmFkdmFuY2UoKTtcblx0XHRcdFx0XHR0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0b25ZVFBsYXllclN0YXRlQ2hhbmdlKHsgd2FzRW5hYmxlZCwgZXZlbnQgfSkge1xuXHRcdGNvbnNvbGUubG9nKCd5dCBlbmRlZCAnLCB3YXNFbmFibGVkKTtcblx0XHRpZiAoZXZlbnQuZGF0YSA9PT0gMCAmJiB3YXNFbmFibGVkKSB7XG5cdFx0XHR0aGlzLmVuYWJsZSgpO1xuXHRcdFx0dGhpcy5hZHZhbmNlKCk7XG5cdFx0XHR0aGlzLnN0YXJ0QXV0b3BsYXkoKTtcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVZb3V0dWJlUGxheWVyKHsgd2FzRW5hYmxlZCA9IGZhbHNlIH0gPSB7fSkge1xuXHRcdGNvbnNvbGUubG9nKCdjcmVhdGluZyB5b3V0dWJlIHBsYXllcicpO1xuXG5cdFx0Y29uc3QgdmlkZW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10eXBlPVwidmlkZW9cIl1gKTtcblx0XHRjb25zdCBpZnJhbWUgPSB2aWRlby5xdWVyeVNlbGVjdG9yKCdpZnJhbWUnKTtcblx0XHRsZXQgc3JjID0gaWZyYW1lLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG5cdFx0aWYgKHRoaXMuc3RhdGUua2lvc2spIHtcblx0XHRcdHNyYyA9IHNyYy5pbmRleE9mKCc/JykgPT09IC0xID8gc3JjLmNvbmNhdCgnPycpIDogc3JjLmNvbmNhdCgnJicpO1xuXHRcdFx0c3JjID0gc3JjLnJlcGxhY2UoJ2NvbnRyb2xzPTEnLCAnJykuY29uY2F0KCdjb250cm9scz0wJyk7XG5cdFx0XHRpZnJhbWUuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xuXHRcdH1cblxuXHRcdHZhciB0YWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHRhZy5zcmMgPSAnaHR0cHM6Ly93d3cueW91dHViZS5jb20vaWZyYW1lX2FwaSc7XG5cdFx0dmFyIGZpcnN0U2NyaXB0VGFnID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpWzBdO1xuXHRcdGZpcnN0U2NyaXB0VGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhZywgZmlyc3RTY3JpcHRUYWcpO1xuXG5cdFx0dmFyIHBsYXllcjtcblxuXHRcdHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeSA9ICgpID0+IHtcblx0XHRcdHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoJ3l0cGxheWVyJywge1xuXHRcdFx0XHRhdXRvcGxheTogMSxcblx0XHRcdFx0ZXZlbnRzOiB7XG5cdFx0XHRcdFx0Ly8gb25SZWFkeTogb25QbGF5ZXJSZWFkeSxcblx0XHRcdFx0XHRvblN0YXRlQ2hhbmdlOiAoZXZlbnQpID0+XG5cdFx0XHRcdFx0XHR0aGlzLm9uWVRQbGF5ZXJTdGF0ZUNoYW5nZSh7IHdhc0VuYWJsZWQsIGV2ZW50IH0pLFxuXHRcdFx0XHR9LFxuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qXG5cdFx0ZnVuY3Rpb24gb25QbGF5ZXJSZWFkeShldmVudCkge1xuXHRcdFx0Ly8gZXZlbnQudGFyZ2V0LnBsYXlWaWRlbygpO1xuXHRcdH1cblx0XHQqL1xuXG5cdFx0Ly8gYXV0b3BsYXkgYXQgZW5kIG9yIGFmdGVyIHRpbWVvdXRcblx0XHRjb25zdCBhdXRvcGxheVRpbWVvdXQgPSB2aWRlby5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXV0b3BsYXktdGltZW91dCcpO1xuXG5cdFx0Ly8gaWYgYXV0b3BsYXlUaW1lb3V0IGlzIGEgbnVtYmVyLFxuXHRcdC8vIHVzZSB0aGF0IHZhbHVlIHRvIGFkdmFuY2Vcblx0XHQvLyBvdGhlcndpc2Ugd2FpdCB1bnRpbCBlbmQgb2YgdmlkZW9cblx0XHRjb25zdCBhdXRvcGxheVRpbWVvdXRJc051bWJlciA9XG5cdFx0XHRhdXRvcGxheVRpbWVvdXQgPT0gcGFyc2VJbnQoYXV0b3BsYXlUaW1lb3V0LCAxMCk7XG5cblx0XHRpZiAoYXV0b3BsYXlUaW1lb3V0SXNOdW1iZXIpIHtcblx0XHRcdGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvcGxheUlkKTtcblx0XHRcdHRoaXMuYXV0b3BsYXlJZCA9IHNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0dGhpcy5hZHZhbmNlKCk7XG5cdFx0XHRcdHRoaXMuc3RhcnRBdXRvcGxheSgpO1xuXHRcdFx0fSwgYXV0b3BsYXlUaW1lb3V0ICogMTAwMCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHRoZSB2aWRlbyBpcyBhbHJlYWR5IGxpc3RlbmluZ1xuXHRcdFx0Ly8gdG8gaXQncyBvd24gY29tcGxldGUgZXZlbnRcblx0XHRcdC8vIHdpdGggdGhlIHlvdXR1YmUgcGxheWVyIGFwaVxuXHRcdH1cblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5hdXRvcGxheUlkKTtcblx0XHR0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdXRvcGxheTtcbiIsImNsYXNzIERlYnVnZ2VyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IHt9O1xuXG5cdFx0Ly8gY29udGFpbmVyIGRpdlxuXHRcdHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0dGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gJ2RlYnVnZ2VyJztcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcblxuXHRcdHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdFx0dGhpcy5jb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXHRcdHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcblxuXHRcdHRoaXMucmVuZGVyKCk7XG5cblx0XHR2YXIgbXFXYXRjaGVyID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDIwMDBweCknKTtcblx0XHRtcVdhdGNoZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gdGhpcy5yZW5kZXIoKSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0dmFyIG1xV2F0Y2hlciA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWluLXdpZHRoOiAyMDAwcHgpJyk7XG5cdFx0Y29uc3QgaXNWYXN0ID0gbXFXYXRjaGVyLm1hdGNoZXM7XG5cblx0XHRjb25zdCB3ID0gTnVtYmVyKFxuXHRcdFx0ZG9jdW1lbnRcblx0XHRcdFx0LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWFjdHVhbC13aWR0aCcpXG5cdFx0XHRcdC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYWN0dWFsLXdpZHRoJylcblx0XHQpO1xuXG5cdFx0Y29uc3QgaCA9IE51bWJlcihcblx0XHRcdGRvY3VtZW50XG5cdFx0XHRcdC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hY3R1YWwtaGVpZ2h0Jylcblx0XHRcdFx0LmdldEF0dHJpYnV0ZSgnZGF0YS1hY3R1YWwtaGVpZ2h0Jylcblx0XHQpO1xuXG5cdFx0aWYgKCF3IHx8ICFoKSB7XG5cdFx0XHR0aGlzLmNsZWFyKCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgdG90YWxXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRcdGNvbnN0IHRvdGFsSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXHRcdGNvbnN0IHRpbGVXaWR0aCA9IHRvdGFsV2lkdGggLyB3OyAvLyBob3cgd2lkZSBpcyBhIGZvb3Rcblx0XHRjb25zdCB0aWxlSGVpZ2h0ID0gdG90YWxIZWlnaHQgLyBoOyAvLyBob3cgdGFsbCBpcyBhIGZvb3RcblxuXHRcdGlmIChpc1Zhc3QpIHtcblx0XHRcdHRoaXMuY2FudmFzLndpZHRoID0gdGlsZVdpZHRoO1xuXHRcdFx0dGhpcy5jYW52YXMuaGVpZ2h0ID0gdGlsZUhlaWdodDtcblxuXHRcdFx0Ly8gYm90dG9tIGFuZCByaWdodCBsaW5lc1xuXHRcdFx0dGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuXHRcdFx0dGhpcy5jb250ZXh0Lm1vdmVUbygwLCB0aWxlSGVpZ2h0KTtcblx0XHRcdHRoaXMuY29udGV4dC5saW5lVG8oMCwgMCk7XG5cdFx0XHR0aGlzLmNvbnRleHQubGluZVRvKHRpbGVXaWR0aCwgMCk7XG5cdFx0XHR0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG5cblx0XHRcdC8vIHRpY2tzIGV2ZXJ5IDEvNCBmb290IGFsb25nIHggYW5kIHkgYXhpc1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcblx0XHRcdFx0Y29uc3QgeCA9ICh0aWxlV2lkdGggLyA0KSAqIGk7XG5cdFx0XHRcdGNvbnN0IHkgPSAodGlsZUhlaWdodCAvIDQpICogaTtcblx0XHRcdFx0Y29uc3QgeExlbmd0aCA9IGkgPT09IDIgPyA1MCA6IDI1O1xuXHRcdFx0XHRjb25zdCB5TGVuZ3RoID0gaSA9PT0gMiA/IDUwIDogMjU7XG5cdFx0XHRcdHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcblx0XHRcdFx0dGhpcy5jb250ZXh0Lm1vdmVUbygwLCB5KTtcblx0XHRcdFx0dGhpcy5jb250ZXh0LmxpbmVUbyh4TGVuZ3RoLCB5KTtcblx0XHRcdFx0dGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuXG5cdFx0XHRcdHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcblx0XHRcdFx0dGhpcy5jb250ZXh0Lm1vdmVUbyh4LCAwKTtcblx0XHRcdFx0dGhpcy5jb250ZXh0LmxpbmVUbyh4LCB5TGVuZ3RoKTtcblx0XHRcdFx0dGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgZGF0YSA9IHRoaXMuY2FudmFzLnRvRGF0YVVSTCgpO1xuXG5cdFx0XHR0aGlzLmNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBkYXRhICsgJyknO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyB3aGVuIG5vdCBhIHZhc3QgbWVkaWFxdWVyeSxcblx0XHRcdHRoaXMuY2xlYXIoKTtcblx0XHR9XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHRjb25zdCB0b3RhbFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdFx0Y29uc3QgdG90YWxIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cdFx0dGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCB0b3RhbFdpZHRoLCB0b3RhbEhlaWdodCk7XG5cblx0XHR2YXIgZGF0YSA9IHRoaXMuY2FudmFzLnRvRGF0YVVSTCgpO1xuXHRcdHRoaXMuY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoJyArIGRhdGEgKyAnKSc7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVidWdnZXI7XG4iLCIvLyBGcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL211ZGdlLzU4MzAzODJcblxuY2xhc3MgRXZlbnRFbWl0dGVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5ldmVudHMgPSB7fTtcblx0fVxuXG5cdF9nZXRFdmVudExpc3RCeU5hbWUoZXZlbnROYW1lKSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLmV2ZW50c1tldmVudE5hbWVdID09PSAndW5kZWZpbmVkJykge1xuXHRcdFx0dGhpcy5ldmVudHNbZXZlbnROYW1lXSA9IG5ldyBTZXQoKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XG5cdH1cblxuXHRvbihldmVudE5hbWUsIGZuKSB7XG5cdFx0dGhpcy5fZ2V0RXZlbnRMaXN0QnlOYW1lKGV2ZW50TmFtZSkuYWRkKGZuKTtcblx0fVxuXG5cdG9uY2UoZXZlbnROYW1lLCBmbikge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cdFx0Y29uc3Qgb25jZUZuID0gZnVuY3Rpb24oLi4uYXJncykge1xuXHRcdFx0c2VsZi5yZW1vdmVMaXN0ZW5lcihldmVudE5hbWUsIG9uY2VGbik7XG5cdFx0XHRmbi5hcHBseShzZWxmLCBhcmdzKTtcblx0XHR9O1xuXHRcdHRoaXMub24oZXZlbnROYW1lLCBvbmNlRm4pO1xuXHR9XG5cblx0ZW1pdChldmVudE5hbWUsIC4uLmFyZ3MpIHtcblx0XHR0aGlzLl9nZXRFdmVudExpc3RCeU5hbWUoZXZlbnROYW1lKS5mb3JFYWNoKFxuXHRcdFx0ZnVuY3Rpb24oZm4pIHtcblx0XHRcdFx0Zm4uYXBwbHkodGhpcywgYXJncyk7XG5cdFx0XHR9LmJpbmQodGhpcylcblx0XHQpO1xuXHR9XG5cblx0cmVtb3ZlTGlzdGVuZXIoZXZlbnROYW1lLCBmbikge1xuXHRcdHRoaXMuX2dldEV2ZW50TGlzdEJ5TmFtZShldmVudE5hbWUpLmRlbGV0ZShmbik7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXZlbnRFbWl0dGVyO1xuIiwiY2xhc3MgTmF2aWdhdGlvbiB7XG5cdGNvbnN0cnVjdG9yKHsgcm91dGVyLCB2aXNpYmxlID0gZmFsc2UsIGNvbnRhaW5lcklkID0gJ2NvbnRyb2xzJyB9ID0ge30pIHtcblx0XHR0aGlzLnN0YXRlID0geyB2aXNpYmxlIH07XG5cblx0XHR0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKVxuXHRcdFx0PyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZClcblx0XHRcdDogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblx0XHR0aGlzLnJvdXRlciA9IHJvdXRlcjtcblx0XHR0aGlzLnJvdXRlci5hZGRFdmVudExpc3RlbmVyKCdvblJlYWR5JywgKGFyZ3MpID0+IHRoaXMub25Sb3V0ZXJSZWFkeShhcmdzKSk7XG5cdFx0dGhpcy5yb3V0ZXIuYWRkRXZlbnRMaXN0ZW5lcignb25Sb3V0ZUNoYW5nZScsIChhcmdzKSA9PlxuXHRcdFx0dGhpcy5vblJvdXRlQ2hhbmdlKGFyZ3MpXG5cdFx0KTtcblx0fVxuXG5cdHNob3coKSB7XG5cdFx0dGhpcy5zdGF0ZS52aXNpYmxlID0gdHJ1ZTtcblx0XHR0aGlzLnJlbmRlcigpO1xuXHR9XG5cblx0aGlkZSgpIHtcblx0XHR0aGlzLnN0YXRlLnZpc2libGUgPSBmYWxzZTtcblx0XHR0aGlzLmNsZWFyKCk7XG5cdH1cblxuXHRlbmFibGUoKSB7XG5cdFx0dGhpcy5zdGF0ZS5lbmFibGVkID0gdHJ1ZTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9uS2V5RG93bik7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcblxuXHRcdC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG5cdFx0Ly8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlLCBmYWxzZSk7XG5cdH1cblxuXHRkaXNhYmxlKCkge1xuXHRcdC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMub25LZXlEb3duKTtcblxuXHRcdHRoaXMuc3RhdGUuZW5hYmxlZCA9IGZhbHNlO1xuXHR9XG5cblx0b25LZXlEb3duKGUpIHtcblx0XHRzd2l0Y2ggKGUuY29kZSkge1xuXHRcdFx0Y2FzZSAnQXJyb3dSaWdodCc6XG5cdFx0XHRcdHRoaXMubmV4dCgpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgJ0Fycm93TGVmdCc6XG5cdFx0XHRcdHRoaXMucHJldigpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHRuZXh0KCkge1xuXHRcdGNvbnN0IHsgY3VycmVudEluZGV4LCB0b3RhbCB9ID0gdGhpcy5zdGF0ZTtcblx0XHRpZiAoY3VycmVudEluZGV4ICsgMSA8IHRvdGFsKSB7XG5cdFx0XHR0aGlzLnNldEluZGV4KGN1cnJlbnRJbmRleCArIDEpO1xuXHRcdH1cblx0fVxuXG5cdHByZXYoKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50SW5kZXggfSA9IHRoaXMuc3RhdGU7XG5cdFx0aWYgKGN1cnJlbnRJbmRleCAtIDEgPj0gMCkge1xuXHRcdFx0dGhpcy5zZXRJbmRleChjdXJyZW50SW5kZXggLSAxKTtcblx0XHR9XG5cdH1cblxuXHRzZXRJbmRleChpbmRleCkge1xuXHRcdHRoaXMuc3RhdGUuY3VycmVudEluZGV4ID0gaW5kZXg7XG5cblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShgL3NsaWRlcy9zbGlkZS0ke2luZGV4ICsgMX1gKTtcblx0fVxuXG5cdC8vIG9uUG9wU3RhdGUoZXZlbnQpIHtcblx0Ly8gXHRjb25zb2xlLmxvZygnc3RhdGUgJywgaGlzdG9yeS5zdGF0ZSk7XG5cdC8vIH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyBjdXJyZW50SW5kZXgsIHRvdGFsLCBraW9zayB9ID0gdGhpcy5zdGF0ZTtcblxuXHRcdGNvbnN0IG1hcmt1cCA9IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJ0b3AtYmFyLWxlZnRcIj5cblx0XHRcdFx0PHVsIGNsYXNzPVwiZHJvcGRvd24gbWVudVwiPlxuXHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1lbnUtdGV4dFwiPlRlZCdzIFByZXNlbnRhdGlvbjwvbGk+XG5cdFx0XHRcdDwvdWw+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdCR7XG5cdFx0XHRcdCFraW9za1xuXHRcdFx0XHRcdD8gYDxkaXYgY2xhc3M9XCJ0b3AtYmFyLXJpZ2h0XCI+XG5cdFx0XHRcdDx1bCBjbGFzcz1cIm1lbnVcIj5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvblwiIGRhdGEtYWN0aW9uPVwicHJldlwiPlxuXHRcdFx0XHRcdFx0XHRQcmV2XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdDxsaT48cD4ke2N1cnJlbnRJbmRleCArIDF9IC8gJHt0b3RhbH08L3A+PC9saT5cblx0XHRcdFx0XHQ8bGk+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ1dHRvblwiIGRhdGEtYWN0aW9uPVwibmV4dFwiPlxuXHRcdFx0XHRcdFx0XHROZXh0XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHQ8L3VsPlxuXHRcdFx0PC9kaXY+YFxuXHRcdFx0XHRcdDogYDxwPiR7Y3VycmVudEluZGV4ICsgMX0gLyAke3RvdGFsfTwvcD5gXG5cdFx0XHR9XG5cdFx0YDtcblxuXHRcdHRoaXMuY29udGFpbmVyLmlubmVySFRNTCA9IG1hcmt1cDtcblxuXHRcdC8vIHNldCB1cCBldmVudCBsaXN0ZW5lcnNcblx0XHRjb25zdCBwcmV2RWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1hY3Rpb249cHJldl0nKTtcblx0XHRwcmV2RWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHRoaXMucHJldigpKTtcblx0XHR9KTtcblxuXHRcdGNvbnN0IG5leHRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFjdGlvbj1uZXh0XScpO1xuXHRcdG5leHRFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4ge1xuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4gdGhpcy5uZXh0KCkpO1xuXHRcdH0pO1xuXG5cdFx0aWYgKHRoaXMuc3RhdGUuY3VycmVudEluZGV4ID09PSAwKSB7XG5cdFx0XHRwcmV2RWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5hZGQoJ2Rpc2FibGVkJykpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwcmV2RWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc2FibGVkJykpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnN0YXRlLmN1cnJlbnRJbmRleCA9PT0gdGhpcy5zdGF0ZS50b3RhbCAtIDEpIHtcblx0XHRcdG5leHRFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LmFkZCgnZGlzYWJsZWQnKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG5leHRFbGVtZW50cy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYWJsZWQnKSk7XG5cdFx0fVxuXHR9XG5cblx0b25Sb3V0ZXJSZWFkeSh7IGN1cnJlbnRJbmRleCwgdG90YWwsIGRhdGEgfSkge1xuXHRcdGNvbnN0IGtpb3NrID0gZGF0YS5hdXRvcGxheSAmJiBkYXRhLmF1dG9wbGF5Lmtpb3NrO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHQuLi50aGlzLnN0YXRlLFxuXHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdGN1cnJlbnRJbmRleCxcblx0XHRcdHRvdGFsLFxuXHRcdFx0a2lvc2ssXG5cdFx0fTtcblx0XHR0aGlzLm9uS2V5RG93biA9IHRoaXMub25LZXlEb3duLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5lbmFibGUoKTtcblxuXHRcdHRoaXMuc3RhdGUudmlzaWJsZSA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XG5cdH1cblxuXHRvblJvdXRlQ2hhbmdlKHsgc2xpZGVNb2RlbCB9KSB7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdC4uLnRoaXMuc3RhdGUsXG5cdFx0XHRjdXJyZW50SW5kZXg6IHNsaWRlTW9kZWwuaW5kZXgsXG5cdFx0fTtcblxuXHRcdHRoaXMucmVuZGVyKCk7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uO1xuIiwiaW1wb3J0IE5hdmlnbyBmcm9tICdOYXZpZ28nO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdKUy9ldmVudC1lbWl0dGVyLmpzJztcblxuY2xhc3MgUm91dGVyIHtcblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5zdGF0ZSA9IHsgcmVhZHk6IGZhbHNlIH07XG5cdFx0dGhpcy5yb3V0ZXIgPSBuZXcgTmF2aWdvKG51bGwsIHRydWUpO1xuXHRcdHRoaXMuZXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXHR9XG5cblx0bG9hZChqc29uKSB7XG5cdFx0ZmV0Y2goanNvbilcblx0XHRcdC50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHRcdFx0fSlcblx0XHRcdC50aGVuKChkYXRhKSA9PiB7XG5cdFx0XHRcdHRoaXMuZGF0YSA9IGRhdGE7XG5cblx0XHRcdFx0dGhpcy5yb3V0ZXJcblx0XHRcdFx0XHQub24oJy9zbGlkZXMvOmlkJywgKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2FkU2xpZGUoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5yZXNvbHZlKCk7XG5cblx0XHRcdFx0dGhpcy5yb3V0ZXJcblx0XHRcdFx0XHQub24oKCkgPT4ge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2FkU2xpZGUoKTtcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5yZXNvbHZlKCk7XG5cblx0XHRcdFx0dGhpcy5yb3V0ZXIubm90Rm91bmQoKCkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdOb3QgZm91bmQnKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0dGhpcy5zdGF0ZS5yZWFkeSA9IHRydWU7XG5cdFx0XHRcdHRoaXMub25SZWFkeSh0aGlzLmNhbGxiYWNrKTtcblx0XHRcdH0pXG5cdFx0XHQuY2F0Y2goZnVuY3Rpb24oZXJyKSB7XG5cdFx0XHRcdC8vIFRoZXJlIHdhcyBhbiBlcnJvclxuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1RoZXJlIHdhcyBhbiBlcnJvciBsb2FkaW5nIHRoZSBqc29uIGZpbGUuJywgZXJyKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0Z2V0U2xpZGVNb2RlbCgpIHtcblx0XHQvLyBkZXJpdmUgdGhlIHNsaWRlIGZyb20gdGhlIHVybFxuXHRcdGNvbnN0IGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHQvLyBnZXQgdGhlIHNsaWRlIGluZGV4IGZyb20gdGhlIGhhc2gsIG9yIGRlZmF1bHQgdG8gMVxuXHRcdGxldCBzbGlkZUluZGV4ID0gcGFyc2VJbnQoaGFzaC5zcGxpdCgnc2xpZGUtJylbMV0gfHwgMSwgMTApO1xuXHRcdC8vIHNsaWRlcyBhcmUgbGFiZWxsZWQgMSwgMiwgMywgYnV0IGFyZSBhcnJheXMgKDAsIDEsIDIpXG5cdFx0c2xpZGVJbmRleCAtPSAxO1xuXG5cdFx0Y29uc3Qgc2xpZGVNb2RlbCA9IHRoaXMuZGF0YS5zbGlkZXNbc2xpZGVJbmRleF07XG5cblx0XHRyZXR1cm4geyAuLi5zbGlkZU1vZGVsLCBpbmRleDogc2xpZGVJbmRleCB9O1xuXHR9XG5cblx0bG9hZFNsaWRlKCkge1xuXHRcdGNvbnN0IHNsaWRlTW9kZWwgPSB0aGlzLmdldFNsaWRlTW9kZWwoKTtcblxuXHRcdGNvbnN0IGh0bWwgPSByZXF1aXJlKGAuLi9zbGlkZXMvJHtzbGlkZU1vZGVsLmxvY31gKTtcblx0XHRjb25zdCBwcmVzZW50YXRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcmVzZW50YXRpb24nKVswXTtcblx0XHRjb25zdCBjb250ZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50cycpO1xuXG5cdFx0Y29udGVudHMuaW5uZXJIVE1MID0gaHRtbDtcblxuXHRcdC8vIHNldCBiYWNrZ3JvdW5kIGNvbG9yc1xuXHRcdGNvbnN0IGJhY2tncm91bmRDb2xvckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuXHRcdFx0J2RpdltkYXRhLWJhY2tncm91bmQtY29sb3JdJ1xuXHRcdCk7XG5cdFx0cHJlc2VudGF0aW9uLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGJhY2tncm91bmRDb2xvckxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IGNvbG9yID0gYmFja2dyb3VuZENvbG9yTGlzdFtpXS5nZXRBdHRyaWJ1dGUoXG5cdFx0XHRcdCdkYXRhLWJhY2tncm91bmQtY29sb3InXG5cdFx0XHQpO1xuXHRcdFx0cHJlc2VudGF0aW9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xuXHRcdH1cblxuXHRcdC8vIHNldCBiYWNrZ3JvdW5kIGltYWdlc1xuXHRcdGNvbnN0IGJhY2tncm91bmRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2RhdGEtYmFja2dyb3VuZF0nKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYmFja2dyb3VuZExpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdGNvbnN0IHVybCA9IGJhY2tncm91bmRMaXN0W2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kJyk7XG5cdFx0XHRiYWNrZ3JvdW5kTGlzdFtpXS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInVybCgnXCIgKyB1cmwgKyBcIicpXCI7XG5cdFx0fVxuXG5cdFx0Ly8gcGVyZm9ybSBhbnkgYWxpZ25tZW50IGFkanVzdG1lbnRzXG5cdFx0dmFyIGFsaWdubWVudExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXZbZGF0YS1hbGlnbl0nKTtcblx0XHRjb250ZW50cy5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndGV4dC1hbGlnbicpO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhbGlnbm1lbnRMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBhbGlnbm1lbnQgPSBhbGlnbm1lbnRMaXN0W2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1hbGlnbicpO1xuXHRcdFx0Y29udGVudHMuc3R5bGUudGV4dEFsaWduID0gYWxpZ25tZW50O1xuXHRcdH1cblxuXHRcdC8vIHBlcmZvcm0gYW55IGNvbHVtbmFyIGFkanVzdG1lbnRzXG5cdFx0dmFyIGNvbHVtbmFyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLWNvbHVtbl0nKTtcblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY29sdW1uYXJMaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCBjb2x1bW4gPSBjb2x1bW5hckxpc3RbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvbHVtbicpO1xuXHRcdFx0Y29sdW1uYXJMaXN0W2ldLnBhcmVudE5vZGUuc3R5bGUuYm9yZGVyID0gJzJweCBzb2xpZCByZWQnO1xuXHRcdH1cblx0fVxuXG5cdG5hdmlnYXRlKHBhdGgpIHtcblx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShwYXRoKTtcblxuXHRcdC8vIHVzZSBzZXRUaW1lb3V0IHdpdGggMCB0aW1lIHRvIHN1bW1vbiBhdCBlbmQgb2YgZnJhbWVcblx0XHQvLyBzbyBjb250ZW50cyBoYXZlIGFuIG9wcG9ydHVuaXR5IHRvIHJlbmRlclxuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0Y29uc3Qgc2xpZGVNb2RlbCA9IHRoaXMuZ2V0U2xpZGVNb2RlbCgpO1xuXHRcdFx0dGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnb25Sb3V0ZUNoYW5nZScsIHsgc2xpZGVNb2RlbCwgcGF0aCB9KTtcblx0XHR9LCAwKTtcblx0fVxuXG5cdG9uUmVhZHkoY2FsbGJhY2spIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5yZWFkeSkge1xuXHRcdFx0Y29uc3Qgc2xpZGVNb2RlbCA9IHRoaXMuZ2V0U2xpZGVNb2RlbCgpO1xuXHRcdFx0Y29uc3QgeyBpbmRleCB9ID0gc2xpZGVNb2RlbDtcblx0XHRcdGNvbnN0IHRvdGFsID0gdGhpcy5kYXRhLnNsaWRlcy5sZW5ndGg7XG5cblx0XHRcdHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ29uUmVhZHknLCB7XG5cdFx0XHRcdGN1cnJlbnRJbmRleDogaW5kZXgsXG5cdFx0XHRcdHRvdGFsLFxuXHRcdFx0XHRkYXRhOiB0aGlzLmRhdGEsXG5cdFx0XHRcdHNsaWRlTW9kZWwsXG5cdFx0XHR9KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5ldmVudEVtaXR0ZXIuYWRkKCdvblJlYWR5JywgY2FsbGJhY2spO1xuXHRcdH1cblx0fVxuXG5cdGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuXHRcdHRoaXMuZXZlbnRFbWl0dGVyLm9uKGV2ZW50TmFtZSwgY2FsbGJhY2spO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJvdXRlcjtcbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAnSlMvcm91dGVyLmpzJztcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJ0pTL25hdmlnYXRpb24uanN4JztcbmltcG9ydCBBdXRvcGxheUNvbnRyb2xzIGZyb20gJ0pTL2F1dG9wbGF5LmpzeCc7XG5pbXBvcnQgRGVidWdnZXIgZnJvbSAnSlMvZGVidWdnZXIuanN4JztcblxuY29uc3QgaXNEZW1vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtZGVtb11gKTtcblxuaWYgKGlzRGVtbykge1xuXHRjb25zdCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cdGNvbnN0IG5hdiA9IG5ldyBOYXZpZ2F0aW9uKHsgcm91dGVyLCB2aXNpYmxlOiB0cnVlIH0pO1xuXHRjb25zdCBhdXRvcGxheUNvbnRyb2xzID0gbmV3IEF1dG9wbGF5Q29udHJvbHMoeyByb3V0ZXIgfSk7XG5cblx0Y29uc3QgZGVtb1VyaSA9IGRvY3VtZW50XG5cdFx0LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRlbW9dYClcblx0XHQuZ2V0QXR0cmlidXRlKCdkYXRhLWRlbW8nKTtcblxuXHRyb3V0ZXIubG9hZChkZW1vVXJpKTtcbn1cblxuY29uc3QgaXNEZWJ1Z2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWRlYnVnXWApO1xuaWYgKGlzRGVidWdnZXIgJiYgaXNEZWJ1Z2dlci5nZXRBdHRyaWJ1dGUoJ2RhdGEtZGVidWcnKSA9PT0gJ3RydWUnKSB7XG5cdGNvbnN0IG15RGVidWdnZXIgPSBuZXcgRGVidWdnZXIoaXNEZWJ1Z2dlcik7XG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vdGVkL3NsaWRlLTAxLXRpdGxlLm1kXCI6IFwiLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wMS10aXRsZS5tZFwiLFxuXHRcIi4vdGVkL3NsaWRlLTAyLWJhY2tncm91bmQubWRcIjogXCIuL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTAyLWJhY2tncm91bmQubWRcIixcblx0XCIuL3RlZC9zbGlkZS0wMy10aGVtZS5tZFwiOiBcIi4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDMtdGhlbWUubWRcIixcblx0XCIuL3RlZC9zbGlkZS0wNC1jb3B5Lm1kXCI6IFwiLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wNC1jb3B5Lm1kXCIsXG5cdFwiLi90ZWQvc2xpZGUtMDUtaW1hZ2UubWRcIjogXCIuL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA1LWltYWdlLm1kXCIsXG5cdFwiLi90ZWQvc2xpZGUtMDYtY29sdW1ucy5tZFwiOiBcIi4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDYtY29sdW1ucy5tZFwiLFxuXHRcIi4vdGVkL3NsaWRlLTA3LXZpZGVvLWxvY2FsLm1kXCI6IFwiLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wNy12aWRlby1sb2NhbC5tZFwiLFxuXHRcIi4vdGVkL3NsaWRlLTA3LXZpZGVvLXZpbWVvLm1kXCI6IFwiLi9zcmMvc2xpZGVzL3RlZC9zbGlkZS0wNy12aWRlby12aW1lby5tZFwiLFxuXHRcIi4vdGVkL3NsaWRlLTA3LXZpZGVvLXlvdXR1YmUubWRcIjogXCIuL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA3LXZpZGVvLXlvdXR1YmUubWRcIixcblx0XCIuL3RlZC9zbGlkZS0wOC0zZC5tZFwiOiBcIi4vc3JjL3NsaWRlcy90ZWQvc2xpZGUtMDgtM2QubWRcIixcblx0XCIuL3RlZC9zbGlkZS0wOS10aGFua3MubWRcIjogXCIuL3NyYy9zbGlkZXMvdGVkL3NsaWRlLTA5LXRoYW5rcy5tZFwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9zbGlkZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8aDEgaWQ9XFxcInRpdGxlLXNsaWRlXFxcIj5UaXRsZSBTbGlkZTwvaDE+XFxuPHA+QnkgVGVkPC9wPlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgZGF0YS1iYWNrZ3JvdW5kPVxcXCIvaW1nL2Fkcmlhbi1pbmZlcm51cy1HTGY3YkF3Q2RZZy11bnNwbGFzaC5qcGdcXFwiPjwvZGl2PlxcblxcbjxoMSBpZD1cXFwic2xpZGUtMlxcXCI+U2xpZGUgMjwvaDE+XFxuPHA+SW1hZ2Ugc3VwcG9ydDwvcD5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGRhdGEtYmFja2dyb3VuZD1cXFwiL2ltZy9hZHJpYW4taW5mZXJudXMtR0xmN2JBd0NkWWctdW5zcGxhc2guanBnXFxcIj48L2Rpdj5cXG48ZGl2IGRhdGEtdGhlbWU9XFxcImRhcmtcXFwiPlxcbjxoMT5TbGlkZSAzPC9oMT5cXG48cD5UaGVtZSBTdXBwb3J0PC9wPlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgZGF0YS1hbGlnbj1cXFwibGVmdFxcXCI+XFxuPHA+XFxuQ2F0IGlwc3VtIGRvbG9yIHNpdCBhbWV0LiBEZW1hbmQgdG8gYmUgbGV0IG91dHNpZGUgYXQgb25jZS4gRWF0IGFsbCB0aGUgcG93ZXIgY29yZHMuIFByZXNlbnQgYmVsbHkuXFxuPC9wPlxcbjxwPlxcblB1cnIgZm9yIG5vIHJlYXNvbi4gUG91bmNlIG9uIHVuc3VzcGVjdGluZyBwZXJzb24uXFxuPC9wPlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxwPjxpbWcgc3JjPVxcXCIvL3BsYWNla2l0dGVuLmNvbS82MDAvNjAwXFxcIiBhbHQ9XFxcIkN1dGUgS2l0dGVuXFxcIj48L3A+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBkYXRhLWJhY2tncm91bmQ9XFxcIi9pbWcvYWRyaWFuLWluZmVybnVzLUdMZjdiQXdDZFlnLXVuc3BsYXNoLmpwZ1xcXCI+PC9kaXY+XFxuPGRpdiBjbGFzcz1cXFwiZ3JpZC14IGdyaWQtcGFkZGluZy14XFxcIj5cXG4gIDxkaXYgY2xhc3M9XFxcImNlbGwgbWVkaXVtLTZcXFwiPlxcbiAgICA8aW1nIGNsYXNzPVxcXCJjb250YWluXFxcIiBzcmM9XFxcIi8vcGxhY2VraXR0ZW4uY29tLzYwMC82MDBcXFwiIGFsdD1cXFwiQSBjdXRlIGtpdHRlblxcXCIgLz5cXG4gIDwvZGl2PlxcbiAgPGRpdiBjbGFzcz1cXFwiY2VsbCBtZWRpdW0tNiBhbGlnbi1zZWxmLW1pZGRsZSB0ZXh0LWxlZnRcXFwiPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaG93LWZvci1uZWFyXFxcIj5cXG4gICAgICA8cD5DYXQgaXBzdW0gZG9sb3Igc2l0IGFtZXQuIERlbWFuZCB0byBiZSBsZXQgb3V0c2lkZSBhdCBvbmNlLCBhbmQgZXhwZWN0IG93bmVyIHRvIHdhaXQgZm9yIG1lIGFzIGkgdGhpbmsgYWJvdXQgaXQuPC9wPlxcbiAgICAgIDwvZGl2PlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJzaG93LWZvci1mYXJcXFwiPlxcbiAgICAgIDxwPkNhdCBpcHN1bSBkb2xvciBzaXQgYW1ldC48L3A+XFxuICAgIDwvZGl2PlxcbiAgPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwicmVzcG9uc2l2ZS1lbWJlZFxcXCIgZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVxcXCIjMDAwMDAwXFxcIiBkYXRhLXR5cGU9XFxcInZpZGVvXFxcIiA+XFxuPHZpZGVvIGNvbnRyb2xzIGF1dG9wbGF5IG11dGVkPlxcbiAgPHNvdXJjZSBzcmM9XFxcIi9tb3YvdG90ZW0tYnktbHVjYXN0c3dpY2subXA0XFxcIiB0eXBlPVxcXCJ2aWRlby9tcDRcXFwiPlxcbjwvdmlkZW8+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPGRpdiBjbGFzcz1cXFwicmVzcG9uc2l2ZS1lbWJlZFxcXCIgZGF0YS1iYWNrZ3JvdW5kLWNvbG9yPVxcXCIjMDAwMDAwXFxcIiBkYXRhLXR5cGU9XFxcInZpZGVvXFxcIj5cXG4gIDxpZnJhbWUgc3JjPVxcXCJodHRwczovL3BsYXllci52aW1lby5jb20vdmlkZW8vNzY5Nzk4NzE/YXV0b3BsYXk9MVxcXCIgd2lkdGg9XFxcIjY0MFxcXCIgaGVpZ2h0PVxcXCIzNjhcXFwiIGZyYW1lYm9yZGVyPVxcXCIwXFxcIiBhbGxvdz1cXFwiYXV0b3BsYXk7IGZ1bGxzY3JlZW5cXFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT5cXG48L2Rpdj5cXG5cIjtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gY29kZTsiLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8ZGl2IGNsYXNzPVxcXCJyZXNwb25zaXZlLWVtYmVkXFxcIiBkYXRhLWJhY2tncm91bmQtY29sb3I9XFxcIiMwMDAwMDBcXFwiIGRhdGEtdHlwZT1cXFwidmlkZW9cXFwiID5cXG4gIDxpZnJhbWUgaWQ9XFxcInl0cGxheWVyXFxcIiB3aWR0aD1cXFwiNTYwXFxcIiBoZWlnaHQ9XFxcIjMxNVxcXCIgc3JjPVxcXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9hZkNVUHFDek9Idz9hdXRvcGxheT0xJmVuYWJsZWpzYXBpPTFcXFwiIGZyYW1lYm9yZGVyPVxcXCIwXFxcIiBhbGxvdz1cXFwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZVxcXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxcbjwvZGl2PlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyIsIi8vIE1vZHVsZVxudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcInJlc3BvbnNpdmUtZW1iZWRcXFwiIGRhdGEtYmFja2dyb3VuZC1jb2xvcj1cXFwiIzAwMDAwMFxcXCIgZGF0YS10eXBlPVxcXCJ2aWRlb1xcXCI+XFxuXFxuPGRpdiBjbGFzcz1cXFwic2tldGNoZmFiLWVtYmVkLXdyYXBwZXJcXFwiPlxcbiAgPGlmcmFtZSB0aXRsZT1cXFwiQSAzRCBtb2RlbFxcXCIgd2lkdGg9XFxcIjY0MFxcXCIgaGVpZ2h0PVxcXCI0ODBcXFwiIHNyYz1cXFwiaHR0cHM6Ly9za2V0Y2hmYWIuY29tL21vZGVscy9lZWRlOGMxMzk0ZGM0MTMyYWYyZjAyZjA2ZDQ5N2ZhOC9lbWJlZD9hdXRvc3RhcnQ9MSZhbXA7dWlfY29udHJvbHM9MSZhbXA7dWlfaW5mb3M9MSZhbXA7dWlfaW5zcGVjdG9yPTEmYW1wO3VpX3N0b3A9MSZhbXA7dWlfd2F0ZXJtYXJrPTEmYW1wO3VpX3dhdGVybWFya19saW5rPTFcXFwiIGZyYW1lYm9yZGVyPVxcXCIwXFxcIiBhbGxvdz1cXFwiYXV0b3BsYXk7IGZ1bGxzY3JlZW47IHZyXFxcIiBtb3phbGxvd2Z1bGxzY3JlZW49XFxcInRydWVcXFwiIHdlYmtpdGFsbG93ZnVsbHNjcmVlbj1cXFwidHJ1ZVxcXCI+PC9pZnJhbWU+XFxuICA8cCBzdHlsZT1cXFwiZm9udC1zaXplOiAxM3B4OyBmb250LXdlaWdodDogbm9ybWFsOyBtYXJnaW46IDVweDsgY29sb3I6ICM0QTRBNEE7XFxcIj5cXG4gICAgICA8YSBocmVmPVxcXCJodHRwczovL3NrZXRjaGZhYi5jb20vM2QtbW9kZWxzL25pbnRlbmRvLWdhbWVib3ktMTk4OS1lZWRlOGMxMzk0ZGM0MTMyYWYyZjAyZjA2ZDQ5N2ZhOD91dG1fbWVkaXVtPWVtYmVkJnV0bV9zb3VyY2U9d2Vic2l0ZSZ1dG1fY2FtcGFpZ249c2hhcmUtcG9wdXBcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjMUNBQUQ5O1xcXCI+TmludGVuZG8gR2FtZWJveSAxOTg5PC9hPlxcbiAgICAgIGJ5IDxhIGhyZWY9XFxcImh0dHBzOi8vc2tldGNoZmFiLmNvbS9zaHJlZG5lY3Rvcj91dG1fbWVkaXVtPWVtYmVkJnV0bV9zb3VyY2U9d2Vic2l0ZSZ1dG1fY2FtcGFpZ249c2hhcmUtcG9wdXBcXFwiIHRhcmdldD1cXFwiX2JsYW5rXFxcIiBzdHlsZT1cXFwiZm9udC13ZWlnaHQ6IGJvbGQ7IGNvbG9yOiAjMUNBQUQ5O1xcXCI+c2hyZWRuZWN0b3I8L2E+XFxuICAgICAgb24gPGEgaHJlZj1cXFwiaHR0cHM6Ly9za2V0Y2hmYWIuY29tP3V0bV9tZWRpdW09ZW1iZWQmdXRtX3NvdXJjZT13ZWJzaXRlJnV0bV9jYW1wYWlnbj1zaGFyZS1wb3B1cFxcXCIgdGFyZ2V0PVxcXCJfYmxhbmtcXFwiIHN0eWxlPVxcXCJmb250LXdlaWdodDogYm9sZDsgY29sb3I6ICMxQ0FBRDk7XFxcIj5Ta2V0Y2hmYWI8L2E+XFxuICA8L3A+XFxuPC9kaXY+XFxuPC9kaXY+XFxuXCI7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHA+PHNwYW4gZGF0YS10aGVtZT1cXFwiZGFya1xcXCI+XFxuPGgxPlRoYW5rIHlvdSE8L2gxPlxcbjxoMj5Zb3VyIGZyaWVuZCwgVGVkPC9oMj5cXG48L3NwYW4+PC9wPlxcblwiO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBjb2RlOyJdLCJzb3VyY2VSb290IjoiIn0=