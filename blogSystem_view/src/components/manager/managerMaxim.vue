<template>
	<div class="managerMaxim">
		<div class="list" v-for="list in data.list">
			<a href="#" class="list-tit">{{list.title}}</a>
			<a href="#" class="list-trans">编辑</a>
			<a href="#" class="list-trans">删除</a>
		</div>
	</div>
</template>

<script>
import getCGI from '../../getCGI/maxim';
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
		}
	}
</script>