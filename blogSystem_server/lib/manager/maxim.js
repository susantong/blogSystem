import mongoose from '../mongo/mongoose';
import {maxim} from '../mongo/schema';
import responseJson from '../responseJson';
import uploadImg from './upload';
import getTime from './time';

//箴言的处理

let postMaxims = (maximData, req, res) => {
	let imgPath = uploadImg(maximData.image, req, res);
	if (!imgPath) {
		responseJson(res, false, 'the image deal failed');
		return;
	}
	let maxims = new maxim({
		image: imgPath,
		text: maximData.text,
		date: getTime()
	});
	maxims.save((err, maxim) => {
		if (err) {
			console.log('箴言发表失败');
			responseJson(res, false, 'post maxim failed');
			return;
		}
		console.log('箴言发表成功');
		responseJson(res, true, 'post maxim success');
	});
};

//查找所有箴言
let findAll = (req, res) => {
	maxim.find({}, (err, doc) => {
		if (err) {
			console.log('查询出错');
			responseJson(res, false, 'find failed');
			return;
		}
		console.log('查找成功');
		responseJson(res, true, doc);
	});
};

//根据ID删除箴言
let deleteMaxims = (id, req, res) => {
	maxim.remove({_id: id}, (err) => {
		if (err) {
			console.log('删除失败');
			responseJson(res, false, 'delete failed');
			return;
		}
		console.log('删除成功');
		responseJson(res, true, 'delete success');
	});
};

//根据id查找对应箴言
let findById = (id, req, res) => {
	maxim.find({_id: id}, (err, doc) => {
		if (err) {
			console.log('查询出错');
			responseJson(res, false, 'find by type failed');
			return;
		}
		if (!doc.length) {
			console.log('查找失败');
			responseJson(res, false, 'find by id failed');
			return;
		}
		console.log('查找成功');
		responseJson(res, true, doc);
	});
};

export {postMaxims, findAll, deleteMaxims, findById};