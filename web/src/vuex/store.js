import Vue from 'vue'
import Vuex from 'vuex'
import login from '../components/login/Login'

import classify from '../components/classify/classify'

import index from '../components/index/index'
import detail from '../components/detail/detail'
import search from '../components/search/search'

import logins from '../components/logins/logins'
import register from '../components/register/register'
import modify from '../components/modifyPsw/modify'
import updataPsw from '../components/updatePsw/updataPsw'
import member from '../components/member/member'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        classify,
        index,
        detail,
        search,
        logins,
        register,
        modify,
        updataPsw,
        member

    }
})