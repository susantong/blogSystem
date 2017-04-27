<template>
	<div class="list">
		<div class="list-hot">
			<div class="list-hot-one">
				<img class="one-img" src=""/>
				<div class="one-text">
					<div class="text-border">
						<h2>{{data.list[0].title}}</h2>
						<p>{{data.list[0].contents}}</p>
					</div>
				</div>
			</div>
			<div class="list-hot-two">
				<div class="two-text">
					<div class="text">
						<h2>{{data.list[0].title}}</h2>
						<p>{{data.list[0].contents}}</p>
					</div>
				</div>
				<img class="two-img" src="">
			</div>
		</div>
		<div v-for="list in data.list">
			<div class="lists">
				<div class="image"></div>
				<div class="article">
					<h2 class="article-tit" tag="h2">{{list.title}}</h2>
					<div class="article-info">
						<span></span>
						<span>{{list.author}}</span>
						<span>发布时间：{{list.time}}</span>
						<span>分类：{{list.type}}</span>
					</div>
					<p class="article-content">{{list.contents}}</p>
				</div>
			</div>
			<div class="list-detail">
				<router-link to="/article" class="detail">立即查看</router-link>
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
		width: 100%;
		
		.list-hot {
			margin-bottom: 30px;
			width: 100%;
			height: 400px;
			h2 {
				font-size: 16px;
				text-overflow: ellipsis;
				cursor: pointer;
				font-weight: bold;
			}
			p {
				width: 90%;
				margin-top: 20px;
				font-size: 14px;
				overflow: hidden;
				height: 40px;
				line-height: 20px;
			}

			.text-border, .text {
				width: 70%;
				height: 50%;
				overflow: hidden;
				position: absolute;
				left: 0;
				top: 0;
				bottom: 0;
				right: 0;
				margin: auto;
				padding: 4px;
				color: #7d7d7d;
			}
		}
		.list-hot-one {
			width: 100%;
			height: 200px;
			
			.one-img {
				width: 70%;
				height: 100%;
				float: left;
				background-color: red;
			}
			.one-text {
				float: left;
				height: 100%;
				width: 30%;
				position: relative;
			}

		}
		.list-hot-two {
			width: 100%;
			height: 200px;
			.two-text {
				width: 70%;
				height: 100%;
				float: left;
				position: relative;
			}
			.two-img {
				width: 30%;
				height: 100%;
				float: left;
				background-color: blue;
			}
		}
		.list-detail {
			width: 100%;
			text-align: center;
			.detail {
			margin-bottom: 30px;
			display: inline-block;
			background-color: #f6a90e;
			color: #fff;
			width: 10%;
			padding: 1% 1.4%;
			border-radius: 5px;
			text-align: center;
		}
		}
		.lists {
			word-break: nowrap;
			background-color: #ebebeb;
			width: 100%;
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

			a {
				color: #3d3d3d;
				text-decoration: none;
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
		.lists:hover a {
			font-weight: 800;
		} 
	}
</style>