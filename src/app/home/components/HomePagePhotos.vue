<template>
  <div
    id="photos-wrapper"
    class="photos-wrapper"
  >
    <b-container class="photos-container">
      <MasonryButtons />
      <Masonry />
      <Loader />
    </b-container>
  </div>
</template>
<script>
import Masonry from "@/app/components/TheMasonry.vue";
import MasonryButtons from "@/app/components/TheMasonryButtons.vue";
import Loader from "@/app/components/TheLoader.vue";

import { setTimeout } from "timers";
import { mapActions } from "vuex";

export default {
  components: {
    Masonry,
    MasonryButtons,
    Loader
  },
  data: () => ({
    images: []
  }),
  methods: {
    /**
     * Action whitch allows to get images
     */
    ...mapActions(["getImages"])
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
.photos {
  &-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin: 0;
    margin-bottom: 72px;
    @include tablets-small-up {
      margin-bottom: 40px;
    }
    @include phones {
      margin-bottom: 30px;
    }
    &__item {
      margin: 0 10px;
    }
  }
  &-wrapper {
    background-color: #fff;
    padding: 77px 0;
    @include tablets-small-up {
      padding-top: 40px;
    }
    @include phones {
      padding-top: 30px;
    }
  }
  &-container {
    max-width: 1478px;
    position: relative;
    padding: 0;
  }
  &-img {
    &__picture {
      border-radius: 5px;
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
</style>