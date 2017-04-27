function civilize(time) {
	if (time > 0 && time < 10) {
		return '0' + time;
	}
	return time;
}

let getTime = function () {
	let time = new Date();
	return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
	+ ' ' + civilize(time.getHours()) + ':' + civilize(time.getMinutes()) + ':' + civilize(time.getSeconds());
}

export default function (data) {
	data.list = [
		{
			img: '',
			text: '想要做成一件事，除了勤奋，还需要专注与热爱，三者缺一不可。这样才有可能会成功！',
			time: getTime()
		},
		{
			img: '',
			text: '想要做成一件事，除了勤奋，还需要专注与热爱，三者缺一不可。这样才有可能会成功！',
			time: getTime()
		},
		{
			img: '',
			text: '想要做成一件事，除了勤奋，还需要专注与热爱，三者缺一不可。这样才有可能会成功！',
			time: getTime()
		}
	];
}