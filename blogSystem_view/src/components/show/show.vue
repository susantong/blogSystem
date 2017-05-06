<template>
	<div class="show">
		<div class="btn">
			<router-link to="/show/list" tag="button" :class="{active: data.isActive1}" @click.native="active1">博客</router-link>
			<router-link to="/show/maxim" tag="button" :class="{active: data.isActive2}" @click.native="active2">箴言</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import getCGI from '../../getCGI/list';
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
				this.data.isActive1 = true;
				this.data.isActive2 = false;
			},
			active2() {
				this.data.isActive1 = false;
				this.data.isActive2 = true;
			}
		},
		mounted() {
			this.$root.eventHub.$emit('listData', getCGI())
		}
	}
</script>

<style lang="scss">
	.show {
		width: 100%;
		.btn {
			width: 100%;
		}
		button {
			margin-bottom: 30px;
		}
		.active {
			background-color: #f6a90e;
			color: #fff;
		}
	}
</style>