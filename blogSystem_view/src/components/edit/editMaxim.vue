<template>
	<div class="editMaxim">
		<h2>新箴言</h2>
		<cutPictures :msg="data.list[0].image" ref="cutPictures"></cutPictures>
		<label class="maxim-tit">箴言内容</label>
		<div class="maxim-content">
			<textarea placeholder="输入箴言内容..." v-model="data.list[0].text"></textarea>
		</div>
		<div class="submits">
			<button type="button" @click="save">提交</button>
			<button type="button">取消</button>
		</div>
	</div>
</template>

<script>
import cutPictures from './cutPictures.vue'
import getCGI from '../../getCGI/findMaxim'
import axios from 'axios'
import qs from 'qs'

let data = {
	imgSrc: '',
	id: '',
	show: false,
	list: [{image: '', text: ''}]
}

	export default {
		name: 'editMaxim',
		components: {
			cutPictures: cutPictures
		},
		data() {
			return {
				data: data
			}
		},
		mounted() {
			let id = this.$route.query.id;
			//console.log(id);
			if (id) {
				this.id = id;
				getCGI(data, id);
				this.data.list = data.list;
				console.log(this.data.list[0].text);
			}
		},
		methods: {
			save() {
				let data = qs.stringify({
					upload: this.$refs.cutPictures.$refs.headImg.src,
					text: this.data.list[0].contents
				});

				axios({
					method: 'post',
					url: 'http://localhost:3001/manager/maxim/postMaxims',
					data: data
				})
				.then((response) => {
					alert('发表箴言成功');
					location.href = 'http://localhost:8080';
				})
				.catch((err) => {
					alert('发表失败');
				});
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

		.maxim-tit {
			margin-top: 20px;
			display: inline-block;
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