import Vue from 'vue'
import Vuex from 'vuex'
import login from '../components/login/Login'
import classify from '../components/classify/classify'
import search from '../components/search/searchResult'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        classify,
        search
    }
})