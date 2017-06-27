import Vue from 'vue'
// import http from '../../utils/HttpClient'
import $ from 'jquery'
import erp from '../../global.js'
import router from '../../router/index'

const state = {
}


const mutations = {
	CHANGE:() => {
		router.push({name:'updataPsw'})
	},
	ADDRESS:() =>{
		router.push({name:'addressList'})
	},
	MSG:() =>{
		router.push({name:'message'})
	},
	ORDER:() =>{
		router.push({name:'orderlist'})
	},
	ORDERS:() =>{
		router.push({name:'orderlist'})
	}
}

const actions = {
	change:({commit}) => {
		commit('CHANGE')
	},
	address:({commit}) =>{
		commit('ADDRESS')
	},
	msg:({commit}) =>{
		commit('MSG')
	},
	order:({commit}) => {
		commit('ORDER')
	},
	orders:({commit}) => {
		commit('ORDERS')
	}
}	

export default {
	// state,
	mutations,
	actions
}