import express from 'express';
import uploadImg from '../manager/upload';

import {postArticles, findAll, findById, findByType, updateArticles,
	deleteArticles, findAllType, addWatchNum} from '../manager/article';

const router = express.Router();

//发表文章
router.use('/postArticles', (req, res) => {
	//console.log(typeof req.body);
	let articleData = {
		type: req.body.type,
		title: req.body.title,
		headImg: req.body.upload,
		contents: req.body.contents
	};
	postArticles(articleData, req, res);
});

//查找所有文章
router.use('/findAll', (req, res) => {
	findAll(req, res);
});

//上传图片
router.use('/upload', (req, res) => {
	uploadImg(req, res);
});

//根据id查找文章
router.use('/findById', (req, res) => {
	findById(req.param('id'), req, res);
});

//根据type查找文章
router.use('/findByType', (req, res) => {
	findByType(req.param('type'), req, res);
});

//根据id删除文章
router.use('/deleteArticles', (req, res) => {
	let data = {
		id: req.body.id,
		path: req.body.path
	};
	deleteArticles(data, req, res);
});

//根据id修改文章
router.use('/updateArticles', (req, res) => {
	let articleData = {
		id: req.body.id,
		type: req.body.type,
		title: req.body.title,
		contents: req.body.contents
	};
	updateArticles(articleData, req, res);
});

//查找所有type
router.use('/findAllType', (req, res) => {
	findAllType(req, res);
});

//根据id修改watchNum浏览量
router.use('/addWatchNum', (req, res) => {
	let data = {
		id: req.body.id,
		watchNum: Number(req.body.watchNum)
	};
	console.log(data);
	addWatchNum(data, req, res);
});

export default router;