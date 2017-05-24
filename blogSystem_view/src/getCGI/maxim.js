import axios from 'axios';
import qs from 'qs';

export default function (data, obj) {
	let res = qs.stringify(obj);
	axios({
		method: 'post',
		url: 'http://localhost:3001/manager/maxim/findAll',
		data: res
	})
	.then((response) => {
		let len = response.data.result.length;
		data['last_id'] = (response.data.result[obj.pageSize - 1])['_id'];
		if (len) {
			data.list = response.data.result;
		}
	
	})
	.catch((err) => {
		console.log(err);
	});
}