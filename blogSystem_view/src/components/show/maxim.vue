<template>
	<div class="maxim">
		<div class="maxims" v-for="list in data.list">
			<div class="maxim-img"><img :src="list.image"></div>
			<div class="maxim-text">
				{{list.text}}
				<span>{{list.date}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import getCGI from '../../getCGI/maxim'
	import axios from 'axios'
	import qs from 'qs'
	let data = {
		list: [],
		last_id: '',
		loading: false,
		pageSize: 0,
		length: 0
	};

	export default {
		name: 'maxim',
		data() {
			return {
				data: data
			}
		},
		mounted() {
			$(this.$parent.$refs.maxim).addClass('change');
			$(this.$parent.$refs.blog).removeClass('change');
		
			getCGI(data, {last_id: 0, pageSize: 5});
			this.data = data;
		},
		updated() {
			let that = this;

			this.$root.eventHub.$on('maxim', (msg) => {
				//console.log('..' + msg);
				//console.log(that.data.loading);
				that.data.loading = msg;

			});
		},
		watch: {
			'data.loading'() {
				console.log('loading..' + this.data.loading);
				//this.data.loading = !this.data.loading;
				let that = this;
				this.data.pageSize = 4;
				let data = qs.stringify({
					last_id: this.data['last_id'],
					pageSize: this.data.pageSize
				});
				axios({
					method: 'post',
					url: 'http://localhost:3001/manager/maxim/findAll',
					data: data
				})
				.then((response) => {
					//console.log(response.data.result.length);
					that.data.length = response.data.result.length;
					if (response.data.result.length) {
						that.data['last_id'] = (response.data.result[that.data.length - 1])['_id'];
				
						setTimeout(() => {
							that.data.list = that.data.list.concat(response.data.result);
						
							that.$root.eventHub.$emit('stop', {value: false, loading: that.data.loading});
						}, 1000);

					} else {
						//console.log('stop');
						that.$root.eventHub.$emit('stop', {value:true, loading: that.data.loading});
					}
					
				})
				.catch((err) => {
					console.log(err);
				});
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
	}
</style>