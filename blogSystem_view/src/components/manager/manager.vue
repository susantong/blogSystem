<template>
	<div class="manager">
		<h2>管理页面</h2>
		<router-link to="/manager/managerArticle" tag="button">博客</router-link>
		<router-link to="/manager/managerMaxim" tag="button">箴言</router-link>
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
	}
</style>