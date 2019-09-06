<template>
  <div
    id="photos-wrapper"
    class="photos-wrapper"
  >
    <b-container class="photos-container">
      <ul
        id="photos-buttons"
        class="photos-buttons"
      >
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

      <Masonry />
      <div class="photos-loader">
        <img
          src="@/app/assets/photos/photos-loader.svg"
          alt
          class="photos-loader__img"
        >
      </div>
    </b-container>
  </div>
</template>
<script>
import Masonry from '@/app/components/TheMasonry.vue'

import { setTimeout } from "timers";
import { mapActions } from "vuex";

export default {
  
  components: {
    Masonry
  },
  data: () => ({
    images: [],

  }),
  methods: {
    /**
     * Action whitch allows to get images
     */
    ...mapActions(["getImages"]),
    
  },
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
    }
  }
  &-wrapper {
    background-color: #fff;
    padding: 77px 0;
  }
  &-container {
    max-width: 1478px;
    position: relative;
  }
  &-img {
    &__picture {
      border-radius: 5px;
    }
  }
  &-loader {
    display: block;
    text-align: center;
    position: relative;
    margin-top: 50px;
    img {
      text-align: center;
      animation: spin 2s linear infinite;
    }
  }
  
}
/* Inver photos decompose btn color */
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
/* Animations */
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>