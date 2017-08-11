<template>
	<div class="managerMaxim">
		<div class="list" v-for="list in data.list">
			<router-link :to="{path: '/maxim', query: {id: data.list[0]._id}}" tag="span" class="list-tit">{{list.text}}</router-link>
			<router-link :to="{path: '/editMaxim', query: {id: data.list[0]._id}}" tag="span" class="list-trans">编辑</router-link>
			<span class="list-trans" @click="delDom(list._id, list.image)">删除</span>
		</div>
	</div>
</template>

<script>
import getCGI from '../../getCGI/maxim';
import axios from 'axios';
import qs from 'qs'
let data = {
	list: [],
	last_id: '',
	loading: false,
	pageSize: 0,
	length: 0
};
	export default {
		name: 'managerMaxim',
		data() {
			return {
				data: data
			}
		},
		mounted() {
			$(this.$parent.$refs.maxim).addClass('change');
			$(this.$parent.$refs.blog).removeClass('change');
			getCGI(data, {last_id: 0, pageSize: 5});
			this.data = data;
		},
		methods: {
			delDom(id, path) {
				let data = qs.stringify({
					id: id,
					path: path
				});
				axios({
					method: 'post',
					url: 'http://localhost:3001/manager/maxim/deleteMaxims',
					data: data
				})
				.then((response) => {
					if (response.data.success) {
						alert('删除成功!');
						setTimeout(() => {
							this.$router.push({name: 'maxim'});
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