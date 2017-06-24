import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import HomeComponent from '../components/home/home.vue'
import LoginComponent from '../components/login/login.vue'
import Clients from '../components/clients/clients.vue'
import Client from '../components/client/client.vue'
import ListComponent from '../components/home/list/list.vue'
import AddComponent from '../components/home/add/add.vue'
import CheckComponent from '../components/home/check/check.vue'




Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/',
		name: 'home',
		component: HomeComponent,
		children: [{
			path: '/clients',
			name: 'clients',
			component: Clients
		},{
			path: '/client',
			name: 'client',
			component: Client
		},{
		path: '/list',
		name: 'list',
		component: ListComponent
	},{
		path: '/add',
		name: 'add',
		component: AddComponent
	},{
		path: '/check',
		name: 'check',
		component: CheckComponent
	}]
	},{
		path: '/login',
		name: 'login',
		component: LoginComponent
	}
	
	]
})

// // 对将要进入的路由进行权判断
// router.beforeEach((to, from, next) =>{
// 	// console.log(to);
// 	if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
// 		router.replace('login');
// 		next();
// 	} 
// 	next();
// })

export default router