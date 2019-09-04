<template>
  <div class="photos-wrapper">
    <b-container class="photos-container">
      <ul class="photos-buttons">
        <li class="photos-buttons__item">
          <img
            src="@/app/assets/photos/photos-btn__order.svg"
            alt
            class="photos-button order"
          >
        </li>
        <li class="photos-buttons__item">
          <img
            src="@/app/assets/photos/photos-btn__decompose.svg"
            alt
            class="photos-button decompose"
          >
        </li>
      </ul>
      <div class="masonry-wrapper">
        <ul
          v-scroll="handleScroll"
          class="masonry"
        >
          <li
            v-for="image of images"
            :key="image.id"
            class="masonry-item"
          >
            <img
              :src="image.urls.small"
              alt="image"
              class="masonry-content"
            >
          </li>
        </ul>
      </div>
    </b-container>
  </div>
</template>
<script>
import { setTimeout } from "timers";
import { mapActions } from "vuex";

export default {
  data: () => ({
    images: [],
    imagesPage: 1,
    imgUrl: ""
  }),
  /**
   * Load images when the page is ready
   */
  async mounted() {
    this.images = await this.getImages();
  },
  methods: {
    /**
     * Action whitch allows to get images
     */
    ...mapActions(["getImages"]),
    /**
     * Scroll handler function whitch allows to load images
     * when the page scroll = page Height
     */
    handleScroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          const imagesArr = this.$store.dispatch("getImages").then(newImages => {
            this.images.push(...newImages);
          });
        }
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.photos {
  &-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin: 0;
    margin-bottom: 72px;
    &__item {
      margin: 0 10px;
      cursor: pointer;
    }
  }
  &-wrapper {
    background-color: #fff;
    padding: 77px 0;
  }
  &-container {
    max-width: 1478px;
  }
  &-img {
    &__list {
      display: flex;
      flex-direction: column;

      flex-wrap: wrap;
      list-style-type: none;
    }
    &__item {
      position: relative;
      width: 33.33%; // 3 column
      img {
        width: 100%;
        display: block;
        transition: all 0.8s;
      }
    }
    &__picture {
      border-radius: 5px;
    }
  }
}
.decompose {
  filter: invert(100%);
}

/* Media queries*/
@media only screen and (max-width: 540px) {
  .decompose {
    filter: invert(0%);
  }
  .order {
    filter: invert(100%);
  }
}
</style>