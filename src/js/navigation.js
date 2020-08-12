class Navigation {
	constructor({ router }) {
		this.router = router;
		this.router.onReady(({ currentIndex, total }) => {
			this.state = { enabled: true, currentIndex, total };
			this.onKeyDown = this.onKeyDown.bind(this);
			this.enable();
		});
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

		// history.pushState(
		// 	{
		// 		id: `slide-${index}`,
		// 	},
		// 	`Slide ${index}`,
		// 	`/slides/slide-${index}`
		// );
	}

	onPopState(event) {
		console.log('state ', history.state);
	}
}

export default Navigation;
