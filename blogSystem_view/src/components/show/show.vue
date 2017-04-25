<template>
	<div class="show">
		<router-link to="/list" tag="button" :class="{active: data.isActive1}" @click.native="active1">博客</router-link>
		<router-link to="/list" tag="button" :class="{active: data.isActive2}" @click.native="active2">箴言</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
	let data = {
		isActive1: true,
		isActive2: false
	};
	export default {
		name: 'show',
		data() {
			return {
				data: data
			}
		},
		methods: {
			active1() {
				console.log('hi');
				this.data.isActive1 = true;
				this.data.isActive2 = false;
			},
			active2() {
				console.log('ok');
				this.data.isActive1 = false;
				this.data.isActive2 = true;
			}
		}
	}
</script>

<style lang="scss">
	.show {
		button {
			margin-bottom: 30px;
		}
		.active {
			background-color: #5cb85c;
			color: #fff;
		}
	}
</style>