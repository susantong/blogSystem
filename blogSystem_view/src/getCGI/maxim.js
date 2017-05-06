import axios from 'axios';
import qs from 'qs';

export default function (data) {
	axios({
		method: 'get',
		url: 'http://localhost:3001/manager/maxim/findAll',
	})
	.then((response) => {
		data.list = response.data.result;
	
	})
	.catch((err) => {
		console.log(err);
	});
}