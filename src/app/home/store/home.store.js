export default {
  state: {
    min: 1,
    max: 1000
  },
  getters: {
    getMin: s =>s.min, 
    getMax: s =>s.max 
  },
  mutations: {},
  actions: {
    /**
     * Action gets images arr
     * @param {Object} context vuex context
     * @param {Object} context.state vuex state
     * @returns {Array} array of images
     */
    async getImages({state}) {
      let randPage = Math.floor(state.min + Math.random() * (state.max + 1 - state.min));
      console.log(randPage)
      const photosList = await this._vm.$unsplash.photos.listPhotos(randPage, 15, "latest");
      const photosArr = await photosList.json();
      return photosArr;
    }
  }
};
