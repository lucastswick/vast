import Navigo from 'Navigo';
import EventEmitter from 'JS/event-emitter.js';

class Router {
	constructor() {
		this.state = { ready: false };
		this.router = new Navigo(null);
		this.eventEmitter = new EventEmitter();
	}

	load(json) {
		fetch(json)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.data = data;

				this.router
					.on('/slides/*', () => {
						this.loadSlide();
					})
					.resolve();

				this.router
					.on(() => {
						this.loadSlide();
					})
					.resolve();

				this.router.notFound(() => {
					console.log('Not found');
				});

				this.state.ready = true;
				this.onReady(this.callback);
			})
			.catch(function(err) {
				// There was an error
				console.warn('There was an error loading the json file.', err);
			});
	}

	getSlideModel() {
		// derive the slide from the url
		const pathname = window.location.pathname;
		// get the slide index from the pathname, or default to 1
		let slideIndex = parseInt(pathname.split('slide-')[1] || 1, 10);
		// slides are labelled 1, 2, 3, but are arrays (0, 1, 2)
		slideIndex -= 1;

		const slideModel = this.data.slides[slideIndex];

		return { ...slideModel, index: slideIndex };
	}

	loadSlide() {
		const slideModel = this.getSlideModel();

		const html = require(`../slides/${slideModel.loc}`);
		const contents = document.getElementById('contents');

		contents.innerHTML = html;

		// set background images
		const backgroundList = document.querySelectorAll('div[data-background]');

		for (let i = 0; i < backgroundList.length; i++) {
			const url = backgroundList[i].getAttribute('data-background');
			backgroundList[i].style.backgroundImage = "url('" + url + "')";
		}

		var alignmentList = document.querySelectorAll('div[data-align]');

		for (let i = 0; i < alignmentList.length; i++) {
			const alignment = alignmentList[i].getAttribute('data-align');
			alignmentList[i].parentNode.style.textAlign = alignment;
		}
	}

	navigate(path) {
		this.router.navigate(path);

		const slideModel = this.getSlideModel();
		this.eventEmitter.emit('onRouteChange', { slideModel, path });
	}

	onReady(callback) {
		if (this.state.ready) {
			const slideModel = this.getSlideModel();
			const { index } = slideModel;
			const total = this.data.slides.length;

			this.eventEmitter.emit('onReady', { currentIndex: index, total });
		} else {
			this.eventEmitter.add('onReady', callback);
		}
	}

	addEventListener(eventName, callback) {
		this.eventEmitter.on(eventName, callback);
	}
}

export default Router;
