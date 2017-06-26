import Vue from 'vue'
// import http from '../../utils/HttpClient'
import $ from 'jquery'
import erp from '../../global.js'
import router from '../../router/index'

const state = {
}


const mutations = {
	LOGINS: (data, loginData) => {
		console.log(loginData)
		let username = loginData.username
		let psw = loginData.psw

		$.ajax({
			type:'post',
			data:{username,psw},
			dataType:'json',
			url:'http://10.3.133.20:888/' + 'login',
			success:function(response){
				console.log(response)
				console.log(response.status.status)
				if (response.status.status == true) {
					alert('登录成功')
					window.sessionStorage.setItem('id',response._id)
					console.log(window.sessionStorage.getItem('id'))
					router.push({name:'member'})
				}else{
					alert(response.message)
				}
			}
		})
		
	},
	ZHUCE:() => {
		router.push({name:'register'})
	},
	CHANGES:() => {
		router.push({name:'modify'})
	}
}

const actions = {
	logins: ({commit},loginData) => {
		commit('LOGINS', loginData)
	},
	zhuce: ({commit}) => {
		commit('ZHUCE')
	},
	changes:({commit}) => {
		commit('CHANGES')
	}
}

export default {
	state,
	mutations,
	actions
}