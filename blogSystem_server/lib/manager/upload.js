import formidable from 'formidable';
import fs from 'fs'
import responseJson from '../responseJson';

//上传图片功能
let uploadImg = (req, res) => {
	let form = new formidable.IncomingForm();   //创建上传表单
  	const domain = './blogSystem_server/';
  	form.encoding = 'utf-8';        //设置编辑
  	form.uploadDir = './public/images/';     //设置上传目录
  	form.keepExtensions = true;     //保留后缀
  	form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
  	form.parse(req, function(err, fields, files) {
	if (err) {
		responseJson(res, false, 'err');
	    return;
	}
	//console.log(files);
	for (var key in files) {
		var extName = '';  //后缀名
		switch (files[key].type) {
		    case 'image/pjpeg':
		        extName = 'jpg';
		        break;
		    case 'image/jpeg':
		        extName = 'jpg';
		        break;
		    case 'image/png':
		        extName = 'png';
		        break;
		   	case 'image/x-png':
		        extName = 'png';
		        break;
		}

		if(extName.length == 0){
			responseJson(res, false, 'the extName failed');
		    return;
		}

		let avatarName = Math.random() + '.' + extName;
		    //图片写入地址；
		let newPath = form.uploadDir + avatarName;
		    //显示地址；
		let showUrl = domain + 'public/images/' + avatarName;
		fs.renameSync(files[key].path, newPath);  //重命名
		responseJson(res, true, showUrl);
	}
  });
}

export default uploadImg;