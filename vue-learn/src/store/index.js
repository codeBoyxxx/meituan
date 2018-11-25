import Vue from 'vue'
import Vuex from 'vuex'
import a from './modules/a'
import b from './modules/b'
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        a,
        b
    }
})