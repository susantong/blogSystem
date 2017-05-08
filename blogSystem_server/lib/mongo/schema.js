import mongoose from './mongoose.js';
//用于数据模板的发布
let articleSchema = new mongoose.Schema({
	author: String,
	headImg: String,	
	time: String,
	type: String,
	title: String,
	contents: String,
	watchNum: Number
});

//用于箴言模板的发布
let maximSchema = new mongoose.Schema({
	image: String,
	text: String,
	date: String
});

//用于存储文章类型
let typeSchema = new mongoose.Schema({
	type: ''
});


let article = mongoose.model('article', articleSchema);
let maxim = mongoose.model('maxim', maximSchema);
let articleType = mongoose.model('articleType', typeSchema);

export {article, maxim, articleType};