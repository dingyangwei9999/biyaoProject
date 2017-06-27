import Vue from 'vue'
import http from '../../utils/HttpClient'
import router from '../../router/index'
import erp from '../../global'
const state = {

}

const mutations = {
	getIndexFirstData: (data, formData) => {
		// console.log(formData)
		// formData.callback();
		http.post(erp.baseUrl + 'searchProductByclass', formData.requestData).then(
			response => {
				formData.callback(response);
			}
		);
	}
}

const actions = {
	getIndexFirstData: (events, formData) => {
		events.commit('getIndexFirstData', formData);
	}
}

export default {
	state,
	mutations,
	actions
}