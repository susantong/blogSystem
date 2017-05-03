<template>
	<div class="index">
		<div class="myheader">
		</div>
		<p class="menu">MENU</p>
		<myAside class="myaside"></myAside>
    	<div class="content-wrap">
    		<div class="content">
    			<router-view></router-view>
    		</div>
    	</div>
	</div>
</template>

<script>
import myHeader from './public/myHeader.vue';
import myAside from './public/myAside.vue';

	export default {
		name: 'index',
		components: {
    		myAside: myAside
  		},
		data() {
			return {
				data: {
					msg: false
				}
			}
		},
		methods: {
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
			position: absolute;
			top: 80px;
			width: 100%;
		}
	    .content {
	      width: 60%;
	      margin: 0 auto;	      
	    }
	}
</style>