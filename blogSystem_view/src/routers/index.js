import VueRouter from 'vue-router'
import index from '../components/index.vue'
import show from '../components/show/show.vue'
import list from '../components/show/list.vue'

const routes = [
	{
		path: '/',
		components: {
			default: index
		},
		children: [
			{
				path: '/show',
				components: {
					default: show
				},
				children: [
					{
						path: '/list',
						components: {
							default: list
						}
					}
				]
			},
			{
				path: '/articles',
				components: {
					default: list
				}
			}
		]
	}
];

export default new VueRouter({
   routes
});