<template>
	<div class="list">
		<div class="list-hot">
			<div class="list-hot-one" v-for="list in data.hotOne">
				<div class="one-img">
					<img :src="list.headImg">
					<img :src="list.headImg">
				</div>
				<div class="one-text">
					<div class="text-border">
						<router-link :to="{path: '/article', query: {id: list._id, watchNum: list.watchNum}}" tag="h2">{{list.title}}</router-link>
						<p>{{list.contents}}</p>
					</div>
				</div>
			</div>
			<div class="list-hot-two" v-for="list in data.hotTwo">
				<div class="two-text">
					<div class="text">
						<router-link :to="{path: '/article', query: {id: list._id, watchNum: list.watchNum}}" tag="h2">{{list.title}}</router-link>
						<p>{{list.contents}}</p>
					</div>
				</div>
				<div class="two-img">
					<img :src="list.headImg">
				</div>
			</div>
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
		<next :obj="obj"  @accept="accepts"></next>
		<div @click="tag && nexts()" ref="next" class="next">next</div>
	</div>
</template> 

<script>
import getCGI from '../../getCGI/list';
import next from '../public/Next.vue';
import axios from 'axios';
import qs from 'qs';

let data = {
	list: [{
		headImg: require('../../assets/images/dear.jpg'),
		contents: '数据未加载',
		_id: '123'
	}],
	hotOne: [{
		headImg: require('../../assets/images/dear.jpg'),
		contents: '数据未加载',
		_id: '123'
	}],
	hotTwo: [{
		headImg: require('../../assets/images/dear.jpg'),
		contents: '数据未加载',
		_id: '123'
	}],
	last_id: '',
	loading: false
};
	export default {
		name: 'list',
		components: {
			next: next
		},
		data() {
			return {
				data: data,
				obj: '',
				tag: true
			}
		},
		mounted() {
			$(this.$parent.$refs.blog).addClass('change');
			$(this.$parent.$refs.maxim).removeClass('change');
			
			getCGI(data, {last_id: 0, pageSize: 5}, true);
			this.data = data;
		},
		methods: {
			nexts() {
				this.obj = {
					last_id: this.data['last_id'],
					pageSize: 5,
					getCGI: getCGI,
					data: this.data
				};
			},
			accepts(data) {
				this.tag = data;
				this.$refs.next.innerHTML = '没有更多了。。。';
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
			img {
				width: 50%;
				height: 100%;
				float: left;
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
			}

			img {
				width: 100%;
				height: 100%;
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
			margin-bottom: 30px;
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

		.next {
			text-align: center;
			color: blue;
			font-size: 1.4rem;
			cursor: pointer;
		}
	}
</style>