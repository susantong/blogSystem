<template>
	<div class="cutPictures">
		<!-- 上传控件 -->
		<div>
			<input type="file" name="upload" ref='upload' @change="cutPictures">
		</div>

		<img :src="data.src" ref="headImg" alt="" v-show="!data.show">

		<div class="show">
			<!-- 弹窗以及裁切图 -->
			<div class="mask" v-show="data.show"></div>
			<div class="cover" v-show="data.show">	
				<img src="" ref="image" alt="">
				<button type="button" id="save" @click="toSave">保存</button>
			</div>
			
			<!-- 裁切范围重绘canvas -->
			<canvas ref="myCanvas" id="myCanvas" width="146" height="146" v-show="data.show"></canvas>
		</div>
	</div>
</template>

<script>
import '../../assets/lib/jquery.Jcrop.css'
import '../../assets/js/jquery.Jcrop.js'
import cutPictures from '../../getCGI/cutPictures.js'
	export default {
		name: 'cutPictures',
		props: ['msg'],
		data() {
			return {
				data: {
					show: false,
					src: this.msg,
					widthScale: 0,
					heightScale: 0,
					jscropApi: null
				}
			}
		},
		mounted() {
			console.log(this.msg);
		},
		methods: {
			toSave() {
				this.data.show = false;
				let data = this.$refs.myCanvas.toDataURL();
				this.data.src = data;
			},
			initJcrop() {
				let that = this;
				$(this.$refs.image).Jcrop({
					onChange: that.updateCoords,
					onSelect: that.updateCoords,
					aspectRatio: 1,
					boxWidth: 300,
					boxHeight: 300
				}, function () {
					//弹窗中显示的图片尺寸
					let mask = this.getBounds();
					let maskWidth = Number(mask[0])/2;
					let maskHeight = Number(mask[1])/2;

					//设置初始选中裁减范围
					this.setSelect([0, 0, maskWidth, maskHeight]);
					//console.log(this.$refs.image);
					that.data.widthScale = $(that.$refs.image)["0"].width / 250;
					that.data.heightScale = $(that.$refs.image)["0"].height / 250;
					that.data.jscropApi = this;
				});
			},
			//重绘
			updateCoords(c) {
				let img = this.$refs.image;
				//console.log(img);
				let ctx = this.$refs.myCanvas.getContext('2d');
				ctx.clearRect(0, 0, 146, 146);
				try {
					this.data.widthScale = this.data.widthScale === 1 ? this.$refs.image["0"].width / 250 : this.data.widthScale;
					this.data.heightScale = this.data.heightScale === 1 ? this.$refs.image["0"].height / 250 : this.data.heightScale; 
				} catch(e) {}
				//绘制画布
				console.log(this.data.widthScale);
				ctx.drawImage(img, c.x, c.y, c.w * this.data.widthScale, c.h * this.data.heightScale, 0, 0, 146, 146);
				//console.log(this.$refs.myCanvas);
			},
			cutPictures() {
				if (this.$refs.upload.files.leng === 0) {
					return;
				}
				let oFile = this.$refs.upload.files[0];
				if (!oFile) {
					return;
				}
				//console.log(this.data.jscrop_api);
				let fileName = oFile.name;
				let fileSize = oFile.size;
				let fileType = fileName.substring(fileName.lastIndexOf('.'), fileName.length).toLowerCase();
				if (fileType != '.jpg' && fileType != '.jpeg' && fileType != '.png' && fileType != '.gif' && fileType != '.bmp') {
					alert('请选择jpg,jpeg,png,gif,bmp格式的图片');
					return;
				}
				if (fileSize > 2*1024*1024) {
					alert('最大支持2MB图片');
					return;
				}
				//读取文件的API，fileReader
				let fileReader = new FileReader();
				fileReader.readAsDataURL(oFile);
				//读取成功显示弹窗等效果
				fileReader.onload = (e) => {
					this.$refs.image.src = e.target.result;
					this.data.src = e.target.result;
					this.data.show = true;
					//console.log(this.$refs.image.src);
					//裁剪组件的初始化
					this.initJcrop();
				}
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
			position: fixed;
			left: 0;
			top: 0;
			z-index: 20;
		}

		.cover {
			position: absolute;
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