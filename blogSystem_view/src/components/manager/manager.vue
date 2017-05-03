<template>
	<div class="manager">
		<h2>管理页面</h2>
		<div class="list" v-for="list in data.list">
			<a href="#" class="list-tit">{{list.title}}</a>
			<a href="#" class="list-trans">编辑</a>
			<a href="#" class="list-trans">删除</a>
		</div>
	</div>
</template>

<script>
import getCGI from '../../getCGI/manager.js'
let data = {
	list: []
};
getCGI(data);
	export default {
		name: 'manager',
		data() {
			return {
				data: data
			}
		}
	}
</script>

<style lang="scss">
	.manager {
		width: 80%;
		h2 {
			font-size: 24px;
			color: #f6a90e;
			margin-bottom: 30px;
		}

		a {
			text-decoration: none;
			color: #444;
		}
		a:hover {
			font-weight: bold;
		}
		font-size: 24px;
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