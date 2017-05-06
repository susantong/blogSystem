import express from 'express';
import {postMaxims, findAll} from '../manager/maxim';

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

export default router;