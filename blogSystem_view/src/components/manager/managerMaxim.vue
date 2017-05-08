<template>
	<div class="managerMaxim">
		<div class="list" v-for="list in data.list">
			<router-link :to="{path: '/maxim', query: {id: data.list[0]._id}}" tag="span" class="list-tit">{{list.text}}</router-link>
			<router-link :to="{path: '/editMaxim', query: {id: data.list[0]._id}}" tag="span" class="list-trans">编辑</router-link>
			<span class="list-trans" @click="delDom(list._id)">删除</span>
		</div>
	</div>
</template>

<script>
import getCGI from '../../getCGI/maxim';
import axios from 'axios';
let data = {
	list: []
};
	export default {
		name: 'managerMaxim',
		data() {
			return {
				data: data
			}
		},
		mounted() {
			getCGI(data);
			this.data = data;
		},
		methods: {
			delDom(id) {
				axios({
					method: 'get',
					url: 'http://localhost:3001/manager/maxim/deleteMaxims?id=' + id
				})
				.then((response) => {
					if (response.data.success) {
						alert('删除成功!');
						//location.href="/manager/managerArticle";
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
	.managerMaxim {
		span {
			color: #444;
		}
		span:hover {
			font-weight: bold;
			cursor: pointer;
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