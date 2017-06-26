import Vue from 'vue'
import http from '../../utils/HttpClient'
import router from '../../router/index'
import $ from 'jquery'

const state = {
	response: null
}

const mutations = {
	getData: (data, adata) => {
		$.post('http://10.3.133.20:80/work/steal.php',adata).then(response => {
				response = JSON.parse(response);
				state.response = response.item_list[0];
				// console.log(state.response);
			})
	}
}

const actions = {
	getData: (events, bar) => {
		var data = {page: 1};
		events.commit('getData',bar)
	}
}
// const getters = {
// 	response:state=>state.response
// }
export default {
	state,
	mutations,
	actions
	// ,
	// getters
}