import express from 'express';

import article from './article';
import maxim from './maxim';
import login from '../manager/login'

const router = express.Router();

//登录操作
router.use('/login', (req, res) => {
	console.log(req.body.username);
	let userData = {
		username: req.body.username,
		password: req.body.password
	};
	login(userData, req, res);
});

router.use('/article', article);
router.use('/maxim', maxim);

export default router;