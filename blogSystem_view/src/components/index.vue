<template>
	<div class="index">
		<div class="myheader">
		</div>
		<p class="menu">MENU</p>
		<myAside class="myaside"></myAside>
    	<div class="content-wrap">
    		<div class="content">
    			<router-view></router-view>
    			<loading></loading>
    		</div>
    	</div>
	</div>
</template>

<script>
import myHeader from './public/myHeader.vue';
import myAside from './public/myAside.vue';
import loading from './public/loading.vue'

	export default {
		name: 'index',
		components: {
    		myAside: myAside,
    		loading: loading
  		},
		data() {
			return {
				data: {
					msg: false,
					tag: true
				}
			}
		},
		mounted() {
			
			this.change();
		},
		watch: {
			'$route': 'change'
		},
		methods: {
			change() {
				let route = window.location.hash;
				let that = this;
				let state = '';
				//console.log(route);
				// switch(route) {
				// 	case '#/show/list':
				// 		state = 'list';
				// 		//this.data.tag = true;
				// 		break;
				// 	case '#/show/maxim':
				// 		state = 'maxim';  
				// 		//this.data.tag = true;  
				// 		break;

				// }
				//console.log('tag: ' + this.data.tag);
				//etTimeout(() => {
					//this.$root.eventHub.$on('go', (msg) => {
						//console.log('tag: ' + that.data.tag);
					//this.data.tag = !this.data.tag;
						//that.$root.eventHub.$emit(state, true);
						//this.data.tag = !this.data.tag;
					//});
				//}, 1000);
     
			}
		}
	}
</script>

<style lang="scss">
	.index {
		@keyframes mime {
			0% {left: -200px;}
			50% {left: -80px;}
			100% {left: 0}
		}
		.myheader {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 10;
			width: 100%;
			height: 50px;
			background-color: #eee;
		}
		.menu {
			position: fixed;
			left: 20px;
			top: 10px;
			z-index: 10;
			font-size: 24px;
			color: #f6a90e;
			cursor: pointer;
			height: 40px;
		}
		.menu:hover+.myaside {
			left: 0;
			transition: left 1.5s;
		}
		.header-wrap {
			overflow: hidden;
			position: relative;
		}
		.myaside {
			position: fixed;
			left: -200px;
			top: 50px;
			z-index: 999;
			display: block;
			transition: left 1s;
		}
		.myaside:hover {
			left: 0;
		}

		.content-wrap {
			position: relative;
			top: 80px;
			left: 300px;
			width: 70%;
		}
	    .content {
	      width: 80%;
	      min-width: 720px;	      
	    }
	}
</style>