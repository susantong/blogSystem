import mongoose from '../mongo/mongoose';
import {article, articleType} from '../mongo/schema';
import responseJson from '../responseJson';
import {uploadImg, delImg} from './upload';
import getTimes from './time';

//文章的处理


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
			responseJson(res, false, 'find by id failed');
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
let deleteArticles = (data, req, res) => {
	//console.log(data.path);
	let del = delImg(data.path, req, res);
	if (!del) {
		responseJson(res, false, 'delete image failed');
		return;
	}
	article.remove({_id: data.id}, (err) => {
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
	
	//console.log(articleData);
	article.update({_id: articleData.id}, 
		{$set: {type: articleData.type, title: articleData.title, 
			 contents: articleData.contents}}, (err) => {
				if (err) {
					console.log('修改失败');
					responseJson(res, false, 'update failed');
					return;
				}
				console.log('修改成功');
				responseJson(res, true, 'update success');
			});
};


//发表文章
let postArticles = (articleData, req, res) => {
	
	let imgPath = uploadImg(articleData.headImg, req, res);

	if (!imgPath) {
		responseJson(res, false, 'the image deal failed');
		return;
	}
	//console.log(articleData.type);
	articleType.find({type: articleData.type})
			    .then((doc) => {
			    	if (!doc.length) {
			    		return true;
			    	}
			    	return false;
			    })
			    .then((build) => {
			    	console.log('build: ' + build);
			    	if (build) {
			    		let type = new articleType({type: articleData.type});
			    		return type.save();
			    	}
			    })
			    .then((type) => {
			    	if (type instanceof Object) {
			    		console.log('类型存储成功');
			    	}
			    	let articles = new article({
						author: 'susantong',
				 		time: getTimes(),
				 		headImg: imgPath,
				 		type: articleData.type,
				 		title: articleData.title,
				 		contents: articleData.contents,
				 		watchNum: 0
			    	});
			    	return articles.save();
			    })
			    .then((articles) => {
			    	if (articles instanceof Object) {
			    		console.log('文章存储成功');
			    		responseJson(res, true, 'post article success');
			    	} else {
			    		console.log('发表失败');
	 					responseJson(res, false, 'post article failed');
			    	}
			    });
};

//查找所有type
let findAllType = (req, res) => {
	articleType.find({}, (err, doc) => {
		if (err) {
			console.log('文章类型查找失败');
			responseJson(res, false, 'articleType  find failed');
			return;
		}
		if (!doc.length) {
			console.log('还没有类型');
			responseJson(res, true, doc);
			return;
		}
		console.log('类型查找成功');
		console.log(doc);
		responseJson(res, true, doc);
	});
};

//修改浏览量
let addWatchNum = (data, req, res) => {
	article.update({_id: data.id}, {$set: {watchNum: data.watchNum + 1}}, (err) => {
		if (err) {
			console.log('访问量修改成功');
			responseJson(res, false, 'update failed');
			return;
		}
		console.log('访问量修改成功');
		responseJson(res, true, 'update success');
	});
};


export {postArticles, findAll, findById, findByType, updateArticles,
	deleteArticles, findAllType, addWatchNum};