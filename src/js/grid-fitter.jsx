import { MediaQuery } from 'foundation-sites';
import $ from 'jquery';

class GridFitter {
	constructor({ router } = {}) {
		this.state = {};

		$(document).foundation();

		this.render();

		$(window).on('changed.zf.mediaquery', (event, newSize, oldSize) =>
			this.render()
		);
	}

	render() {
		if (MediaQuery.is('vast')) {
			// vertical fitting
			// size each row so they all fit into a .fit-all-vertical grid
			// note that .fit-all-vertical is applied to the entire grid
			let rows = document.querySelectorAll('.fit-all-vertical .grid-y');
			if (rows && rows.length) {
				// how many rows?
				const rowCount = rows.length;
				const rowHeight = 100 / rowCount;

				for (let i = 0, row; i < rowCount; i++) {
					row = rows[i];
					// const classList = [...row.classList];
					// const filteredClassList = classList.filter((c) => {
					// 	return c.indexOf('fit-') === -1;
					// });
					// row.className = filteredClassList.join(' ');

					// for all cells in the row
					const cells = row.querySelectorAll('.cell');

					for (let j = 0, cell, cellCount = cells.length; j < cellCount; j++) {
						cell = cells[j];
						cell.style.height = `${rowHeight}vh`;
					}
				}
			}

			// horizontal fitting
			// size each cell of each row so they all fit into a .fit-all-horizontal grid
			// note that .fit-all-horizontal is applied to a row
			rows = document.querySelectorAll('.fit-all-horizontal.grid-y');
			if (rows && rows.length) {
				// how many rows?
				const rowCount = rows.length;

				for (let i = 0, row; i < rowCount; i++) {
					row = rows[i];

					// for all cells in the row
					const cells = row.querySelectorAll('.cell');

					for (let j = 0, cell, cellCount = cells.length; j < cellCount; j++) {
						const cellWidth = 100 / cellCount;
						cell = cells[j];
						cell.style.width = `${cellWidth}vw`;
					}
				}
			}

			// when not a vast mediaquery,
			// remove the inline width and height properties
		} else {
			let rows = document.querySelectorAll(
				'.fit-all-vertical, .fit-all-horizontal'
			);

			if (rows && rows.length) {
				for (let i = 0, row, rowCount = rows.length; i < rowCount; i++) {
					row = rows[i];

					// for all cells in the row
					const cells = row.querySelectorAll('.cell');

					for (let j = 0, cell, cellCount = cells.length; j < cellCount; j++) {
						cell = cells[j];
						cell.style.removeProperty('height');
						cell.style.removeProperty('width');
					}
				}
			}
		}
	}
}

export default GridFitter;
