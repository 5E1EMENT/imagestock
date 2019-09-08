export default {
  state: {
    min: 1,
    max: 50,
    searchCollection: 'Wallpapers',
    history: localStorage.getItem("history"),
    headerSearch: false,
    headerHistory: false,
  },
  getters: {
    getSearchCollection: state => state.searchCollection,
    getHistory: s => s.history,
    /**
     * Getter allows to get current
     * headerSearch status
     * @param {Object} s vuex state
     * @returns {Boolean} 
     */
    getHeaderSearch: s => s.headerSearch,
/**
     * Getter allows to get current
     * headerSearch status
     * @param {Object} state vuex state
     * @returns {Boolean} 
     */
    getHeaderHistory: s => s.headerHistory
   },
  mutations: {
    setCollection: (state, collection) => (state.searchCollection = collection),
    setHistory: (state, history) => (state.history = history),
    setHeaderSearch: (s, value) => s.headerSearch = value,
    setHeaderHistory: (s, value) => s.headerHistory = value,
  },
  actions: {
    /**
     * Action gets current img collection
     * @param {Object} context vuex context
     * @param {String} collection name of the collection
     * @returns {Array} array of images
     */
    async getCollection({state}, collection = 'Wallpapers') {
      
      try {
        let randPage = Math.floor(
          state.min + Math.random() * (state.max + 1 - state.min)
        );
        const photosCollection = await this._vm.$unsplash.search.photos(collection, randPage, 25 )
        const photosArr = await photosCollection.json();
        return photosArr.results;
      } catch (error) {
        throw new error();
      }
    },
    async setCollection({commit}, collection) {
      commit('setCollection', collection)
    },
    /**
     * Action gets favorites images from localstorage
     * @param {Object} context vuex context
     * @param {Object} context.commit vuex mutation commit
     * @param {Array} history array of history from localstorage
     */
    updateHistory({ commit }, history) {
      commit("setHistory", history);
    },
    /**
     * Action changes header search component status
     * @param {Object} context vuex context
     * @param {Object} context.commit vuex mutation commit
     */
    invertSearchStatus({commit}, value) {
      commit('setHeaderSearch', value)
    },
    /**
     * Action changes header search component status
     * @param {Object} context vuex context
     * @param {Object} context.commit vuex mutation commit
     */
    invertHistoryStatus({commit}, value) {
      commit('setHeaderHistory', value)
    }
  }
  
};
