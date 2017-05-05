import express from 'express';
import {postMaxims} from '../manager/maxim';

const router = express.Router();

//发表箴言
router.use('/postMaxims', (req, res) => {
	let maximData = {
		image: req.body.upload,
		text: req.body.text
	};
	postMaxims(maximData, req, res);
});

export default router;