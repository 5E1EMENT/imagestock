export default {
  state: {
    min: 1,
    max: 1000
  },
  getters: {
    getMin: s => s.min,
    getMax: s => s.max
  },
  mutations: {},
  actions: {
    /**
     * Action gets images arr
     * @param {Object} context vuex context
     * @param {Object} context.state vuex state
     * @returns {Array} array of images
     */
    async getImages({ state }) {
      try {
        let randPage = Math.floor(
          state.min + Math.random() * (state.max + 1 - state.min)
        );
        const photosList = await this._vm.$unsplash.photos.listPhotos(
          randPage,
          15
        );
        const photosArr = await photosList.json();
        console.log(photosArr)
        return photosArr;
      } catch (error) {
        throw new error();
      }
    }
  }
};
