<template>
	<div class="articles">
		<h2>{{data.list.title}}</h2>
		<p class="artcle-tit">
			<span>发布时间: {{data.list.time}}</span>
			<span>编辑: {{data.list.editor}}</span>
			<span>阅读量: {{data.list.watchNum}}</span>
		</p>
		<p class="artcle-text">{{data.list.contents}}</p>
	</div>
</template>

<script>
import getCGI from '../../getCGI/article'
let data = {
	list: {}
};
getCGI(data);

	export default {
		name: 'article',
		data() {
			return {
				data: data
			}
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