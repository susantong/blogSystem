<template>
	<div class="article">
		<h2>{{data.list.title}}</h2>
		<p>{{data.list.contents}}</p>
	</div>
</template>

<script>
import getCGI from '../../getCGI/article'
let data = {
	list: []
};
getCGI(data);

	export default {
		name: 'article',
		data() {
			return {
				data: data
			}
		}
	}
</script>

<style lang="scss"></style>