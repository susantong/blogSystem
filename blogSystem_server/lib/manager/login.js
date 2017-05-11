import responseJson from '../responseJson.js';

let login = (userData, req, res) => {
	if (userData.username === 'susan' && userData.password === '111333aaa') {
		req.session.username = 'susan';
		responseJson(res, true, 'susan');
	} else if (userData.username !== 'susan') {
		responseJson(res, false, 'username default');
	} else {
		responseJson(res, false, 'password default');
	}
};

export default login;