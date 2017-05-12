<template>
	<div class="articles">
		<h2>{{data.list[0].title}}</h2>
		<p class="artcle-tit">
			<span>发布时间: {{data.list[0].time}}</span>
			<span>编辑: {{data.list[0].author}}</span>
			<span>阅读量: {{data.list[0].watchNum}}</span>
		</p>
		<p class="artcle-text">{{data.list[0].contents}}</p>
	</div>
</template>

<script>
import getCGI from '../../getCGI/article';
import axios from 'axios';
import qs from 'qs';
let data = {
	list: [{
		title: '加载中',
		time: '加载中',
		author: '加载中',
		watchNum: '加载中',
		contents: '加载中'
	}]
};
let id;
let watchNum;
	export default {
		name: 'article',
		data() {
			return {
				data: data
			}
		},
		created() {
			watchNum = this.$route.query.watchNum;
			console.log(watchNum);
			let data = qs.stringify({
					id: id,
					watchNum: watchNum
				});
			axios({
				method: 'post',
				url: 'http://localhost:3001/manager/article/addWatchNum',
				data: data
			})
			.then((response) => {
				if (response.data.success) {
					alert('访问量增加成功');
					return;
				}
			})
			.catch((err) => {
				alert('访问量增加失败');
				return;
			});
		},
		mounted() {
			id = this.$route.query.id;
			getCGI(data, id);
			this.data = data;
		}
	}
</script>

<style lang="scss">
	.articles {
		h2 {
			font-size: 24px;
			font-weight: bold;
			text-align: center;
			margin-bottom: 20px;
			color: #999;
			overflow: hidden;
		}
		.artcle-tit {
			border: 1px dotted #ccc;
			text-align: center;
			span:first-child, span:nth-child(2) {
				margin-right: 20px;
			}
			height: 24px;
			line-height: 24px;
		}
		.artcle-text {
			margin-top: 20px;
			text-indent: 2em;
			font-size: 16px;
			line-height: 24px;
		}
	}
</style>