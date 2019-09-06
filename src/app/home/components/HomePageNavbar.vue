<template>
  <div id="search">
    <b-container
      id="navbar"
      ref="navbar"
      class="header-navbar__wrapper"
    >
      <b-row
        class="header-navbar"
        align-h="between"
      >
        <b-col cols="3">
          <router-link
            tag="a"
            to="/home"
            class="header-link"
          >
            <div class="header-logo">
              <img
                src="@/app/assets/header/ImageStock-logo.svg"
                alt="ImageStock-logo"
                class="header-logo__svg"
              >
              <span class="header-logo__title">ImageStock</span>
            </div>
          </router-link>
        </b-col>
        <b-col cols="4">
          <nav class="header-nav">
            <ul class="header-nav__list">
              <a
                v-smooth-scroll="{ duration: 1000, offset: -150 }"
                href="#search"
                class="header-nav__search"
              >
                <li class="header-nav__item">
              
                  <img
                    src="@/app/assets/header/Search.svg"
                    alt="Favorites-icon"
                    class="header-nav__item-favorites"
                  >
                  <span class="header-nav__item-text">Поиск</span>
              
                </li>
              </a>
              <li class="header-nav__item">
                <img
                  src="@/app/assets/header/Favorites.svg"
                  alt="Favorites-icon"
                  class="header-nav__item-favorites"
                >
                <span class="header-nav__item-text">Избранное</span>
              </li>
              <li class="header-nav__item">
                <img
                  src="@/app/assets/header/History.svg"
                  alt="History-icon"
                  class="header-nav__item-history"
                >
                <span class="header-nav__item-text">История поиска</span>
              </li>
            </ul>
          </nav>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.stickyNavbar);
  },
  methods: {
    /**
     * Method allows to correct display
     * sticky header
     */
    stickyNavbar() {
      // Get the navbar
      const navbar = this.$refs.navbar;
      // Get the header
      const header = document.querySelector('.header-container')
      // Get the offset position of the navbar
      let sticky = navbar.offsetTop ? navbar.offsetTop : 0 ;

      if (window.pageYOffset >= sticky) {
        navbar.classList.add("header-sticky");
        header.style.paddingTop = '80px'
      }
      if (window.pageYOffset <= 40) {
        navbar.classList.remove("header-sticky");
        header.style.paddingTop = '0'
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.header {
  &-navbar__wrapper {
    top: 0;
    left: 0;
    max-width: 100%;
    z-index: 999;
    background: #000;
    padding: 25px 0;
  }
  &-navbar {
    max-width: 1478px;
    width: 100%;
    margin: 0 auto;
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
    }
    &__title {
      font-family: SF UI Display Semibold;
      font-size: 24px;
      line-height: 29px;
      margin-left: 24px;
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
      opacity: 0;
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
      }
    }
  }
  &-sticky {
    position: fixed;
    .header-nav__search {
      opacity: 1;
    }
  }
}
</style>