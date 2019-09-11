<template>
  <div
    v-if="loaded"
    class="masonry-wrapper"
  >
    <ul
      v-masonry
      transition-duration="0"
      :origin-top="true"
      :horizontal-order="false"
      fit-width="true"
      stagger="0.03s"
      item-selector=".masonry-item"
      class="masonry"
    >
      <li
        v-for="image of images"
        :key="image.id"
        v-masonry-tile
        class="masonry-item"
      >
        <img
          v-if="isOnPhoto"
          :src="image.cover_photo.urls.small"
          alt="image"
          class="masonry-image"
        >
        <img
          v-else
          :src="image.urls.small"
          alt="image"
          class="masonry-image"
        >
        <div class="masonry-image__data">
          <img
            :src="image.user.profile_image.medium"
            alt="user-logo"
            class="masonry-image__profile"
          >
          <h3 class="masonry-image__user">
            {{ image.user.username }}
          </h3>
          <h4
            v-if="image.user.instagram_username"
            class="masonry-image__instagram"
          >
            @{{ image.user.instagram_username }}
          </h4>
          <div class="masonry-logos">
            <img
              v-if="isOnPhoto"
              ref="masonryIcon"
              src="@/app/assets/photo/photo-favorive.svg"
              alt="favorite-icon"
              class="masonry-logos__item favorive"
              @mouseover="hoverStart"
              @mouseleave="hoverLeave"
              @click="addToFavorite(image.cover_photo.id)"
            >
            <img
              v-else
              ref="masonryIcon"
              src="@/app/assets/photo/photo-favorive.svg"
              alt="favorite-icon"
              class="masonry-logos__item favorive"
              @mouseover="hoverStart"
              @mouseleave="hoverLeave"
              @click="addToFavorite(image.id)"
            >
            <img
              v-if="isOnPhoto"
              ref="masonryIcon"
              src="@/app/assets/photo/photo-maximize.svg"
              alt="maximize-icon"
              class="masonry-logos__item maximize"
              @mouseover="hoverStart"
              @mouseleave="hoverLeave"
              @click="goToPhoto(image.cover_photo.id)"
            >

            <img
              v-else
              ref="masonryIcon"
              src="@/app/assets/photo/photo-maximize.svg"
              alt="maximize-icon"
              class="masonry-logos__item maximize"
              @mouseover="hoverStart"
              @mouseleave="hoverLeave"
              @click="goToPhoto(image.id)"
            >
            <img
              ref="masonryIcon"
              src="@/app/assets/photo/photo-download.svg"
              alt="download-icon"
              class="masonry-logos__item download"
              @mouseover="hoverStart"
              @mouseleave="hoverLeave"
              @click="downloadImg(image.id)"
            >
          </div>
        </div>
      </li>
      <a
        v-if="loaded && images && isOnHome || isOnPhoto && loaded || isOnFavorites && favoritesLength"
        class="masonry-top"
        @click="scrollTop"
      >
        <img
          src="@/app/assets/photos/photos-btn__top.svg"
          alt="up"
          class="photos-button masonry-up"
        >
      </a>
    </ul>
  </div>
</template>
<script>
import _ from "lodash";
import getSiblings from "@/app/core/utils/siblings.utils.js";
import easyScroll from "easy-scroll";
import { mapActions, mapGetters } from "vuex";
import { eventBus } from "@/main.js";

export default {
  data: () => ({
    images: [],
    loadImages: true,
    loaded: false
  }),
  computed: {
    /**
     * Getter allows to get current search images collection
     */
    ...mapGetters(["getFavorites", "getSearchCollection"]),
    favoritesLength() {
      return this.getFavorites
        ? Object.keys(JSON.parse(this.getFavorites)).length >= 4
        : 0;
    },
    /**
     * Check if current page is photo page
     */
    isOnPhoto() {
      return this.$route.params.imgId;
    },
    /**
     * Check if current page is home page
     */
    isOnHome() {
      return this.$route.path === "/home";
    },
    /**
     * Check if current page is home page
     */
    isOnFavorites() {
      return this.$route.path === "/favorites";
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
  /**
   * Initialize scroll listener
   * Load images when the page is ready
   * Get's new images from event bus and replace
   * old images to the new one
   */
  mounted() {
    this.startComponent();
  },
  methods: {
    /**
     * Action whitch allows to get images
     */
    ...mapActions([
      "getCollection",
      "getFavoritesImg",
      "updateLocalStorage",
      "dowloadPhoto",
      "getSimilarImg"
    ]),
    async startComponent() {
      console.log(1)
      if (this.$route.path === "/home") {
        const collectionName = this.$route.params.collectionName;
        this.images = await this.getCollection(collectionName);
        // Delay scroll handle function
        let delayedHandler = _.debounce(this.handleScroll, 400);
        window.addEventListener("scroll", delayedHandler);
        this.loaded = true;
      } else if (this.$route.params.collectionName) {
        const collectionName = this.$route.params.collectionName;
        this.images = await this.getCollection(collectionName);
        let delayedHandler = _.debounce(this.handleScroll, 400);
        window.addEventListener("scroll", delayedHandler);
        this.loaded = true;
      } else if (this.$route.path === "/favorites") {
        this.getFavoritesImages();
      } else {
        this.getSimilar();
      }
    },
    /**
     * Method allows to laod favorites images
     */
    async getFavoritesImages() {
      const favoriteImages = await this.getFavoritesImg();
      this.images = _.uniqWith(favoriteImages, _.isEqual);
      this.$emit("loadedFavorites", false);
      this.loaded = true;
      eventBus.$on("collection", collection => {
        this.images = collection;
      });
      eventBus.$on("showFavorites", collection => {
        this.images = collection;
      });
    },
    /**
     * Function loads similar images
     */
    async getSimilar() {
      const imgId = this.$route.params.imgId;
      this.images = await this.getSimilarImg(imgId);
      this.loaded = true;
    },
    /**
     * Load images  when the page scroll goes to the end
     */
    loadImg() {
      if (this.loadImages && this.isOnHome) {
        this.loadImages = false;
        const imagesArr = this.$store
          .dispatch("getCollection", this.getSearchCollection)
          .then(newImages => {
            this.images.push(...newImages);
          });
      }
    },
    /**
     * Method allows to prevent multiple requests
     * and check when user at the bottom -> load new images
     */
    handleScroll() {
      const scrollTop = document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const totalHeight = document.documentElement.offsetHeight;
      const atTheBottom = scrollTop + viewportHeight >= totalHeight;
      if (atTheBottom && this.isOnHome) {
        this.loadImages = true;
        this.loadImg();
      }
    },
    /**
     * Function handles hover start effect and
     * add unactive class to the sibling elements
     * @param {Event} event
     */
    hoverStart(event) {
      const icons = this.$refs.masonryIcon;
      const targetIcon = event.target;
      const targetSiblings = getSiblings(targetIcon);
      targetSiblings.forEach(element => {
        element.classList.add("unactive-icon");
      });
    },
    /**
     * Function handles hover start effect and
     * add unactive class to the sibling elements
     * @param {Event} event
     */
    hoverLeave(event) {
      const icons = this.$refs.masonryIcon;
      const targetIcon = event.target;
      const targetSiblings = getSiblings(targetIcon);
      targetSiblings.forEach(element => {
        element.classList.remove("unactive-icon");
      });
    },
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
     * Function allows to scroll to the top
     */
    scrollTop() {
      /** Smooth scroll to the top */
      easyScroll({
        scrollableDomEle: window,
        direction: "top",
        duration: 500,
        easingPreset: "easeInOutCubic"
      });
    },
    /**
     * Method allows to download current img
     */
    async downloadImg(imgId) {
      const downloadUrl = await this.dowloadPhoto(imgId);
      location.assign(downloadUrl);
    },
    /**
     * Function allows to redirect user to current photo
     * @param {String} imgId image id
     */
    goToPhoto(imgId) {
      this.$router.push(`/photo/${imgId}`);
    }
  }
};
</script>
<style lang="scss">
@import "@/scss/main.scss";
.masonry {
  width: 100%;
  &-top {
    &:hover {
      filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3));
      cursor: pointer;
    }
    position: absolute;
    right: -50px;
    bottom: 0;
    @include tablets {
      right: 10px;
      bottom: -60px;
    }
  }
  &-item {
    max-width: 446px;
    width: 100%;
    &:hover {
      .masonry-image__data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .masonry-image {
        filter: blur(4px);
      }
    }
    @include wrapper {
      max-width: 380px;
    }
    @include desktop-large {
      max-width: 340px;
    }
    @include desktop {
      max-width: 300px;
    }
    @include tablets-large {
      max-width: 350px;
    }
    @include tablets {
      max-width: 250px;
    }
    @include tablets-small {
      max-width: 450px;
    }
    @include horizontal-mobile {
      max-width: auto;
    }
    @include phones {
      max-width: 380px;
    }
    @include phones-min {
      max-width: 320px;
    }
    @include iphone {
      max-width: 290px;
    }
  }
  &-image {
    width: 100%;
    border-radius: 5px !important;
    &__profile {
      width: 70px;
      height: 70px;
      border-radius: 8px;
      border: 1px solid #fff;
      box-sizing: border-box;
      @include desktop-large {
        width: 50px;
        height: 50px;
      }
    }
    &__data {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    &__user {
      margin-top: 10px;
      font-family: SF UI Display Light;
      color: #fff;
      font-size: 30px;
      line-height: 36px;
      @include phones {
        font-size: 25px;
      }
    }
    &__instagram {
      font-family: SF UI Display Light;
      color: #fff;
      font-size: 18px;
      @include phones {
        font-size: 15px;
      }
    }
  }
  &-logos {
    margin-top: 34px;
    display: flex;
    max-width: 160px;
    width: 100%;
    justify-content: space-between;
    @include desktop-large {
      max-width: 120px;
    }
    @include desktop {
      max-width: 150px;
      margin-top: 20px;
    }
    @include tablets-small-up {
      max-width: 200px;
      margin-top: 30px;
    }
    @include phones {
      max-width: 140px;
    }
    &__item {
      @include desktop-large {
        width: 25px;
        height: 25px;
      }
      @include desktop {
        width: 30px;
        height: 30px;
      }
      @include tablets-large {
        width: 25px;
        height: 25px;
      }
      @include tablets-small-up {
        width: 35px;
        height: 35px;
      }
      @include phones {
        width: 25px;
        height: 25px;
      }
      &:hover {
        transform: scale(1.4);
      }
      &:active {
        transform: scale(1.8);
      }
    }
  }
}
/* Class add black background to the icon */
.unactive-icon {
  filter: brightness(0.5);
}
</style>