export default {
  state: {
    min: 1,
    max: 50,
    searchCollection: "Wallpapers",
    history: localStorage.getItem("history"),
    headerSearch: false,
    headerHistory: false
  },
  getters: {
    /**
     * Getter allows to get default
     * search Collection
     * @param {Object} s vuex state
     * @returns {String} search Collection name
     */
    getSearchCollection: state => state.searchCollection,
    /**
     * Getter allows to get search history
     * @param {Object} s vuex state
     * @returns {Array} of history messages
     */
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
     * headerHistory status
     * @param {Object} state vuex state
     * @returns {Boolean}
     */
    getHeaderHistory: s => s.headerHistory
  },
  mutations: {
    /**
     * Mutations changes search Collection to voluntary
     * @param {Object} state vuex state
     * @param {String} collection name of new collections
     */
    setCollection: (state, collection) => (state.searchCollection = collection),
    /**
     * Mutations changes history to voluntary
     * @param {Object} state vuex state
     * @param {String} history searches history
     */
    setHistory: (state, history) => (state.history = history),
    /**
     * Mutations changes HeaderSearch  status to voluntary
     * @param {Object} state vuex state
     * @param {Boolean} value open/close search
     */
    setHeaderSearch: (s, value) => (s.headerSearch = value),
    /**
     * Mutations changes HeaderHistory status to voluntary
     * @param {Object} state vuex state
     * @param {Boolean} value open/close history
     */
    setHeaderHistory: (s, value) => (s.headerHistory = value)
  },
  actions: {
    /**
     * Action gets current img collection
     * @param {Object} context vuex context
     * @param {Object} context.state vuex state
     * @param {String} collection name of the collection
     * @returns {Array} array of images
     */
    async getCollection({ state }, collection = "Wallpapers") {
      try {
        let randPage = Math.floor(
          state.min + Math.random() * (state.max + 1 - state.min)
        );
        const photosCollection = await this._vm.$unsplash.search.photos(
          collection,
          randPage,
          25
        );
        const photosArr = await photosCollection.json();
        return photosArr.results;
      } catch (error) {
        throw new error("Get collection error");
      }
    },
    /**
     * Action changes search Collection to voluntary
     * @param {Object} context vuex context
     * @param {Function} context.commit vuex context
     * @param {String} collection name of new collection
     */
    async setCollection({ commit }, collection) {
      try {
        commit("setCollection", collection);
      } catch (error) {
        throw new error("Set collection error");
      }
    },
    /**
     * Action update searches history
     * @param {Object} context vuex context
     * @param {Object} context.commit vuex mutation commit
     * @param {Array} history array of history from localstorage
     */
    updateHistory({ commit }, history) {
      try {
        commit("setHistory", history);
      } catch (error) {
        throw new error("Set history error");
      }
    },
    /**
     * Action changes header search component status
     * @param {Object} context vuex context
     * @param {Object} context.commit vuex mutation commit
     */
    invertSearchStatus({ commit }, value) {
      commit("setHeaderSearch", value);
    },
    /**
     * Action changes header search component status
     * @param {Object} context vuex context
     * @param {Object} context.commit vuex mutation commit
     */
    invertHistoryStatus({ commit }, value) {
      commit("setHeaderHistory", value);
    }
  }
};
