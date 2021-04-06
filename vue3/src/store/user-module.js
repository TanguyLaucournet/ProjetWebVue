import api from '../api.js'
export default {
  state: {
    data: undefined,
    isFetching: false
  },

  mutations: {
    setUser (state, user) {
      state.data = user
    },

    resetUser (state) {
      state.data = undefined
    }
  },

   actions: {
    login ({ commit }, credentials) {
      api.login(credentials)
        .then(data => {
          const { success, user, token } = data
          if (!success) {
            return
          }
          localStorage.setItem('token', token)
          commit('setUser', user)
        })
    },

    logout ({ commit }) {
      localStorage.removeItem('token')
      commit('resetUser')
    },

    checkToken ({ commit }) {
      api.checkToken()
        .then(data=>{
            commit('setUser',data.user)
        })
    }
  }, 

  getters: {
    isLoggedIn: state => !!state.data
  }
}