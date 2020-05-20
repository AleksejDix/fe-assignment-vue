import Vue from 'vue';
import Vuex from 'vuex';
import listings from '../listings.json';

Vue.use(Vuex);

const isSameId = payload => x => x.id === payload

export default new Vuex.Store({
  state: {
    listings,
    listing: {},
    similar: []
  },
  getters: {
    getListings: (state) => state.listings,
    getListing: (state) => state.listing,
    getSimilar: (state) => state.similar
  },
  mutations: {
    setListing (state, payload) {
      state.listing = state.listings.find(isSameId(payload))
    },
    setSimilar (state, payload) {
      state.similar = payload.map(listing => state.listings.find(isSameId(listing)))
    },
    clear (state) {
      state.listing = {}
      state.similar = []
    },
  },
  actions: {
    setListing (context, payload) {
      context.commit('clear')
      context.commit('setListing', payload)
      context.dispatch('setSimilar', payload)
    },
    async setSimilar (context, payload) {
      const response = await fetch(`https://properties-34748.firebaseio.com/similar/${payload}.json`)
      const json = await response.json()
      context.commit('setSimilar', json.split(','))
      return response
    } 
  },
});
