<template>
	<div class="index">
		<myHeader class="header"></myHeader>
    	<myAside class="myaside"></myAside>
    	<div class="content">
    		<router-view></router-view>
    	</div>
	</div>
</template>

<script>
import myHeader from './public/myHeader.vue';
import myAside from './public/myAside.vue';

	export default {
		name: 'index',
		components: {
    		myHeader: myHeader,
    		myAside: myAside
  		},
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss">
	.index {
		.header {
	      position: fixed;
	      top: 0;
	      left: 0;
	      z-index: 999;
	    }

	    .myaside {
	      position: fixed;
	      top: 50px;
	      left: 0;
	    }

	    .content {
	      position: absolute;
	      top: 100px;
	      left: 300px;
	    }
	}
</style>