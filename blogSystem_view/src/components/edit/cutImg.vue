<template>
	<div class="cutImg">
		<div class="mask"></div>
		<img class="previews" :src="data.imgSrc">
		<div class="img-box">   
		</div>
		<img  class="preview" :src="data.imgSrc">
		<!-- 左 -->
		<div class="outer"></div>
		<!-- 上 -->        
		<div class="outer"></div>
		<!-- 右 -->        
		<div class="outer"></div>
		<!-- 下 -->        
		<div class="outer"></div>

		<button type="button" class="btn" @click="hide">确认</button>
	</div>
</template>

<script>
import  cutImg from '../../assets/js/cut.js'
	export default {
		name: 'cutImg',
		data() {
			return {
				data: {
					imgSrc: ''
				}
			}
		},
		mounted() {
			this.$root.eventHub.$on('src', (imgSrc) => {
				this.data.imgSrc = imgSrc;
				console.log(imgSrc);
			});
			cutImg('.previews');
		},
		methods: {
			hide() {
				this.$emit('toShow', false);
			}
		}
	}
</script>

<style lang="scss">
	.cutImg {
		position: absolute;
		z-index: 10;
		.mask {
			width: 100%;
			height: 100%;
			background-color: #000;
			opacity: 0.3;
			position: absolute;
		}
		.previews {
			position: absolute;
			z-index: 11;
			top: 50px;
			left: 300px;
		}
		.img-box {
			position: absolute;
			overflow: hidden;
			top: 0;
			left: 0;
			z-index: 13;
		}
		.preview {
			position: absolute;
			top: 350px;
			left: 50%;
			transform: translate(-50%);
			z-index: 11;
		}
		.outer {
			overflow: hidden;
			background-color: #000;
			opacity: 0.4;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 12;
		}

		.btn {
			position: absolute;
			top: 256px;
			left: 750px;
		}
	}
</style>