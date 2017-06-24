import Vue from 'vue'
import VueRouter from 'vue-router'
import http from '../utils/HttpClient'

import IndexComponent from '../components/index/index.vue'
import HomeComponent from '../components/home/home.vue'
import LoginComponent from '../components/login/login.vue'
import Clients from '../components/clients/clients.vue'
import Client from '../components/client/client.vue'
import classifyComponent from '../components/classify/classify.vue'
import DetailComponent from '../components/detail/detail.vue'
import SearchComponent from '../components/search/search.vue'


Vue.use(VueRouter)

const router = new VueRouter({
	routes: [{
		path: '/',
		name: 'index',
		component: IndexComponent,
	},{
		path: '/login',
		name: 'login',
		component: LoginComponent
	},{
		path: '/classify',
		name: 'classify',
		component: classifyComponent		
	},{
		path: '/detail',
		name: 'detail',
		component: DetailComponent
	},{
		path: '/search',
		name: 'search',
		component: SearchComponent
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