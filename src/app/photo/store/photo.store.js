export default {
  actions: {
    /**
     * Action gets current image
     * @param {Object} state vuex context
     * @param {String} imgId current image id
     * @returns {Array} array of images
     */
    async getCurrentImg(state, imgId) {
      try {
        const currentImg = await this._vm.$unsplash.photos.getPhoto(imgId);
        const currentImgResult = await currentImg.json();
        console.log(currentImgResult);
        return currentImgResult;
      } catch (error) {
        throw new error("Action error: getCurrentImg");
      }
    },
    /**
     * Action downloads current image
     * @param {Object} state vuex context
     * @param {String} imgId current image id
     * @returns {Array} array of images
     */
    async dowloadPhoto(state, imgId) {
      try {
        return `https://unsplash.com/photos/${imgId}/download?force=true`;
      } catch (error) {
        throw new error("Action error: dowloadPhoto");
      }
    },
    /**
     * Action allows to get similar images
     * @param {Object} state
     * @param {String} imgId
     * @returns {Array} of images
     */
    async getSimilarImg(state, imgId) {
      try {
        const currentImg = await this._vm.$unsplash.photos.getPhoto(imgId);
        const currentImgResult = await currentImg.json();
        const currentImgSimilar = currentImgResult.related_collections.results;
        return currentImgSimilar;
      } catch (error) {
        throw new error("Action error: getSimilarImg");
      }
    }
  }
};
