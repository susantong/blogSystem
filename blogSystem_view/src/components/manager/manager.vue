<template>
	<div class="manager">
		<h2>管理页面</h2>
		<router-link to="/manager/managerArticle">
			<button type="button" ref="blog">博客</button>
		</router-link>
		<router-link to="/manager/managerMaxim">
			<button type="button" ref="maxim">箴言</button>
		</router-link>
		<router-view></router-view>
	</div>
</template>

<script>

	export default {
		name: 'manager'
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

		button {
			margin-bottom: 30px;
		}

		.change {
			color: #fff;
			background-color: #f6a90e;
		}
	}
</style>