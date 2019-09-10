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
                v-if="!isMobile"
                class="photo-actions__item"
                src="@/app/assets/photo/photo-download-full.svg"
                alt="photo-downoad"
              >
              <img
                v-else
                class="photo-actions__item"
                src="@/app/assets/photo/photo-download-adaptive.svg"
                alt="photo-downoad"
              >
            </a>
          </div>
        </div>
        <div class="photo-wrapper__container">
          <img
            v-if="!loading"
            src="@/app/assets/photo/photo-maximaze-full.svg"
            alt="Full photo"
            class="photo-img__maximaze"
            @click="showFullPhoto"
          >
          <img
            v-if="!loading"
            :src="currentPhotoRegular"
            alt="Photo"
            class="photo-img"
          >
        </div>

        <div class="photo-same">
          <h4
            v-if="!loading"
            class="photo-same__title"
          >
            Похожие теги
          </h4>
          <ul
            v-if="!loading"
            class="photo-same__list"
          >
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
        <h1
          v-if="!loading"
          class="photo-similar"
        >
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
    currentPhotoSmall: "",
    username: "",
    userInsta: "",
    userPhoto: "",
    downloadLink: "",
    fullPhotoLink: "",
    loading: true
  }),
  computed: {
    /**
     * Method check if this screen is  mobile
     */
    isMobile() {
      return document.body.clientWidth <= 650;
    }
  },
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
    this.startComponent();
  },
  methods: {
    ...mapActions(["getCurrentImg", "dowloadPhoto", "updateLocalStorage"]),
    /**
     * Function adds current image to local storage
     * @param imgId id of current image
     */
    async addToFavorite(imgId) {
      let favoritesArr = JSON.parse(localStorage.getItem("favorites")) || [];
      favoritesArr.push(imgId);
      localStorage.setItem("favorites", JSON.stringify(favoritesArr));
      await this.updateLocalStorage(localStorage.getItem("favorites"));
    },
    /**
     * Method redirects to the full photo link
     */
    showFullPhoto() {
      location.assign(this.fullPhotoLink);
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
      this.fullPhotoLink = photoLoaded.urls.full;
      this.loading = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
.photo {
  &-wrapper {
    position: relative;
    &__container {
      position: relative;
    }
    &__image {
      background-size: 100%;
      background-repeat: no-repeat;
      // filter: blur(5px);
      @include desktop-large {
        background-image: none !important;
      }
    }
    &__images {
      margin: 70px 0;
      @include desktop-large {
        margin: 0;
      }
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
    &__maximaze {
      position: absolute;
      right: 110px;
      bottom: 65px;
      z-index: 111;
      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
      &:active {
        transform: scale(1.15);
      }
      @include tablets-large {
        right: 50px;
        bottom: 40px;
      }
      @include tablets-small {
        right: 25px;
        bottom: 20px;
      }
    }
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
      @include wrapper {
        color: #000;
      }
    }
    &__instagram {
      font-family: SF UI Display Light;
      color: #fff;
      font-size: 18px;
      line-height: 1;
      @include wrapper {
        color: #828282;
      }
    }
  }
  &-same {
    padding-bottom: 63px;
    @include wrapper {
      padding-bottom: 30px;
    }
    &__title {
      margin-top: 40px;
      color: #fff;
      text-align: center;
      font-family: SF UI Display Semibold;
      font-size: 24px;
      line-height: 29px;
      @include wrapper {
        color: #000;
      }
    }
    &__list {
      display: flex;
      justify-content: center;
      @include tablets-small-up {
        flex-wrap: wrap;
        justify-content: flex-start;
      }
    }
    &__item {
      font-family: SF UI Display Light;
      font-size: 18px;
      line-height: 21px;
      color: #828282;
      padding: 5px 10px;
      margin: 0 15px;
      margin-top: 20px;
      background: #fff;
      border-radius: 5px;
      @include wrapper {
        background: #f2f2f2;
        color: #828282;
      }
    }
  }
  &-similar {
    color: #000;
    text-align: left;
    margin-bottom: 40px;
    font-family: SF UI Display Semibold;
    font-size: 36px;
    line-height: 43px;
    @include tablets-small-up {
      text-align: center;
    }
  }
}
.favorite-btn {
  margin-right: 15px;
  @include tablets-large {
    width: 50px;
    height: 50px;
  }
  @include phones {
    margin-right: 5px;
  }
}
</style>