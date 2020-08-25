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

		window.removeEventListener('popstate', this.onPopState);
		window.addEventListener('popstate', this.onPopState, false);
	}

	disable() {
		window.removeEventListener('popstate', this.onPopState);
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

	onPopState(event) {
		console.log('state ', history.state);
	}

	render() {
		const { currentIndex, total } = this.state;

		const markup = `
			<div class="top-bar-left">
				<ul class="dropdown menu">
					<li class="menu-text">Ted's Presentation</li>
				</ul>
			</div>
			<div class="top-bar-right">
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
			</div>
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

	onRouterReady({ currentIndex, total }) {
		this.state = {
			...this.state,
			enabled: true,
			currentIndex,
			total,
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

export default Navigation;
