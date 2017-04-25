let responseJson = (res, success, data) => {
	if (success) {
		res.jsonp({
			success: success,
			result: data
		});
	} else {
		res.jsonp({
			success: success,
			reason: data
		});
	}
};

export default responseJson;