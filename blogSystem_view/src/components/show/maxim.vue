<template>
	<div class="maxim">
		<div class="maxims" v-for="list in data.list">
			<div class="maxim-img"><img :src="list.image"></div>
			<div class="maxim-text">
				{{list.text}}
				<span>{{list.date}}</span>
			</div>
		</div>
		<next :obj="obj"  @accept="accepts"></next>
		<div @click="tag && nexts()" ref="next" class="next">next</div>
	</div>
</template>

<script>
	import getCGI from '../../getCGI/maxim'
	import axios from 'axios'
	import qs from 'qs'
	import next from '../public/Next.vue'; 
	let data = {
		list: [],
		last_id: '',
		loading: false,
		pageSize: 0,
		length: 0
	};

	export default {
		name: 'maxim',
		components: {
			next: next
		},
		data() {
			return {
				data: data,
				obj: '',
				tag: true
			}
		},
		mounted() {
			$(this.$parent.$refs.maxim).addClass('change');
			$(this.$parent.$refs.blog).removeClass('change');
		
			getCGI(data, {last_id: 0, pageSize: 5}, true);
			this.data = data;
		},
		methods: {
			nexts() {
				this.obj = {
					last_id: this.data['last_id'],
					pageSize: 5,
					getCGI: getCGI,
					data: this.data
				};
				//console.log('aa');
			},
			accepts(data) {
				this.tag = data;
				this.$refs.next.innerHTML = '没有更多了。。。';
			}
		}
	}
</script>

<style lang="scss">
	.maxim {
		width: 100%;
		.maxims {
			overflow: hidden;
			height: 100px;
			width: 100%;
			margin-bottom: 30px;
			animation: trans 1.4s;
			@keyframes trans {
				0% {transform: scale(0, 0);}
				50% {transform: scale(1.1, 1.1);}
				100% {transform: scale(1, 1)}
			}

			.maxim-img {
				width: 100px;
				height: 100%;
				border-radius: 50%;
				background: red;
				float: left;
				img {
					width: 100%;
					height: 100%;
					border-radius: 50%;
				}
			}
			.maxim-text {
				float: left;
				width: 80%;
				margin-left: 30px;
				height: 100px;
				border: 1px solid #ccc;
				box-sizing: border-box;
				background-color: #fff;
				font-size: 14px;
				position: relative;
				line-height: 21px;
				padding: 3px;
				border-radius: 3px;

				span {
					position: absolute;
					bottom: 5px;
					right: 5px;
					background-color: #f6a90e;
					padding: 2px;
					border-radius: 4px;
					font-size: 12px;
					color: #fff;
				}
			}
		}
		.next {
			text-align: center;
			color: blue;
			font-size: 1.4rem;
			cursor: pointer;
		}
	}
</style>