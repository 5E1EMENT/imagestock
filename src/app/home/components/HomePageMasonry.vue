<template>
  <div class="masonry-wrapper">
    <ul
      v-masonry
      transition-duration="0.3s"
      :origin-top="true"
      :horizontal-order="true"
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
          :src="image.urls.small"
          alt="image"
          class="masonry-image"
        >
        <div class="masonry-image__data">
          <img
            src
            alt="user-logo"
          >
          <h3 class="masonry-image__user">
            Vadim Sadovsky
          </h3>
          <h4 class="masonry-image__instagram">
            @vadimsadovsky
          </h4>
          <div class="masonry-logos">
            <img
              ref="masonryIcon"
              src="@/app/assets/photo/photo-favorive.svg"
              alt="favorite-icon"
              class="masonry-logos__item favorive"
              @mouseover="hoverStart"
              @mouseleave="hoverLeave"
            >
            <img
              ref="masonryIcon"
              src="@/app/assets/photo/photo-maximize.svg"
              alt="maximize-icon"
              class="masonry-logos__item maximize"
              @mouseover="hoverStart"
              @mouseleave="hoverLeave"
            >
            <img
              ref="masonryIcon"
              src="@/app/assets/photo/photo-download.svg"
              alt="download-icon"
              class="masonry-logos__item download"
              @mouseover="hoverStart"
              @mouseleave="hoverLeave"
            >
          </div>
        </div>
      </li>
    </ul>
    <a
      v-smooth-scroll="{ duration: 1000, offset: -350 }"
      class="masonry-top"
      href="#photos-wrapper"
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
import { mapActions } from "vuex";

export default {
  data: () => ({
    images: []
  }),
  /**
   * Initialize scroll listener
   * Load images when the page is ready
   */
  async mounted() {
    window.addEventListener("scroll", this.handleScroll);
    this.images = await this.getImages();
    this.loading = false;
  },
  methods: {
    /**
     * Action whitch allows to get images
     */
    ...mapActions(["getImages"]),
    /**
     * Scroll handler function whitch allows to load images
     * when the page scroll goes to the end
     */
    handleScroll() {
      let scrollHeight = window.scrollY;
      let maxHeight =
        window.document.body.scrollHeight -
        window.document.documentElement.clientHeight;

      if (scrollHeight == maxHeight) {
        const imagesArr = this.$store.dispatch("getImages").then(newImages => {
          this.images.push(...newImages);
        });
      }
    },
    /**
     * Get siblings of an element
     * @param  {Element} elem
     * @return {Object}
     */
    getSiblings(elem) {
      var siblings = [];
      var sibling = elem.parentNode.firstChild;
      var skipMe = elem;
      for (; sibling; sibling = sibling.nextSibling)
        if (sibling.nodeType == 1 && sibling != elem) siblings.push(sibling);
      return siblings;
    },
    /**
     * Function handles hover start effect and
     * add unactive class to the sibling elements
     * @param {Event} event
     */
    hoverStart(event) {
      const icons = this.$refs.masonryIcon;
      const targetIcon = event.target;
      const targetSiblings = this.getSiblings(targetIcon);
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
      const targetSiblings = this.getSiblings(targetIcon);
      targetSiblings.forEach(element => {
        element.classList.remove("unactive-icon");
      });
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
    right: 0;
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
        filter: blur(5px);
      }
    }
  }
  &-image {
    width: 100%;
    &__data {
      display: none;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    &__user {
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
    margin-top: 54px;
    display: flex;
    &__item {
      padding: 0 22px;
      &:hover {
        transform: scale(1.4);
      }
    }
  }
}
.unactive-icon {
  filter: brightness(0.3);
}
</style>