<template>
	<div class="loading" v-show="data.show">
		<img src="/src/assets/images/picWait.gif" v-show="data.img">
		<span class="nomore" v-show="!data.img">没有更多数据了。。。</span>
	</div>
</template>

<script>
	export default {
		name: 'loading',
		data() {
			return {
				data: {
					show: false,
					classify: '',
					img: false,
					page: '',
					tag: true,
					value: true
				}
			}
		},
		mounted() {
			document.body.addEventListener('mousewheel', this.wait, false);
		},
		updated() {
			this.loading();
		}, 
		methods: {
			loading() {
				let that = this;
				this.$root.eventHub.$on('stop', (msg) => {
					that.data.show = false;
					that.data.value = !msg.loading;
					//console.log('msg: ' + msg.value
						//);
					if (msg.value === false) {
						//that.data.value = !msg.loading;
						that.data.img = true;
						document.body.addEventListener('mousewheel', that.wait, false);
					} else if (msg.value == true) {
						//that.data.value = !msg.loading;
						that.data.show = true;
						that.data.img = false;
						document.body.addEventListener('mousewheel', that.wait, false);

					} else if (msg.value == 'failed') {
						that.data.show = false;
						document.body.addEventListener('mousewheel', that.wait, false);
					}
				});
			},
			wait() {
				let that = this;
				let state;
				let route = window.location.hash;
				let value = true;
				const app = document.querySelector('#app');
				
				if (document.body.scrollTop > app.offsetHeight - 420) {	
					switch(route) {
						case '#/show/list':
							state = 'list';
							break;
						case '#/show/maxim':
							state = 'maxim'; 
							break;

					}
					if (state == 'list' || state == 'maxim') {		
						this.data.show = true;
						this.data.img = true;
						document.body.removeEventListener('mousewheel', this.wait, false);
						//console.log('value: ' + that.data.value);
						this.$root.eventHub.$emit(state, that.data.value);
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	.loading {
		text-align: center;

		.nomore {
			color: #ccc;
			font-size: 20px;
		}
	}
</style>