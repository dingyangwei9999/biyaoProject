import Vue from 'vue'
// import http from '../../utils/HttpClient'
import $ from 'jquery'
import erp from '../../global.js'
import router from '../../router/index'

const state = {
}


const mutations = {
	MODIFY: (data, modifyData) => {
		console.log(modifyData)
		let username = modifyData.username
		let psw = modifyData.psw

		$.ajax({
			type:'post',
			data:{username,psw},
			dataType:'json',
			url:erp.baseUrl + 'findpsw',
			success:function(response){
				console.log(response)
				console.log(response.status)
				if (response.status == true) {
					
					alert('修改成功')
					router.push({name:'logins'})
				}else{
					alert(response.message)
				}
			}
		})
		
	}
}

const actions = {
	modify: ({commit},modifyData) => {
		commit('MODIFY', modifyData)
	}
}

export default {
	// state,
	mutations,
	actions
}