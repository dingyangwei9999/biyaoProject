import Vue from 'vue'
// import http from '../../utils/HttpClient'
import $ from 'jquery'
import erp from '../../global.js'
import router from '../../router/index'

const state = {
}


const mutations = {
	UPDATA: (data, upData) => {
		console.log(upData)
		let oldpsw = upData.oldpsw
		let psw = upData.psw
		let pswtoo = upData.pswtoo

		$.ajax({
			type:'post',
			data:{oldpsw,psw,pswtoo},
			dataType:'json',
			url:erp.baseUrl + 'updataPsw',
			success:function(response){
				console.log(response)
				console.log(response.status)
				if (response.status == true) {
					alert('修改成功')
					router.push({name:'member'})
				}else{
					alert(response.message)
				}
			}
		})
		
	},
	FIND:() => {
		router.push({name:'modify'})
	}
}

const actions = {
	updata: ({commit},updata) => {
		console.log(updata)
		commit('UPDATA', updata)
	},
	find:({commit}) => {
		commit('FIND')
	}
}

export default {
	// state,
	mutations,
	actions
}



 


