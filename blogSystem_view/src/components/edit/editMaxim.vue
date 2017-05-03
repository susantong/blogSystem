<template>
	<div class="editMaxim">
		<cutImg v-show="data.show" v-on:toShow="showIt"></cutImg>
		<h2>新箴言</h2>
		<label>上传图片：</label>
		<div class="uploadImg">
			<input type="file" name="upload" id="upload"><br /><br />	
			<button type="button" class="cut" @click="upload">剪裁</button>
		</div>
		<label>箴言内容</label>
		<div class="maxim-content">
			<textarea placeholder="输入箴言内容..."></textarea>
		</div>
		<div class="submits">
			<button type="button">提交</button>
		</div>
	</div>
</template>

<script>
import cutImg from './cutImg.vue'
	export default {
		name: 'editMaxim',
		components: {
			cutImg: cutImg
		},
		data() {
			return {
				data: {
					imgSrc: '',
					show: false
				}
			}
		},
		methods: {
			upload(e) {
				//console.log(document.getElementById('upload').files[0]);
				this.data.imgSrc = window.URL.createObjectURL(document.getElementById('upload').files[0]);
				console.log(this.data.imgSrc);
				this.data.show = true;
				this.$root.eventHub.$emit('src', this.data.imgSrc);
			},
			showIt(value) {
				//console.log('show');
				this.data.show = value;
			}
		}
	}
</script>

<style lang="scss">
	.editMaxim {
		font-size: 16px;

		h2 {
			font-size: 24px;
			color: #f6a90e;
			margin-bottom: 30px;
		}

		.uploadImg {
			margin: 20px 0;
			width: 100%;
		}

		.maxim-content {
			width: 100%;
			height: 200px;
			margin-top: 20px;
			border: 1px solid #ccc;
			textarea {
				display: inline-block;
				width: 98%;
				height: 90%;
				text-indent: 2em;
				border: 0;
				outline: none; 
				margin: 10px;
				resize: none;
			}
		}

		.submits {
			text-align: center;
			display: inline-block;
			margin-top: 20px;
			width: 100%;
		}
	}
</style>