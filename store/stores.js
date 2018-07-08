import { db } from '@/plugins/firebase'

export const state = () => ({
  stores: [],
  linkedToDB: false
})

export const mutations = {
  setStoreList (state, list) {
    state.stores = list.val()
  },

  linkToDB (state) {
    state.linkedToDB = true
  }
}

export const actions = {
  getStoreList ({ commit, state }) {
    if (!state.linkedToDB) {
      commit('linkToDB')
      db.ref('lojas').on('value', snapshot => {
        commit('setStoreList', snapshot)
      })
    }
  }
}
