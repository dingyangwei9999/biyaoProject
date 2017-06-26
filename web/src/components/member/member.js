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
	}
}

const actions = {
	change:({commit}) => {
		commit('CHANGE')
	}
}

export default {
	// state,
	mutations,
	actions
}