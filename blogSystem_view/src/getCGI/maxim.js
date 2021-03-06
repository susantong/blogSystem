import axios from 'axios';
import qs from 'qs';

export default function (data, obj, init) {
	let res = qs.stringify(obj);
	axios({
		method: 'post',
		url: 'http://localhost:3001/manager/maxim/findAll',
		data: res
	})
	.then((response) => {
		let len = response.data.result.length;
		if (len < obj.pageSize) {
			data['last_id'] = (response.data.result[len - 1])['_id'];
			data.loading = true;
		} else {
			data['last_id'] = (response.data.result[obj.pageSize - 1])['_id'];
			data.loading = false;
		}
		if (init) {
			if (len) {
				data.list = response.data.result;
			}
		} else {
			data.list = data.list.concat(response.data.result); 
		}
	
	})
	.catch((err) => {
		console.log(err);
	});
}