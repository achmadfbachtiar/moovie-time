export default {
  namespace: true,
  state () {
    return {
      highlight: [],
      movies: [],
      tvs: [],
      detail: {}
    }
  },
  mutations: {
    SET_MOVIES (state, data) {
      state.movies = data
      state.highlight = data.slice(0, 4)
    },
    SET_TVS (state, data) {
      state.tvs = data
    },
    SET_DETAIL (state, data) {
      state.detail = data
    }
  },
  actions: {
    async getList ({ commit }, length) {
      try {
        const {
          data
        } = await this.$axios.get('Top250Movies/k_7io21iur')
        commit('SET_MOVIES', data.items.slice(0, length))
      } catch (e) {
        // throw new Error(e.response)
        return Promise.reject(e)
      }
    },
    async getListTV ({ commit }, length) {
      try {
        const {
          data
        } = await this.$axios.get('Top250TVs/k_7io21iur')
        commit('SET_TVS', data.items.slice(0, length))
      } catch (e) {
        // throw new Error(e.response)
        return Promise.reject(e)
      }
    },
    async getDetail ({ commit }, id) {
      try {
        const {
          data
        } = await this.$axios.get(`Title/k_7io21iur/${id}`)
        commit('SET_DETAIL', data)
      } catch (e) {
        // throw new Error(e.response)
        return Promise.reject(e)
      }
    }
  }
}
