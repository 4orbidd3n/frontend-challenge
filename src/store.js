import Vue from 'vue'
import Vuex from 'vuex'
import { notifications, comments } from '@/vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    comments,
    notifications
  }
})
