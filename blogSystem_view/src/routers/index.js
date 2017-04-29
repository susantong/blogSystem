import VueRouter from 'vue-router'
import index from '../components/index.vue'
import show from '../components/show/show.vue'
import list from '../components/show/list.vue'
import maxim from '../components/show/maxim.vue'
import manager from '../components/manager/manager.vue'
import article from '../components/articles/article.vue'

const routes = [
	{
		path: '/',
		components: {
			default: index
		},
		children: [
			{
				path: 'show',
				components: {
					default: show
				},
				children: [
					{
						path: 'list',
						components: {
							default: list
						}
					},
					{
						path: 'maxim',
						components: {
							default: maxim
						}
					}
				]
			},
			{
				path: 'manager',
				components: {
					default: manager
				}
			},
			{
				path: 'article',
				components: {
					default: article
				}
			}
		]
	}
];

export default new VueRouter({
   routes
});