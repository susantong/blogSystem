import express from 'express';

import article from './article';

const router = express.Router();

//登录操作
router.use('/login', (req, res) => {
	let userData = {
		username: req.param('username'),
		password: req.param('password')
	};
	login(userData, req, res);
});

router.use('/article', article);

export default router;