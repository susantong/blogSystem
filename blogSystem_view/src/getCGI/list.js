let getTime = function () {
	let time = new Date();
	return time.getFullYear() + '-' + (time.getMonth() + 1) + '-' + time.getDate()
	+ ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();
}

export default function (data) {
	data.list = [
		{
			title: '如何建立个人博客？',
			headImg: '',
			author: 'susantong',
			time: getTime(),
			type: '学无止境',
			contents: `想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习
			的经验和经历，通过互联网的形式来
			分享给别人。通过分享与网友进行互动，让更多的
			人了解和认识你，并且树立自己在互联网上的个人品牌，
			其实这就是一种“自媒体”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程
			是什么？只有先了解这套流程，我们才能做出自己满意的个人博客。`
		},
		{
			title: '如何建立个人博客？',
			headImg: '',
			author: 'susantong',
			time: getTime(),
			type: '学无止境',
			contents: `想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习
			的经验和经历，通过互联网的形式来
			分享给别人。通过分享与网友进行互动，让更多的
			人了解和认识你，并且树立自己在互联网上的个人品牌，
			其实这就是一种“自媒体”。那么我们怎么去建立自己的自媒体博客呢？我认为：首先得先明白建立一个博客的流程
			是什么？只有先了解这套流程，我们才能做出自己满意的个人博客。`
		}
	];
}