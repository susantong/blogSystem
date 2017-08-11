<template>
	<div class="show" ref="show">
		<div class="btn">
			<router-link to="/show/list">
				<button type="button" ref="blog">博客</button>
			</router-link>
			<router-link to="/show/maxim">
				<button type="button" ref="maxim">箴言</button>
			</router-link>
		</div>
		<router-view :loading="data.loading" @stop="change"></router-view>
		<loading :show="data.show" :witch="data.witch"></loading>
	</div>
</template>

<script>
import getCGI from '../../getCGI/list';
import loading from '../public/loading.vue';
import scroll from '../../assets/js/scollor.js';
	
	export default {
		name: 'show',
		components: {
			loading: loading
		},
		data() {
			return {
				data: {
					show: false,
					witch: NaN,
					loading: false
				}
			}
		},
		methods: {

		},
		mounted() {
			this.$root.eventHub.$emit('listData', getCGI());
			scroll(this.$refs.show, this.data);
			this.data.switch = 0;
			this.data.loading = true;
		},
		methods: {
			change(msg) {
				console.log(msg);
			}
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