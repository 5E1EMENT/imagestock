<template>
  <div>
    <div
      id="favorites-wrapper"
      class="favorites-wrapper"
    >
      <b-container class="favorites-container">
        <h1
          v-if="favorites && !getHeaderSearch && !getHeaderHistory"
          class="favorites-title"
        >
          Избранное
        </h1>

        <MasonryButtons v-if="favorites && !getHeaderSearch && !getHeaderHistory" />
        <Loader v-if="loading && getFavorites" />
        <p
          v-if="!getFavorites"
          class="favorites-empty"
        >
          Добавьте фотографии в избранное
        </p>
        <Masonry @loadedFavorites="invertLoader" />
      </b-container>
    </div>
  </div>
</template>
<script>
import Masonry from "@/app/components/TheMasonry.vue";
import MasonryButtons from "@/app/components/TheMasonryButtons.vue";
import Loader from "@/app/components/TheLoader.vue";
import Navbar from "@/app/components/TheNavbar.vue";
import Search from "@/app/components/TheSearch.vue";
import History from "@/app/components/TheHistory.vue";
import { eventBus } from "@/main.js";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    Masonry,
    MasonryButtons,
    Loader
  },
  data: () => ({
    loading: true,
    favorites: true,
    showSearch: false
  }),
  computed: {
    ...mapGetters(["getFavorites", "getHeaderSearch", "getHeaderHistory"])
  },
  mounted() {
    eventBus.$on("collection", collection => {
      this.favorites = false;
    });
  },
  methods: {
    /**
     * Method get's the value from masonry component
     * when masonry data is loaded
     * @param value boolean
     */
    invertLoader(value) {
      this.loading = value;
    },
    /**
     * Method get's the value from masonry component
     * when masonry data is loaded
     * @param value boolean
     */
    showHistoryFavorites(value) {
      this.favoritesHistory = value;
    },
    /**
     * Method get's the value from masonry component
     * when masonry data is loaded
     * @param value boolean
     */
    showSearchFavorites(value) {
      this.favoritesSearch = value;
    }
  },
  metaInfo: {
      title: 'Favorites'
    }
};
</script>
<style lang="scss">
@import "@/scss/main.scss";
.favorites {
  &-wrapper {
    background-color: #fff;
    padding: 77px 0;
    padding-top: 110px;
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
    @include tablets-small-up {
      display: none;
    }
  }
  &-empty {
    text-align: center;
    font-family: SF UI Display light;
    color: #000;
    font-size: 36px;
  }
}
</style>