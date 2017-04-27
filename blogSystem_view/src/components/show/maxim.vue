<template>
	<div class="maxim">
		<div class="maxims" v-for="list in data.list">
			<div class="maxim-img"></div>
			<div class="maxim-text">
				{{list.text}}
				<span>{{list.time}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	import getCGI from '../../getCGI/maxim'
	let data = {
		list: []
	};
	getCGI(data);
	export default {
		name: 'maxim',
		data() {
			return {
				data: data
			}
		}
	}
</script>

<style lang="scss">
	.maxim {
		width: 100%;
		.maxims {
			overflow: hidden;
			height: 100px;
			width: 100%;
			margin-bottom: 30px;
			animation: trans 1.4s;
			@keyframes trans {
				0% {transform: scale(0, 0);}
				50% {transform: scale(1.1, 1.1);}
				100% {transform: scale(1, 1)}
			}

			.maxim-img {
				width: 100px;
				height: 100%;
				border-radius: 50%;
				background: red;
				float: left;
			}
			.maxim-text {
				float: left;
				width: 80%;
				margin-left: 30px;
				height: 100px;
				border: 1px solid #ccc;
				box-sizing: border-box;
				background-color: #fff;
				font-size: 14px;
				position: relative;
				line-height: 21px;
				padding: 3px;
				border-radius: 3px;

				span {
					position: absolute;
					bottom: 5px;
					right: 5px;
					background-color: #f6a90e;
					padding: 2px;
					border-radius: 4px;
					font-size: 12px;
					color: #fff;
				}
			}
		}
	}
</style>