<template>
	<div class="list">
		<div class="lists" v-for="list in data.list">
			<div class="image"></div>
			<div class="article">
				<router-link to="" tag="h2" class="article-tit">{{list.title}}</router-link>
				<div class="article-info">
					<span></span>
					<span>{{list.author}}</span>
					<span>发布时间：{{list.time}}</span>
					<span>分类：{{list.type}}</span>
				</div>
				<p class="article-content">{{list.contents}}</p>
			</div>
		</div>
	</div>
</template>

<script>
import getCGI from '../../getCGI/list';
	let data = {
		list: []
	};
	getCGI(data);
	export default {
		name: 'list',
		data() {
			return {
				data: data
			}
		}
	}
</script>

<style lang="scss">
	.list {
		.lists {
			word-break: nowrap;
			background-color: #fff;
			width: 80%;
			height: 180px;
			overflow: hidden;
			margin-bottom: 30px;
			cursor: pointer;
			.image {
				float: left;
				width: 20%;
				height: 80%;
				margin-left: 5%;
				border: 1px solid #ccc;
				top: 50%;
				position: relative;
				transform: translateY(-50%);
			}
			.article {
				float: left;
				width: 64%;
				height: 144px;
				margin-left: 5%;
				top: 50%;
				position: relative;
				transform: translateY(-50%);
			}

			.article-tit {
				font-size: 16px;
				color: #3d3d3d;
				font-weight: bold;
			}

			.article-info {
				padding: 10px 0;
				font-size: 14px;
				color: #919898;
			}

			.article-content {
				height: 86px;
				width: 100%;
				overflow: hidden;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 4;
				overflow: hidden;
				line-height: 21px;
				font-size: 14px;
				color: #526163;
			}
		}

		.lists:hover {
			box-shadow: 1px 3px 9px #ccc;
			transition: .3s;
		} 
	}
</style>