<template>
	<div class="aside">
		<div class="aside-title">
			<p></p>
			<span>susantong</span>
		</div>

		<ul class="aside-list">
			<router-link to="/show" tag="li">
				<i style="background: url(/src/assets/images/icon.jpg) 0 -26px no-repeat;"></i>
				<span>展示</span>
			</router-link>
			<router-link to="/article" tag="li">
				<i style="background: url(/src/assets/images/icon.jpg) 0 0 no-repeat;"></i>
				<span>新文章</span>
			</router-link>
			<router-link to="/show" tag="li">
				<i style="background: url(/src/assets/images/icon.jpg) 0 -78px no-repeat;"></i>
				<span>新箴言</span>
			</router-link>
			<router-link to="/manager" tag="li">
				<i style="background: url(/src/assets/images/icon.jpg) 0 -52px no-repeat;"></i>
				<span>管理</span>
			</router-link>
			<router-link to="/show" tag="li">
				<i style="background: url(/src/assets/images/icon.jpg) 0 -104px no-repeat;"></i>
				<span>分类</span>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'myAside',
		data() {
			return {
				
			}
		},
		methods: {
		}
	}
</script>

<style lang="scss">
	.aside {
		background-color: #6d6c6c;
		width: 200px;
		height: 100%;

		.aside-title {
			width: 80px;
			margin: 20px auto;

			p {
				background: url(/src/assets/images/head.jpg) 0 0
				no-repeat;
				border-radius: 80px;
				width: 80px;
				height: 80px;
			}
			span {
				color: #fff;
				font-size: 18px;
				padding: 10px 0;
				display: inline-block;
			}
		}

		.aside-list {

			li {
				width: 100%;
				height: 26px;
				cursor: pointer;
				margin-bottom: 34px;
				color: #999;
				transition: color 1.5s;
			}

			li:hover {
				background: #444;
				color: #fff;
			}

			i {
				width: 30px;
				display: inline-block;
				height: 26px;
				margin-left: 30px;
			}

			span {
				display: inline-block;
				font-size: 18px;
				vertical-align: top;
				padding-left: 20px;
			}
		}
	}
</style>