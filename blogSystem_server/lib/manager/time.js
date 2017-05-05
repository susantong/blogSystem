
function civilize(time) {
	if (time > 0 && time < 10) {
		return '0' + time;
	}
	return time;
}

let getTimes = function () {
	let time = new Date();
	return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
	+ ' ' + civilize(time.getHours()) + ':' + civilize(time.getMinutes()) + ':' + civilize(time.getSeconds());
}

export default getTimes;