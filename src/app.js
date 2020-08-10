import 'STYLES/style.scss';

const html = require('./ted/slide-01-title.md');
const contents = document.getElementById('contents');

contents.innerHTML = html;

var list = document.querySelectorAll('div[data-background]');

for (var i = 0; i < list.length; i++) {
	var url = list[i].getAttribute('data-background');
	list[i].style.backgroundImage = "url('" + url + "')";
}
