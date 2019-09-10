<template>
  <header
    id="header-wrapper"
    ref="headerWrapper"
    class="header-wrapper"
    :class="{ 'header-favorites': onFavorites || onPhoto, 'active-padding': sticky && !onFavorites, 'active-padding__photo': sticky && onPhoto }"
  >
    <b-container
      ref="headerContainer"
      class="header-container"
    >
      <Navbar
        ref="navbar"
        :sticky="sticky"
      />
      <div
        class="header-container__wrapper"
        :class="{ 'header-container__wrapper-favorites': onFavorites || onPhoto }"
      >
        <Search />
        <History />
      </div>
    </b-container>
  </header>
</template>


<script>
import Navbar from "./TheNavbar";
import Search from "./TheSearch";
import History from "./TheHistory";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Navbar,
    Search,
    History
  },
  data: () => ({
    onFavorites: false,
    onPhoto: false,
    sticky: false
  }),
  computed: {
    ...mapGetters(["getHeaderSearch", "getHeaderHistory"])
  },
  watch: {
    /**
     * When route changes,
     * our component will be rerendered
     */
    $route: {
      handler: "startComponent",
      immediate: true
    }
  },
  /**
   * Method adds sticky navbar
   */
  mounted() {
    this.startComponent();
    window.addEventListener("scroll", this.stickyNavbar);
  },
  /**
   * When component destroys - remove event listener
   */
  destroyed() {
    window.removeEventListener("scroll", this.stickyNavbar);
  },
  methods: {
    ...mapActions(["invertSearchStatus", "invertHistoryStatus"]),
    /**
     * Component will displays depends of current route
     */
    startComponent() {
      if (this.$route.path === "/favorites") {
        this.onPhoto = false
        this.onFavorites = true;
        this.sticky = true;
        this.invertSearchStatus(false);
        this.invertHistoryStatus(false);
      } else if (this.$route.path === "/home") {
        this.onFavorites = false;
        this.sticky = false;
        this.invertSearchStatus(true);
        this.invertHistoryStatus(false);
      } else if(this.$route.params.imgId){
        this.onPhoto = true
        this.onFavorites = false;
        this.sticky = true;
        this.invertSearchStatus(false);
        this.invertHistoryStatus(false);
      }
      
    },
    /**
     * Method allows to correct display
     * sticky header
     */
    stickyNavbar() {
      // Get the navbar
      const navbar = this.$refs.navbar.$refs.navbarWrapper;
      // Get the header
      const header = this.$refs.headerContainer;
      const headerWrapper = this.$refs.headerWrapper;
      // Get the offset position of the navbar
      let sticky = navbar.offsetTop ? navbar.offsetTop : 0;
      //If current route is home
      
      if (this.$route.path === "/home") {
        if (window.pageYOffset >= sticky) {
          this.sticky = true;
        }
        if (window.pageYOffset <= 40) {
          this.sticky = false;
        }
      } else if (
        (this.$route.path === "/favorites" && this.getHeaderSearch) || (this.$route.path === "/favorites" && this.getHeaderHistory)
      ) {
        if (window.pageYOffset >= sticky) {
          this.sticky = true;
        }
        if (window.pageYOffset <= 40) {
          this.sticky = false;
        }
      } else if((this.$route.params.imgId && this.getHeaderSearch) || (this.$route.params.imgId && this.getHeaderHistory)) {
        if (window.pageYOffset >= sticky) {
          this.sticky = true;
        }
        if (window.pageYOffset <= 40) {
          this.sticky = false;
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/scss/main.scss";
.header {
  &-wrapper {
    background-color: #000;
    color: #fff;
    padding-top: 40px;
    padding-bottom: 90px;
    height: 369px;
    @include desktop {
     padding: 0;
     height: auto;
	}
  }
  &-container {
    max-width: 1478px;
    padding: 0;

    transition: 0.3s all ease-in;
    &__wrapper {
      overflow: hidden;
      transition: 0.3s all ease-in;
      display: block;
      opacity: 1;
      
      &-favorites {
        display: none;
      }
      &-favorites--hidden {
        opacity: 0;
      }
      @include desktop {
     height: 180px;
	}
    }
  }
  &-favorites {
    padding: 0;
    height: auto;
  }
}
.active-padding {
  padding-top: 120px !important;
}
.active-padding__photo {
  padding-top: 80px !important;
}
</style>