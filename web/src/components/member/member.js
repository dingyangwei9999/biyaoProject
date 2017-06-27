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
	}
}	

export default {
	// state,
	mutations,
	actions
}