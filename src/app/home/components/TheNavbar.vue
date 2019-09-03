<template>
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
            alt=""
            class="header-logo__svg"
          >
          <span class="header-logo__title">ImageStock</span>
        </div>
      </router-link>
    </b-col>
    <b-col cols="3">
      <nav class="header-nav">
        <ul class="header-nav__list">
          <li class="header-nav__item">
            <img
              src="@/app/assets/header/Favorites.svg"
              alt=""
              class="header-nav__item-favorites"
            >
            <span class="header-nav__item-text">Избранное</span>
          </li>
          <li class="header-nav__item">
            <img
              src="@/app/assets/header/History.svg"
              alt=""
              class="header-nav__item-history"
            >
            <span class="header-nav__item-text">История поиска</span>
          </li>
        </ul>
      </nav>
    </b-col>
  </b-row>
</template>

<style lang="scss" scoped>
.header {
  &-navbar {
    background: #000;
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
    &__item {
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
    }
  }
}
</style>