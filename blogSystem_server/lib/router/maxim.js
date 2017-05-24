import express from 'express';
import {postMaxims, findAll, deleteMaxims, findById, updataMaxims} from '../manager/maxim';

const router = express.Router();

//发表箴言
router.use('/postMaxims', (req, res) => {
	let maximData = {
		image: req.body.upload,
		text: req.body.text
	};
	//console.log(req.body.upload);
	postMaxims(maximData, req, res);
});

//查找所有箴言
router.use('/findAll', (req, res) => {
	let data = {
		last_id: req.body['last_id'],
		pageSize: req.body.pageSize
	};
	findAll(data, req, res);
});

//根据ID删除箴言
router.use('/deleteMaxims', (req, res) => {
	let data = {
		id: req.body.id,
		path: req.body.path
	};
	deleteMaxims(data, req, res);
});

//根据ID查找对应箴言
router.use('/findById', (req, res) => {
	findById(req.param('id'), req, res)
});

//根据id修改箴言
router.use('/updataMaxims', (req, res) => {
	let data = {
		id: req.body.id,
		text: req.body.text
	};
	updataMaxims(data, req, res);
});

export default router;