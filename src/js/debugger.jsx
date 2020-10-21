import { MediaQuery } from 'foundation-sites';
import $ from 'jquery';

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

		$(window).on('changed.zf.mediaquery', (event, newSize, oldSize) =>
			this.render()
		);
	}

	render() {
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

		if (MediaQuery.is('vast')) {
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
	}
}

export default Debugger;
