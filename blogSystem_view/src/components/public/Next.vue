<template>
	<div class="next">
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'next',
		props: ['obj'],
		watch: {
			obj() {
				if(this.obj.data.loading){
					this.$emit('accept', false);
				} else {
					this.obj.getCGI(this.obj.data, {last_id: this.obj['last_id'], pageSize: this.obj.pageSize}, false);
				}
			}
		}
	}
</script>

<style lang="scss">
	.next {

	}
</style>