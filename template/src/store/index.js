import Vue from 'vue'
import Vuex from 'vuex'

import app from './module/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: []
  },
  mutations: {
    SET_MENU(state, data) {
      state.menu = data;
    }
  },
  actions: {
    setMenu({ commit }, params) {
      commit("SET_MENU", params);
    }
  },
  modules: {
    app
  }
})
