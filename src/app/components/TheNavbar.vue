<template>
  <b-container
    id="navbar"
    ref="navbarWrapper"
    class="navbar-wrapper"
    :class="{'navbar-sticky': sticky}"
  >
    <b-row
      class="navbar"
      align-h="between"
    >
      <b-col
        cols="4"
        md="5"
        sm="5"
      >
        <router-link
          tag="a"
          to="/home"
          class="navbar-link"
        >
          <div class="navbar-logo">
            <img
              src="@/app/assets/header/ImageStock-logo.svg"
              alt="ImageStock-logo"
              class="navbar-logo__svg"
            >
            <span class="navbar-logo__title">ImageStock</span>
          </div>
        </router-link>
      </b-col>
      <b-col
        cols="8"
        sm="7"
        md="6"
        lg="5"
        xl="4"
        class="navbar-column"
      >
        <nav class="navbar-nav">
          <ul class="navbar-nav__list">
            <li
              class="navbar-nav__item search-nav"
              :class="{ 'nav-active': getHeaderSearch}"
              @click="showSearch"
            >
              <img
                src="@/app/assets/header/Search.svg"
                alt="Favorites-icon"
                class="navbar-nav__item-favorites"
              >
              <span class="navbar-nav__item-text">Поиск</span>
            </li>

            <router-link
              tag="li"
              to="/favorites"
              class="navbar-nav__item"
            >
              <img
                src="@/app/assets/header/Favorites.svg"
                alt="Favorites-icon"
                class="navbar-nav__item-favorites"
              >
              <span class="navbar-nav__item-text">Избранное</span>
            </router-link>

            <li
              class="navbar-nav__item history-nav"
              :class="{ 'nav-active': getHeaderHistory }"
              @click="showHistory"
            >
              <img
                src="@/app/assets/header/History.svg"
                alt="History-icon"
                class="navbar-nav__item-history"
              >
              <span class="navbar-nav__item-text">История поиска</span>
            </li>
          </ul>
        </nav>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import { eventBus } from "@/main.js";
import easyScroll from "easy-scroll";

export default {
  props: {
    sticky: Boolean
  },
  data: () => ({
    history: false,
    search: true
  }),
  computed: {
    /**
     * Getter allows to get current search component status
     */
    ...mapGetters(["getHeaderSearch", "getHeaderHistory"])
  },
  methods: {
    /**
     * Action allwos to inver search component status
     */
    ...mapActions(["invertSearchStatus", "invertHistoryStatus"]),
    /**
     * Method allow to show search component
     */
    showSearch() {
      if (!this.getHeaderSearch) {
        if (this.$route.path === "/favorites" || this.$route.params.imgId) {
          this.$parent.onFavorites = false;
          this.$parent.onPhoto = false;
          this.$parent.sticky = false;
        }
        this.invertSearchStatus(true);
        this.invertHistoryStatus(false);
      }
      /** Smooth scroll to the top */
      easyScroll({
        scrollableDomEle: window,
        direction: "top",
        duration: 500,
        easingPreset: "easeInOutCubic"
      });
    },
    /**
     * Method allow to show history component
     */
    showHistory() {
      if (!this.getHeaderHistory) {
        if (this.$route.path === "/favorites" || this.$route.params.imgId) {
          this.$parent.onFavorites = false;
          this.$parent.onPhoto = false;
        }
        this.invertSearchStatus(false);
        this.invertHistoryStatus(true);
      }
      /** Smooth scroll to the top */
      easyScroll({
        scrollableDomEle: window,
        direction: "top",
        duration: 500,
        easingPreset: "easeInOutCubic"
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/scss/main.scss";
.navbar {
  max-width: 1478px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  &-wrapper {
    top: 0;
    left: 0;
    max-width: 100%;
    z-index: 999;
    background: #000;
    padding: 25px 0;
    @include desktop {
      position: fixed;
    }
  }
  &-link {
    text-decoration: none;
    color: #fff;
  }
  &-logo {
    &:hover {
      cursor: pointer;
    }
    &__svg {
      width: 28px;
      height: 28px;
      vertical-align: bottom;
      @include tablets-large {
        width: 22px;
        height: 22px;
      }
    }
    &__title {
      font-family: SF UI Display Semibold;
      font-size: 24px;
      line-height: 29px;
      margin-left: 24px;
      @include tablets-large {
        font-size: 16px;
        line-height: 1;
        margin-left: 15px;
      }
      @include tablets-small-up {
        display: none;
      }
    }
  }
  &-column {
    @include tablets-small-up {
      max-width: 120px;
    }
  }
  &-nav {
    &__list {
      display: flex;
      justify-content: space-between;
      list-style-type: none;
    }
    &__search {
      text-decoration: none;
      color: #fff;
      opacity: 1;
      visibility: visible;
      transition: all 0.3s ease;
    }
    &__item {
      position: relative;
      &:hover {
        cursor: pointer;
      }
      &-favorites {
        width: 23px;
        height: 21px;
        vertical-align: sub;
      }
      &-history {
        width: 20px;
        height: 22px;
        vertical-align: sub;
      }
      &-text {
        margin-left: 10px;
        font-size: 18px;
        font-family: SF UI Display Light;
        color: #fff;
        @include tablets-large {
          font-size: 12px;
        }
        @include tablets-small-up {
          display: none;
        }
      }
      &:hover {
        &::after {
          content: "";
          position: absolute;
          display: block;
          background-color: #fff;
          height: 2px;
          width: 30px;
          bottom: -10px;
          right: 0;
          opacity: 1;
          transition: all 0.3s ease;
          @include tablets-small-up {
            display: none;
          }
        }
      }
      &::after {
        content: "";
        position: absolute;
        display: block;
        background-color: #fff;
        opacity: 0;
        height: 2px;
        width: 30px;
        bottom: -10px;
        right: -10px;
        transition: all 0.3s ease;
        @include tablets-small-up {
          display: none;
        }
      }
    }
  }
  &-sticky {
    position: fixed;
    .navbar-nav__search {
      opacity: 1;
      visibility: visible;
    }
  }
}
.search-nav {
  opacity: 1;
  visibility: visible;
  transition: 0.3s all ease-in;
}
.nav-active {
  &::after {
    content: "";
    position: absolute;
    display: block;
    background-color: #fff;
    height: 2px;
    width: 30px;
    bottom: -10px;
    right: 0;
    opacity: 1;
    transition: all 0.3s ease;
    @include tablets-small-up {
      display: none;
    }
  }
}
</style>