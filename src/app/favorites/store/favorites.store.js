export default {
  state: {
    favorites: localStorage.getItem("favorites")
  },
  getters: {
    getFavorites: s => s.favorites,
  },
  mutations: {
    setFavoritesLocalStorage: (state, favorites) => (state.favorites = favorites),
  },
  actions: {
    /**
     * Action gets favorites images from localstorage
     * @param {Object} context vuex context
     * @param {Object} context.state vuex state
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

        return resultFavoritesArr ? resultFavoritesArr: []  ;
      } catch (error) {
        throw new error();
      }
    },
    /**
     * Action gets favorites images from localstorage
     * @param {Object} context vuex context
     * @param {Object} context.commit vuex mutation commit
     * @param {Array} favorites array of images from localstorage
     */
    updateLocalStorage({ commit }, favorites) {
      commit("setFavoritesLocalStorage", favorites);
    },
  }
};
