const user = {
  state: {
    name: ''
  },
  mutations: {
    SET_NAME: (state, name) => {
      state.name = name
    }
  },
  actions: {
    addErrorLog ({ commit }, name) {
      commit('SET_NAME', name)
    }
  }
}

export default user
