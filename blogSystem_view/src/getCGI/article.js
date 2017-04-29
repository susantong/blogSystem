function civilize(time) {
	if (time > 0 && time < 10) {
		return '0' + time;
	}
	return time;
}

let getTime = function () {
	let time = new Date();
	return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
	+ ' ' + civilize(time.getHours()) + ':' + civilize(time.getMinutes()) + ':' + civilize(time.getSeconds());
}

export default function (data) {
	data.list = {
			title: '总结个人博客经历的这四年',
			time: getTime(),
			editor: 'susan',
			watchNum: 1000,
			contents: `博客从最初的域名购买，到上线已经有四年的时间了，这四年的时间，有笑过，有怨过，有悔过，有执着过，也有放弃过…但最后还是坚持了下来，时间如此匆匆，等再回过头已来不及去弥补…
其实蛮遗憾的，话说这四年，并不是很专注于它，起初的建立是因为“面子”，一个网页设计师怎能没有一个属于自己的博客网站，域名几番斟酌选了yangqq(唯一用心的选了域名)，选好后，草草的用了两天时间，设计了一个简单的博客模板，接下来用了漏洞百出的asp程序(自己瞎改)，从网上copy了很多文章，放到网站上，就这样，我满心欢喜…博客从此也就搁置了。就像玩拼图，趁着三分热度和新奇，一鼓作气完成了，
就随意的丢在犄角旮旯了，再也没有兴趣…`
		};
}