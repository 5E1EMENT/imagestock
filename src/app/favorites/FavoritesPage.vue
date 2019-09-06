<template>
  <div>
    <Navbar />
    <div
      id="favorites-wrapper"
      class="favorites-wrapper"
    >
      <b-container class="favorites-container">
        <h1 class="favorites-title">
          Избранное
        </h1>
        
        <MasonryButtons />
        <p
          v-if="!getFavorites"
          class="favorites-empty"
        >
          Добавьте фотографии в избранное
        </p>
        <Masonry />
      </b-container>
    </div>
  </div>
</template>
<script>
import Header from "@/app/components/TheHeader";
import Navbar from "@/app/components/TheNavbar";
import Masonry from "@/app/components/TheMasonry.vue";
import MasonryButtons from "@/app/components/TheMasonryButtons.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Navbar,
    Masonry,
    MasonryButtons
  },
  computed: {
      ...mapGetters(['getFavorites']),
  },
};
</script>
<style lang="scss" scoped>
.favorites {
  &-wrapper {
    background-color: #fff;
    padding: 77px 0;
  }
  &-container {
    max-width: 1478px;
    position: relative;
  }
  &-title {
    text-align: center;
    font-family: SF UI Display Bold;
    color: #000;
    font-size: 72px;
    line-height: 86px;
  }
  &-empty {
    text-align: center;
    font-family: SF UI Display light;
    color: #000;
    font-size: 36px;
  }
}
</style>