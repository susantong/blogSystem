import axios from 'axios';
import qs from 'qs';

export default function (data, id) {
	axios({
		method: 'get',
		url: 'http://localhost:3001/manager/article/findById?id=' + id,
	})
	.then((response) => {
		data.list = response.data.result;
		console.log(data.list);
	})
	.catch((err) => {
		console.log(err);
	});
}