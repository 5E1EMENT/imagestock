<template>
  <div
    id="photo-wrapper"
    class="photo-wrapper"
  >
    <div
      class="photo-wrapper photo-wrapper__image"
      :style="{ 'background-image': 'url(' + currentPhotoSmall + ')' }"
    >
      <b-container class="photo-container">
        <div class="photo-data">
          <div class="photo-data__user">
            <img
              v-if="userPhoto"
              :src="userPhoto"
              alt="user-logo"
              class="photo-data__profile"
            >
            <div class="photo-data__text">
              <h3 class="photo-data__user">
                {{ username }}
              </h3>
              <h4
                v-if="userInsta"
                class="photo-data__instagram"
              >
                @{{ userInsta }}
              </h4>
            </div>
          </div>
          <div class="photo-actions">
            <img
              class="photo-actions__item favorite-btn"
              src="@/app/assets/photo/photo-favorite-full.svg"
              alt="photo-favorite"
              @click="addToFavorite(imgId)"
            >
            <a :href="downloadLink">
              <img
                class="photo-actions__item"
                src="@/app/assets/photo/photo-download-full.svg"
                alt="photo-downoad"
              >
            </a>
          </div>
        </div>
        <img
          v-if="!loading"
          :src="currentPhotoRegular"
          alt="Photo"
          class="photo-img"
        >
        <div class="photo-same">
          <h4 class="photo-same__title">
            Похожие теги
          </h4>
          <ul class="photo-same__list">
            <li
              v-for="(tag, index) of imgTags"
              :key="index"
              class="photo-same__item"
            >
              {{ tag.title }}
            </li>
          </ul>
        </div>
      </b-container>
    </div>
    <div class="photo-wrapper photo-wrapper__images">
      <b-container class="photo-container">
        <h1 class="photo-similar">
          Похожие фотографии
        </h1>
        <Masonry />
        <Loader v-if="loading" />
      </b-container>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Masonry from "@/app/components/TheMasonry.vue";
import Loader from "@/app/components/TheLoader.vue";
export default {
  components: {
    Masonry,
    Loader
  },
  data: () => ({
    imgId: "",
    imgTags: [],
    currentPhotoRegular: "",
    currentPhotoSmall: '',
    username: "",
    userInsta: "",
    userPhoto: "",
    downloadLink: "",
    loading: true
  }),
  watch: {
    /**
     * When route changes,
     * our component will be rerendered
     */
    $route() {
      this.startComponent();
    }
  },
  
  async mounted() {
    this.startComponent()
  },
  methods: {
    ...mapActions(["getCurrentImg", "dowloadPhoto", "updateLocalStorage"]),
    /**
     * Function adds current image to local storage
     * @param imgId id of current image
     */
    async addToFavorite(imgId) {
      console.log(1);
      let favoritesArr = JSON.parse(localStorage.getItem("favorites")) || [];
      favoritesArr.push(imgId);
      localStorage.setItem("favorites", JSON.stringify(favoritesArr));
      await this.updateLocalStorage(localStorage.getItem("favorites"));
    },
    /**
   * Method loads all info about current image
   */
    async startComponent() {
      this.imgId = this.$route.params.imgId;
    const photoLoaded = await this.getCurrentImg(this.imgId);
    this.downloadLink = await this.dowloadPhoto(this.imgId);
    this.imgTags = photoLoaded.tags.slice(0, 5);
    this.currentPhotoSmall = photoLoaded.urls.small;
    this.currentPhotoRegular = photoLoaded.urls.regular;
    this.username = photoLoaded.user.username;
    this.userInsta = photoLoaded.user.instagram_username;
    this.userPhoto = photoLoaded.user.profile_image.medium;
    this.loading = false;
    }
  },
  
};
</script>
<style lang="scss" scoped>
.photo {
  &-wrapper {
    background-color: #fff;
    position: relative;
    &__image {
      background-size: 100%;
      background-repeat: no-repeat;
      // filter: blur(5px);
    }
    &__images {
      margin: 70px 0;
    }
  }
  &-container {
    max-width: 1478px;
    position: relative;
  }
  &-img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    filter: drop-shadow(12px 12px 12px rgba(0, 0, 0, 0.4));
    border-radius: 8px;
  }
  &-actions {
    &__item {
      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
      &:active {
        transform: scale(1.15);
      }
    }
  }
  &-data {
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
    &__text {
      margin-left: 10px;
    }
    &__profile {
      width: 54px;
      height: 54px;
      border-radius: 8px;
      border: 1px solid #fff;
      box-sizing: border-box;
    }
    &__user {
      display: flex;
      font-family: SF UI Display Light;
      color: #fff;
      font-size: 30px;
      line-height: 36px;
    }
    &__instagram {
      font-family: SF UI Display Light;
      color: #fff;
      font-size: 18px;
      line-height: 1;
    }
  }
  &-same {
    padding-bottom: 63px;
    &__title {
      margin-top: 40px;
      color: #fff;
      text-align: center;
      font-family: SF UI Display Semibold;
      font-size: 24px;
      line-height: 29px;
    }
    &__list {
      margin-top: 20px;
      display: flex;
      justify-content: center;
    }
    &__item {
      font-family: SF UI Display Light;
      font-size: 18px;
      line-height: 21px;
      color: #828282;
      padding: 5px 10px;
      margin: 0 15px;
      background: #fff;
      border-radius: 5px;
    }
  }
  &-similar {
    color: #000;
    text-align-last: left;
    margin-bottom: 40px;
    font-family: SF UI Display Semibold;
    font-size: 36px;
    line-height: 43px;
  }
}
.favorite-btn {
  margin-right: 15px;
}
</style>