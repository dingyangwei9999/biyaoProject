import Vue from 'vue'
// import http from '../../utils/HttpClient'
import $ from 'jquery'
import erp from '../../global.js'
import router from '../../router/index'

const state = {
}


const mutations = {
	REGISTER: (data, formData) => {
		
		let username = formData.username
		let psw = formData.psw

		$.ajax({
			type:'post',
			data:{username,psw},
			dataType:'json',
			url:'http://10.3.133.50:888/' + 'register',
			success:function(response){
				console.log(response)
				console.log(response.status)
				if (response.status == true) {
					alert('注册成功')
					router.push({name:'logins'})
				}else{
					alert(response.message)
				}
			}
		})
		
	},
	DENGLU:() => {
		router.push({name:'logins'})
	}
}

const actions = {
	register: ({commit},formData) => {
		commit('REGISTER', formData)
	},
	denglu:({commit}) => {
		commit('DENGLU')
	}
}

export default {
	// state,
	mutations,
	actions
}