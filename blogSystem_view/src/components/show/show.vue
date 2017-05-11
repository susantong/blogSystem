<template>
	<div class="show">
		<div class="btn">
			<router-link to="/show/list">
				<button type="button" ref="blog">博客</button>
			</router-link>
			<router-link to="/show/maxim">
				<button type="button" ref="maxim">箴言</button>
			</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import getCGI from '../../getCGI/list';
	
	export default {
		name: 'show',
		data() {
			return {
				
			}
		},
		methods: {

		},
		mounted() {
			this.$root.eventHub.$emit('listData', getCGI());
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
		.change {
			color: #fff;
			background-color: #f6a90e;
		}
	}
</style>