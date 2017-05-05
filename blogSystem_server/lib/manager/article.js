import mongoose from '../mongo/mongoose';
import {article} from '../mongo/schema';
import responseJson from '../responseJson';
import uploadImg from './upload';
import getTimes from './time';

//文章的处理

//发表文章
let postArticles = (articleData, req, res) => {
	console.log(articleData.headImg.length);
	let imgPath = uploadImg(articleData.headImg, req, res);
	//console.log(imgPath);
	console.log(typeof getTimes());
	if (!imgPath) {
		responseJson(res, false, 'the image deal failed');
		return;
	}
	let articles = new article({
		author: 'susantong',
		time: getTimes(),
		headImg: imgPath,
		type: articleData.type,
		title: articleData.title,
		contents: articleData.contents
	});
	articles.save((err, article) => {
		if (err) {
			console.log('发表失败');
			responseJson(res, false, 'post article failed');
			return;
		}
		console.log('发表成功');
		responseJson(res, true, 'post article success');
	});
};

//查询所有文章
let findAll = (req, res) => {
	article.find({}, (err, doc) => {
		if (err) {
			console.log('查询出错');
			responseJson(res, false, 'find failed');
			return;
		}
		console.log('查找成功');
		responseJson(res, true, doc);
	});
};

//根据id查找对应文章
let findById = (id, req, res) => {
	article.find({_id: id}, (err, doc) => {
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

//根据type查找对应文章
let findByType = (type, req, res) => {
	article.find({type: type}, (err, doc) => {
		if (err) {
			console.log('查询出错');
			responseJson(res, false, 'find by type failed');
			return;
		} 
		//console.log(doc.length);
		if (!doc.length) {
			console.log('查找失败');
			responseJson(res, false, 'find by type failed');
			return;
		} 
		console.log('查找成功');
		responseJson(res, true, doc);
	});
};

//根据id删除文章
let deleteArticles = (id, req, res) => {
	article.remove({id: id}, (err) => {
		if (err) {
			console.log('删除失败');
			responseJson(res, false, 'delete failed');
			return;
		}
		console.log('删除成功');
		responseJson(res, true, 'delete success');
	});
};

//根据id修改文章
let updateArticles = (articleData, req, res) => {
	article.update({_id: articleData.id}, 
		{$set: {type: articleData.type, title: articleData.title, 
			headImg: articleData.headImg, contents: articleData.contents}}, (err) => {
				if (err) {
					console.log('修改失败');
					responseJson(res, false, 'update failed');
					return;
				}
				console.log('修改成功');
				responseJson(res, true, 'update success');
			});
};


export {postArticles, findAll, findById, findByType, updateArticles,
	deleteArticles};