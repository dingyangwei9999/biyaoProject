import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import HomeComponent from '../components/home/home.vue'
import LoginComponent from '../components/login/login.vue'
import Clients from '../components/clients/clients.vue'
import Client from '../components/client/client.vue'
import Logins from '../components/logins/logins.vue'
import Register from '../components/register/register.vue'
import Member from '../components/member/member.vue'

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
		}]
	},{
		path: '/login',
		name: 'login',
		component: LoginComponent
	},{
		path: '/logins',
		name :'logins',
		component: Logins
	},{
		path:'/register',
		name:'register',
		component:Register
	},{
		path:'/member',
		name:'member',
		component:Member
	}]
	
})

// 对将要进入的路由进行权判断
// router.beforeEach((to, from, next) =>{
// 	// console.log(to);
// 	if(to.path.indexOf('login') < 0 && !window.localStorage.getItem('access_token')){
// 		router.replace('login');
// 		next();
// 	} 
// 	next();
// })

export default router