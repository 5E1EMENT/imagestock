import toJson from 'unsplash-js'

export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    /**
     * Action gets current image
     * @param {Object} state vuex context
     * @returns {Array} array of images
     */
    async getCurrentImg(state, imgId) {
      try {
        const currentImg = await this._vm.$unsplash.photos.getPhoto(imgId);
        const currentImgResult = await currentImg.json();
        console.log(currentImgResult)
        return currentImgResult;
      } catch (error) {
        throw new error();
      }
    },
    /**
     * Action downloads current image
     * @param {Object} state vuex context
     * @returns {Array} array of images
     */
    async dowloadPhoto(state, imgId) {
      try {
        return `https://unsplash.com/photos/${imgId}/download?force=true`
        
      } catch (error) {
        throw new error();
      }
    },
    async getSimilarImg(state, imgId) {
      try {
        const currentImg = await this._vm.$unsplash.photos.getPhoto(imgId);
        const currentImgResult = await currentImg.json();
        const currentImgSimilar = currentImgResult.related_collections.results;
        return currentImgSimilar
      } catch(error) {
        throw new error();
      }
    }
  }
};
