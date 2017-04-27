<template>
	<div class="index">
		<myHeader class="myheader"></myHeader>
		<myAside class="myaside" v-show="data.msg"></myAside>
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
    		myHeader: myHeader,
    		myAside: myAside
  		},
		data() {
			return {
				data: {
					msg: false
				}
			}
		},
		created() {
			this.$root.eventHub.$on('change', (msg) => {
				this.data.msg = msg;
			});
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.index {
		.myheader {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 999;
		}
		.header-wrap {
			overflow: hidden;
			position: relative;
		}
		.myaside {
			position: fixed;
			left: 0;
			top: 50px;
			z-index: 999;
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