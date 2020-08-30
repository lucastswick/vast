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

		this.state = {
			...this.state,
			currentIndex,
			total,
			loop,
			autoplayTimeout,
			slideModel,
		};

		this.onKeyDown = this.onKeyDown.bind(this);
		document.removeEventListener('keydown', this.onKeyDown);
		document.addEventListener('keydown', this.onKeyDown);

		console.log(shouldAutoplay, isVideo);
		if (shouldAutoplay) {
			if (!isVideo) {
				this.enable();
				this.startAutoplay();
			} else {
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

		if (this.getIsVideo()) {
			this.autoplayVideo();
		}
	}

	autoplayVideo() {
		const wasEnabled = this.state.enabled;
		this.disable();

		// listen to video events
		var video = document.querySelector(`[data-type="video"]`);

		if (video) {
			const iframe = video.querySelector('iframe');
			var player = new Vimeo.Player(iframe);

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
				// when the video has emitted its complete event
				// enable autoplay.
				player.on('ended', function(data) {
					// but only if autoplay was enabled
					if (wasEnabled) this.enable();
				});
			}
		}
	}

	clear() {
		clearInterval(this.autoplayId);
		this.container.innerHTML = '';
	}
}

export default Autoplay;
