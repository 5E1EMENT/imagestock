<template>
  <div class="masonry-wrapper">
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
    </ul>
    <a
      v-if="loaded && !images || isOnPhoto"
      class="masonry-top"
      @click="scrollTop"
    >
      <img
        src="@/app/assets/photos/photos-btn__top.svg"
        alt="up"
        class="photos-button masonry-up"
      >
    </a>
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
    ...mapGetters(["getSearchCollection"]),
    /**
     * Check if current page is photo page
     */
    isOnPhoto() {
      return this.$route.params.imgId;
    }
  },
  /**
   * Initialize scroll listener
   * Load images when the page is ready
   * Get's new images from event bus and replace
   * old images to the new one
   */
  async mounted() {
    if (this.$route.path === "/home") {
      this.images = await this.getCollection();
      // Delay scroll handle function
      let delayedHandler = _.debounce(this.handleScroll, 400);
      window.addEventListener("scroll", delayedHandler);
      eventBus.$on("collection", collection => {
        this.images = collection;
      });
      this.loaded = true;
    } else if (this.$route.path === "/favorites") {
      this.getFavorites();
    } else {
      this.getSimilar();
    }
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
    /**
     * Method allows to laod favorites images
     */
    async getFavorites() {
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
    async getSimilar() {
      const imgId = this.$route.params.imgId;
      this.images = await this.getSimilarImg(imgId);
      console.log(this.images);
      this.loaded = true;
    },
    /**
     * Load images  when the page scroll goes to the end
     */
    loadImg() {
      if (this.loadImages) {
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
      if (atTheBottom) {
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
    goToPhoto(imgId) {
      this.$router.push(`/photo/${imgId}`)
    }
  }
};
</script>
<style lang="scss" scoped>
.masonry {
  &-top {
    &:hover {
      filter: drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.3));
      cursor: pointer;
    }
    position: absolute;
    right: -50px;
    bottom: 0;
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
    }
    &__instagram {
      font-family: SF UI Display Light;
      color: #fff;
      font-size: 18px;
    }
  }
  &-logos {
    margin-top: 34px;
    display: flex;
    &__item {
      padding: 0 22px;
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