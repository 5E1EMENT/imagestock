export default {
  state: {
    favorites: localStorage.getItem("favorites")
  },
  getters: {
    /**
     * Getter allows to get favorites
     * @param s vuex state
     * @returns {Array} array of favorite images
     */
    getFavorites: s => s.favorites
  },
  mutations: {
    /**
     * Mutation sets new favorites img arr
     * @param state vuex state
     * @param favorites favorites
     * @returns {Array} array of favorite images
     */
    setFavoritesLocalStorage: (state, favorites) =>
      (state.favorites = favorites)
  },
  actions: {
    /**
     * Action gets favorites images from localstorage
     * @param {Object} context vuex context
     * @param {Object} context.state vuex state
     * @returns {Array} array of images
     */
    async getFavoritesImg({ state }) {
      try {
        const favoritesArr = JSON.parse(state.favorites) || [];
        const resultFavoritesArr = [];

        await Promise.all(
          favoritesArr.map(async favorite => {
            const favoriteImg = await this._vm.$unsplash.photos.getPhoto(
              favorite
            );
            const favoriteImgResult = await favoriteImg.json();
            resultFavoritesArr.push(favoriteImgResult);
          })
        );

        return resultFavoritesArr ? resultFavoritesArr : [];
      } catch (error) {
        throw new error("Action error: getFavoritesImg");
      }
    },
    /**
     * Action gets favorites images from localstorage
     * @param {Object} context vuex context
     * @param {Object} context.commit vuex mutation commit
     * @param {Array} favorites array of images from localstorage
     */
    updateLocalStorage({ commit }, favorites) {
      try {
        commit("setFavoritesLocalStorage", favorites);
      } catch (error) {
        throw new error("Action error: updateLocalStorage");
      }
    }
  }
};
