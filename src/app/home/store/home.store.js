export default {
  state: {
    min: 1,
    max: 1000,
    searchCollection: 'Wallpapers'
  },
  getters: {
    getsearchCollection: state => state.searchCollection
   },
  mutations: {
    setCollection: (state, collection) => (state.searchCollection = collection)
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
        console.log(randPage)
        const photosCollection = await this._vm.$unsplash.search.photos(collection, randPage, 15 )
        const photosArr = await photosCollection.json();
        return photosArr.results;
      } catch (error) {
        throw new error();
      }
    },
    async setCollection({commit}, collection) {
      console.log("action", collection)
      commit('setCollection', collection)
    }
  }
  
};
