import { createStore } from 'vuex'
import user from './user-module'

export default createStore({
  modules: {
    user
  }
})