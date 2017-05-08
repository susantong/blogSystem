import express from 'express';
import {postMaxims, findAll, deleteMaxims, findById} from '../manager/maxim';

const router = express.Router();

//发表箴言
router.use('/postMaxims', (req, res) => {
	let maximData = {
		image: req.body.upload,
		text: req.body.text
	};
	postMaxims(maximData, req, res);
});

//查找所有箴言
router.use('/findAll', (req, res) => {
	findAll(req, res);
});

//根据ID删除箴言
router.use('/deleteMaxims', (req, res) => {
	deleteMaxims(req.param('id'), req, res);
});

//根据ID查找对应箴言
router.use('/findById', (req, res) => {
	findById(req.param('id'), req, res)
});

export default router;