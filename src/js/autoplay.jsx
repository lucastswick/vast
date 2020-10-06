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

export default Autoplay;
