<template>
	<div class="cutPictures">
		<!-- 上传控件 -->
		<div>
			<input type="file" name="upload" id="upload">
		</div>

		<img src="" alt="" id="preview" v-show="!data.show">

		<div class="show" v-show="data.show">
			<!-- 弹窗以及裁切图 -->
			<div class="mask"></div>
			<div class="cover">	
				<img src="" id="image" alt="">
				<button type="button" id="save" @click="toSave">保存</button>
			</div>
			
			<!-- 裁切范围重绘canvas -->
			<canvas id="myCanvas" width="146" height="146"></canvas>
		</div>
	</div>
</template>

<script>
import '../../assets/lib/jquery.Jcrop.css'
import '../../assets/js/jquery.Jcrop.js'
import cutPictures from '../../getCGI/cutPictures.js'
	export default {
		name: 'cutPictures',
		data() {
			return {
				data: {
					show: true
				}
			}
		},
		mounted() {
			cutPictures();
		},
		methods: {
			toSave() {
				this.data.show = false;
			}
		}
	}
</script>

<style lang="scss">
	.cutPictures {
		.mask {
			width: 100%;
			height: 100%;
			background-color: #000;
			opacity: 0.3;
			display: none;
			position: fixed;
			left: 0;
			top: 0;
			z-index: 20;
		}

		.cover {
			position: absolute;
			display: none;
			left: 300px;
			top: 100px;
			z-index: 21;
		}


		#myCanvas {
			position: absolute;
			left: 800px;
			top: 180px;
			z-index: 21;
		}

		#preview {
			margin: 20px 0;
		}

		#save {
			margin: 20px 0 0 100px;
			position: absolute;
		}
	}
</style>