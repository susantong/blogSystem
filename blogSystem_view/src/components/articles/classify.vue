<template>
	<div class="classify">
		<div class="btn">
			<button type="button" v-for="btn in data.btn" @click="find(btn.type, $event)">{{btn.type}}</button>
		</div>

		<div v-for="list in data.list">
			<div class="lists">
				<div class="image"><img :src="list.headImg"></div>
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
				<router-link :to="{path: '/article', query: {id: list._id, watchNum: list.watchNum}}" tag="button" class="detail">立即查看</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';

	export default {
		name: 'classify',
		data() {
			return {
				data: {
					btn: [],
					list: []
				}
			}
		},
		mounted() {
			axios({
				method: 'get',
				url: 'http://localhost:3001/manager/article/findAllType'
			})
			.then((response) => {
				if (response.data.success) {
					this.data.btn = response.data.result;
				}
			})
			.catch((err) => {
				console.log(err);
			});

		},
		methods: {
			find(type, event) {
				$(event.currentTarget).addClass('change').siblings().removeClass('change');
				axios({
					method: 'get',
					url: 'http://localhost:3001/manager/article/findByType?type=' + type
				})
				.then((response) => {
					console.log(response.data.result);
					this.data.list = response.data.result;
				})
				.catch((err) => {
					console.log(err);
				});
			}
		}
	}
</script>

<style lang="scss">
	.classify {
		.list-detail {
			width: 100%;
			text-align: center;
			.detail {
				margin-bottom: 30px;
				display: inline-block;
				background-color: #f6a90e;
				color: #fff;
				width: 12%;
				//padding: 1% 1.4%;
				border-radius: 5px;
				text-align: center;
				height: 36px;
				line-height: 36px;
			}
		}
		.lists {
			word-break: nowrap;
			background-color: #ebebeb;
			width: 100%;
			height: 180px;
			overflow: hidden;
			margin: 30px 0;
			.image {
				float: left;
				width: 144px;
				height: 80%;
				margin-left: 5%;
				border: 1px solid #ccc;
				top: 50%;
				position: relative;
				transform: translateY(-50%);
			}

			img {
				width: 100%;
				height: 100%;
			}

			.article {
				float: left;
				width: 68%;
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

		.change {
			color: #fff;
			background-color: #f6a90e;
		}

		button {
			overflow: hidden;
		}
	}
</style>