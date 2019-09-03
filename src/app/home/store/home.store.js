export default {
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getImages() {
      const photos = await this.$unsplash.photos.listPhotos(1, 5, "latest");
      const photosArr = await photos.json();
    }
  }
};
