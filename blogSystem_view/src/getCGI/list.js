import axios from 'axios';
import qs from 'qs';

export default function (data, obj) {
	let res = qs.stringify(obj);
	axios({
		method: 'post',
		url: 'http://localhost:3001/manager/article/findAll',
		data: res
	})
	.then((response) => {
		let len = response.data.result.length;
		data['last_id'] = (response.data.result[obj.pageSize - 1])['_id'];
		switch(len) {
			case 0:
			case 1: data.hotOne[0] = response.data.result[0];
					break;
			case 2: data.hotOne[0] = response.data.result[0];
					data.hotTwo[0] = response.data.result[1];
					break;
			default: data.hotOne[0] = response.data.result[0];
					 data.hotTwo[0] = response.data.result[1];
					 data.list = response.data.result.slice(2);
					 break;
		}
		
	})
	.catch((err) => {
		console.log(err);
	});
}