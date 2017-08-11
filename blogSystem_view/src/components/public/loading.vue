<template>
	<div class="loading" v-show="show">
		<img :src="src">
	</div>
</template>

<script>
	export default {
		name: 'loading',
		props: {
			show: Boolean,
			witch: Number
		},
		computed: {
			src() {	
				console.log(this.witch);	
				switch(this.witch) {
					case 0:
						console.log('src');
						this.$emit('stop', true);
						return require('../../assets/images/picWait.gif');
						break;
					default:
						console.log('failed');
				}
			}
		}
	}
</script>

<style lang="scss">
	.loading {
		text-align: center;
	}
</style>