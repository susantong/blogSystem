
import {article, maxim} from '../mongo/schema';
import responseJson from '../responseJson';

//实现数据分页
let page = (data, model, req, res) => {
	
	if (data['last_id'] == false) {
		
		model.find({}, null, {limit: Number(data.pageSize), sort: {'_id': -1}}, (err, doc) => {
			if (err) {
				console.log(err + ' 21')
				responseJson(res, false, 'find failed');
			}
			responseJson(res, true, doc);
		});
	} else {
		
		model.find({'_id': {$lt: data['last_id']}}, null, {limit: Number(data.pageSize), sort: {'_id': -1}}, (err, doc) => {
			if (err) {
				console.log(err);
				responseJson(res, false, 'find failed');
			}
			responseJson(res, true, doc);
		});
	}
}

export default page;