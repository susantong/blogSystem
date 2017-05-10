import formidable from 'formidable';
import fs from 'fs'
import responseJson from '../responseJson';

//上传图片功能
let uploadImg = (imgResource, req, res) => {
	let imgData = imgResource || req.body.upload;
	//过滤data:URL
	//console.log(typeof imgData);
	let base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
	//console.log(base64Data + '111');
	let dataBuffer = new Buffer(base64Data, 'base64');
	//console.log(dataBuffer);
	let date = new Date().getTime();
	let path1 = 'E://blogSystem/blogSystem_server/public/images/' + date + '.png';
	let path2 = 'http://localhost:3001/images/' + date +'.png';
	//console.log(path);
	fs.writeFile(path1, dataBuffer, (err) => {
		if (err) {
			console.log(err);
			return ;
		} 
	});
	//console.log(path);
	return path2;
}

//删除图片
let delImg = (path, req, res) => {
	//console.log(E://blogSystem//blogSystem_server//public//images//1494245031684.png);
	let paths = path.replace(/http:\/\/localhost:3001\/images\//, 'E://blogSystem//blogSystem_server//public//images//');
	console.log(paths);
	fs.unlink(paths, (err) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log('success');
	})
	return true;
};

function rename(old, _new, code, bid) {
	let path = form.uploadDir + code + '/';
	fs.exits(path, (exits) => {
		if (!exits) {
			fs.mkdir(path);
			console.log('创建文件夹');
		}
		fs.renameSync(old, path + _new, (err) => {
			if (err) {
				console.log(err);
				return;
			}
			console.log('上传成功');
		});
	});
}

export {uploadImg, delImg};