<template>
	<div class="editArticle">
		<h2>新文章</h2>
		<label>文章标题:</label>
		<div class="article-title">
			<input type="text" placeholder="请输入标题...">
		</div>
		<label>文章类型:</label><br />
		<select class="article-group">
			<option>---</option>
			<option>html</option>
			<option>css</option>
			<option>js</option>
		</select><br />
		<label>自定义文章类型:</label><br />
		<div class="article-title">
			<input type="text" placeholder="请输入自定义类型...">
		</div>
		<cutPictures></cutPictures>
		<div class="main">
			<label>文章内容:</label>
			<div class="article-content">
				<textarea placeholder="请输入内容..."></textarea>
			</div>
		</div>
		<div class="submits">
			<button type="button">提交</button>
		</div>
	</div>
</template>

<script>
import cutPictures from './cutPictures.vue'
	export default {
		name: 'editArticle',
		components: {
			cutPictures: cutPictures
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
		
		}
	}
</script>

<style lang="scss">
	.editArticle {
		width: 100%;
		font-size: 16px;
		input {
			border: 0;
			outline: none;
			margin-left: 10px;
			width: 98%;
			height: 30px;
		}

		h2 {
			font-size: 24px;
			color: #f6a90e;
			margin-bottom: 30px;
		}
		.article-content {
			width: 100%;
			height: 600px;
			margin-top: 20px;
			border: 1px solid #ccc;
			textarea {
				display: inline-block;
				width: 98%;
				height: 98%;
				text-indent: 2em;
				border: 0;
				outline: none; 
				margin: 10px;
				resize: none;
			}
		}
		.article-title {
			width: 100%;
			height: 30px;
			font-size: 18px;
			border: 1px solid #ccc;
			margin: 20px 0;
			line-height: 26px;
		}

		.article-group {
			margin: 20px 0;
		}

		.uploadImg {
			margin: 20px 0;
			width: 100%;
		}

		.cut {
			margin: 10px 0;
			top: 40px;
		}

		.main {
			position: relative;
			top: 0;
		}

		.submits {
			text-align: center;
			display: inline-block;
			margin-top: 20px;
			width: 100%;
		}

	}
</style>