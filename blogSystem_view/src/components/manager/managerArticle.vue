<template>
	<div class="managerArticle">
		<div class="list" v-for="list in data.list">
			<router-link :to="{path: '/article', query: {id: data.list[0]._id, watchNum: data.list[0].watchNum}}" tag="span" class="list-tit">{{list.title}}</router-link>
			<router-link :to="{path: '/editArticle', query: {id: data.list[0]._id}}" tag="span" class="list-trans">编辑</router-link>
			<span class="list-trans" @click="delDom(list._id, list.headImg)">删除</span>
		</div>
	</div>
</template>

<script>
import getCGI from '../../getCGI/manager'
import axios from 'axios';
import qs from 'qs';

let data = {
	list: [],
	last_id: '',
	loading: false,
	pageSize: 0,
	length: 0
};
	export default {
		name: 'managerArticle',
		data() {
			return {
				data: data
			}
		},
		mounted() {
			$(this.$parent.$refs.blog).addClass('change');
			$(this.$parent.$refs.maxim).removeClass('change');
			getCGI(data, {last_id: 0, pageSize: 8});
			this.data = data;
			//console.log(data);
		},
		methods: {
			delDom(id, path) {
				//console.log(path);
				let data = qs.stringify({
					id: id,
					path: path
				});
				axios({
					method: 'post',
					url: 'http://localhost:3001/manager/article/deleteArticles',
					data: data
				})
				.then((response) => {
					if (response.data.success) {
						alert('删除成功!');
						setTimeout(() => {
							this.$router.push({name: 'list'});
						}, 200);
					}
				})
				.catch((err) => {
					console.log(err);
				});
			}
		}
	}
</script>

<style lang="scss">
	.managerArticle {
		span {
			color: #444;
		}
		span:hover {
			cursor: pointer;
			font-weight: bold;
		}

		.list {
			font-size: 18px;
			padding-bottom: 4px;
			border-bottom: 2px solid #ccc;
			margin-bottom: 20px;
		}
		.list-tit {
			display: inline-block;
			width: 70%;
			overflow: hidden;
			text-overflow: ellipsis;
			vertical-align: middle;
		}
		.list-trans {
			margin-left: 10px;
			vertical-align: middle;
		}
	}
</style>