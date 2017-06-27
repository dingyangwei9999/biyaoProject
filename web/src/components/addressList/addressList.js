import Vue from 'vue'
// import http from '../../utils/HttpClient'
import $ from 'jquery'
import erp from '../../global.js'
import router from '../../router/index'

const state = {
}


const mutations = {
	ADD:() =>{
		router.push({name:'addressAdd'})
	}
}

const actions = {
	add:({commit}) =>{
		commit('ADD')
	}
}	

export default {
	// state,
	mutations,
	actions
}