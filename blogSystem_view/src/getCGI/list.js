import axios from 'axios';
import qs from 'qs';

export default function (data) {
	axios({
		method: 'get',
		url: 'http://localhost:3001/manager/article/findAll',
	})
	.then((response) => {
		data.list = response.data.result[0];
	})
	.catch((err) => {
		console.log(err);
	});
}