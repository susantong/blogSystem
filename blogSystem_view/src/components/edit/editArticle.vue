<template>
	<div class="editArticle">
		<h2>新文章</h2>
		<label>文章标题:</label>
		<div class="article-title">
			<input type="text" placeholder="请输入标题..." v-model="data.list[0].title">
		</div>
		<label>已有文章类型:</label><br />
		<select class="article-group">
			<option v-for="option in data.type">{{option.type}}</option>
		</select><br />
		<label>文章类型:</label><br />
		<div class="article-title">
			<input type="text" placeholder="请输入文章类型..."  v-model="data.list[0].type">
		</div>
		<cutPictures :msg="data.list[0].headImg" ref="cutPictures" class="cutPictures"></cutPictures>
		<div class="main">
			<label>文章内容:</label>
			<div class="article-content">
				<textarea placeholder="请输入内容..." v-model="data.list[0].contents"></textarea>
			</div>
		</div>
		<div class="submits">
			<button type="button" @click="submits">{{data.button}}</button>
			<button type="button">取消</button>
		</div>
	</div>
</template>

<script>
import cutPictures from './cutPictures.vue'
import axios from 'axios'
import qs from 'qs'
import getCGI from '../../getCGI/article'
let data = {
	imgSrc: '',
    id: '',
	button: '提交',
	click: 'submits',
	show: false,
	type: [],
	list: [{title: '', type: '', contents: '', headImg: ''}]
};
	export default {
		name: 'editArticle',
		components: {
			cutPictures: cutPictures
		},
		data() {
			return { 
				data: data
			}
		},
		mounted() {
			this.setData();
			let id= this.$route.query.id;
			if (id) {
				this.id = id;
				this.button = '修改';
				this.click = 'edits';
				getCGI(data, id);
				this.data.list = data.list;
			}

			axios({
					method: 'get',
					url: 'http://localhost:3001/manager/article/findAllType'
				})
				.then((response) => {
					if (response.data.success) {
						console.log(response.data.result);
						this.data.type = response.data.result;
					}
				})
				.catch((err) => {
					alert('注意文章类型');
					return;
				});

			console.log(this.data.type);
		},
		watch: {
			'$route': 'setData'
		},
		methods: {
			setData() {
				if (!this.$route.query.id) {
					this.data = {
						imgSrc: '',
					    id: '',
					    type: '',
						button: '提交',
						click: 'submits',
						show: false,
						list: [{title: '', type: '', contents: '', headImg: ''}]
					}
				} else {
					this.id = this.$route.query.id;
					this.button = '修改';
					this.click = 'edits';
					getCGI(data, this.$route.query.id);
					this.data.list = data.list;
					console.log(this.data.list[0].title);
				}
			},
			submits() {
				let types = '';
				if (this.data.list[0].type) {
					types = this.data.list[0].type;
				} else {
					alert('请定义文章类型');
					return;
				}
				this.data.list[0].type = types;
				
				//传参序列化
				// console.log(this.$refs.cutPictures.$refs.headImg);
				let data = qs.stringify({
						type: this.data.list[0].type,
						upload: this.$refs.cutPictures.$refs.headImg.src,
						title:  this.data.list[0].title,
						contents: this.data.list[0].contents
					});
				axios({
					method: 'post',
					url: 'http://localhost:3001/manager/article/postArticles',
					data: data
				})
				.then(function (response) {
					//console.log(response.data);
					if (response.data.success) {
						alert('发表成功！');
						this.$router.push('/editArticle');
					}
				})
				.catch(function (err) {
					alert('输入信息有误，请修改！');
					return;
				});
			},
			edits() {
				console.log('ok');
			}
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

		.cutPictures {
			margin-bottom: 20px;
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