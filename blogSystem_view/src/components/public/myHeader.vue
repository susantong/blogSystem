<template>
	<div class="header">
		<div class="menu">MENU</div>
	</div>
</template>

<script>
	import myAside from './myAside.vue'
	
	export default {
		name: 'myHeader',
		data() {
			return {
			}
		},
		methods: {
			show() {
				this.$root.eventHub.$emit('shows', true);
			},
			hide() {
				this.$root.eventHub.$emit('shows', false);
			}
		}
	}
</script>

<style lang="scss">
	.header {
		width: 100%;
		height: 50px;
		background-color: #eee;
		color: #f6a90e;
		font-size: 24px;
		line-height: 50px;
		.menu {
			cursor: pointer;
			width: 5%;
			margin-left: 20px;
		}
	}

	
</style>