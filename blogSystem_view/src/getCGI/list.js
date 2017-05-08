import axios from 'axios';
import qs from 'qs';

export default function (data) {
	axios({
		method: 'get',
		url: 'http://localhost:3001/manager/article/findAll',
	})
	.then((response) => {
		let len = response.data.result.length;
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
		//data.hotOne[0] = response.data.result[0];
		//data.hotTwo[0] = response.data.result[1];
		//data.list = response.data.result.slice(2);
		//console.log(response.data.result[0]);
		//console.log(response.data.result[0].headImg);
	})
	.catch((err) => {
		console.log(err);
	});
}