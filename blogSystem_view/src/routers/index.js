import VueRouter from 'vue-router'
import index from '../components/index.vue'
import show from '../components/show/show.vue'
import list from '../components/show/list.vue'
import maxim from '../components/show/maxim.vue'
import manager from '../components/manager/manager.vue'
import article from '../components/articles/article.vue'
import editArticle from '../components/edit/editArticle.vue'
import cutImg from '../components/edit/cutImg.vue'
import editMaxim from '../components/edit/editMaxim.vue'
import managerArticle from '../components/manager/managerArticle.vue'
import managerMaxim from '../components/manager/managerMaxim.vue'
import classify from '../components/articles/classify.vue'

const routes = [
	{
		path: '/',
		components: {
			default: index
		},
		//redirect: '/show/list',
		children: [
			{
				path: 'show',
				components: {
					default: show
				},
				redirect: '/show/list',
				children: [
					{
						path: 'list',
						components: {
							default: list
						},
						waitForData: true
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
				},
				redirect: '/manager/managerArticle',
				children: [
					{
						path: 'managerArticle',
						components: {
							default: managerArticle
						}
					},
					{
						path: 'managerMaxim',
						components: {
							default: managerMaxim
						}
					}
				]
			},
			{
				path: 'article',
				components: {
					default: article
				}
			},
			{
				path: 'editArticle',
				components: {
					default: editArticle
				}
			},
			{
				path: 'editMaxim',
				components: {
					default: editMaxim
				}
			},
			{
				path: 'classify',
				components: {
					default: classify
				}
			}
		]
	}
];

export default new VueRouter({
   routes
});