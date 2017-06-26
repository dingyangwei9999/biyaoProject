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
import Footer from '../components/foot/foot.vue'

import Logins from '../components/logins/logins.vue'
import Register from '../components/register/register.vue'
import Member from '../components/member/member.vue'
import Modify from '../components/modifyPsw/modify.vue'
import MineMessage from '../components/mineMessage/message.vue'
import UpdataPsw from '../components/updatePsw/updatapsw.vue'

import shoppingCartComponent from '../components/shoppingCart/shoppingCart.vue'
import orderPageComponent from '../components/orderPage/orderPage.vue'


Vue.use(VueRouter,)
const router = new VueRouter({
	routes: [{
		path: '/',
		name: 'index',
		component: IndexComponent,
	},{
		path: '/classify',
		name: 'classify',
		component: classifyComponent		
	},{
		path: '/detail/:_id',
		name: 'detail',
		component: DetailComponent
	},{
		path: '/search',
		name: 'search',
		component: SearchComponent
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
		component:Member,
		children:[{
			path:'/message',
			name:'message',
			component:MineMessage
		}]
	},{
		path:'/modify',
		name:'modify',
		component:Modify
	},{
		path:'/updataPsw',
		name:'updataPsw',
		component:UpdataPsw
	},{
		path: '/shoppingCart',
		name: 'shoppingCart',
		component: shoppingCartComponent
	},{
		path: '/orderPage',
		name: 'orderPage',
		component: orderPageComponent
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






