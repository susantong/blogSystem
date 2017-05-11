<template>
	<div class="login">
		<h1>登&nbsp;&nbsp;录</h1>
		<div class="login-wrap">
			<div class="input">
				<input type="text" placeholder="请输入用户名......" ref="text">
			</div>
			<div class="input">
				<input type="password" placeholder="请输入密码......" ref="password">
			</div>
			<div class="btn">
				<button type="button" @click="login">登录</button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';
import qs from 'qs';
	export default {
		name: 'login',
		methods: {
			login() {
				console.log(this.$refs.text.value);
				let data = qs.stringify({
					username: this.$refs.text.value,
					password: this.$refs.password.value
				});

				axios({
					method: 'post',
					url: 'http://localhost:3001/manager/login',
					data: data
				})
				.then((response) => {
					if (response.data.success) {
						document.cookie = 'username=' + response.data.result;
						alert('登录成功');
						this.$router.push({name: 'index'});
					}
				})
				.catch((err) => {
					console.log(err);
				});
			}
		}
	}
</script>

<style lang="scss">
	.login {
		width: 30%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		.login-wrap {
			width: 60%;
			margin: 0 auto;		
		}

		h1 {
			font-size: 40px;
			color: #f6a90e;
			text-align: center;
			margin-bottom: 20px;
		}

		.input {
			width: 100%;
			height: 34px;
			border: 1px solid #ccc;
			margin-bottom: 30px;
			input {
				width: 90%;
				padding-left: 10%;
				height: 100%;
			}
		}

		.btn {
			text-align: center;
		}

		input {
			border: 0;
			outline: none;
		}
	}
</style>