import { createRouter, createWebHistory } from 'vue-router'
import Mariage from '../components/MariageHome.vue'
import RSVP from '../components/RSVP.vue'
import Transports from '../components/Transports.vue'



const routes = [
	{
		path: '/',
		name: 'mariage',
		component: Mariage,
	},
	{
		path: '/rsvp',
		name: 'rsvp',
		component: RSVP,
	},
	{
		path: '/transports',
		name: 'transports',
		component: Transports
	}
]


const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router