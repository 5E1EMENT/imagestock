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
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="header-logo__svg"
          >
            <path
              d="M7.5 6.75V0H16.5V6.75H7.5ZM16.5 10.5H24V24H0V10.5H7.5V17.25H16.5V10.5Z"
              fill="#FFF"
            />
          </svg>
          <span class="header-logo__title">ImageStock</span>
        </div>
      </router-link>
    </b-col>
    <b-col cols="3">
      <nav class="header-nav">
        <ul class="header-nav__list">
          <li class="header-nav__item">
            <svg
              viewBox="0 0 23 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="header-nav__item-favorites"
            >
              <path
                d="M13.0516 20.2443C12.1779 21.0597 10.8329 21.0597 9.95928 20.2325L9.83283 20.1143C3.79765 14.501 -0.145337 10.8257 0.00410514 6.24047C0.0730786 4.23147 1.07319 2.30521 2.69407 1.17072C5.7289 -0.956453 9.47646 0.0362259 11.4997 2.47065C13.5229 0.0362259 17.2705 -0.96827 20.3053 1.17072C21.9262 2.30521 22.9263 4.23147 22.9953 6.24047C23.1562 10.8257 19.2017 14.501 13.1665 20.138L13.0516 20.2443Z"
                fill="white"
              />
            </svg>
            <span class="header-nav__item-text">Избранное</span>
          </li>
          <li class="header-nav__item">
            <svg
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="header-nav__item-history"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.48945 10.0019C2.48945 4.53106 7.00695 0.100222 12.5211 0.251889C17.602 0.392722 21.8486 4.63939 21.9895 9.72022C22.1411 15.2344 17.7103 19.7519 12.2395 19.7519C9.97529 19.7519 7.90612 18.9827 6.25945 17.6827C5.75029 17.2927 5.71779 16.5236 6.17279 16.0686C6.56279 15.6786 7.16945 15.6461 7.60279 15.9819C8.88112 16.9894 10.4953 17.5852 12.2395 17.5852C16.4645 17.5852 19.877 14.1294 19.8228 9.89355C19.7686 5.86355 16.3778 2.47272 12.3478 2.41856C8.10112 2.36439 4.65612 5.77689 4.65612 10.0019H6.59529C7.08279 10.0019 7.32112 10.5869 6.98529 10.9227L3.96279 13.9561C3.74612 14.1727 3.41029 14.1727 3.19362 13.9561L0.17112 10.9227C-0.175546 10.5869 0.062787 10.0019 0.550287 10.0019H2.48945ZM11.1561 6.48105C11.1561 6.03689 11.5245 5.66855 11.9686 5.66855C12.4128 5.66855 12.7811 6.03689 12.7811 6.47022V10.1536L15.9011 12.0061C16.2803 12.2336 16.4103 12.7319 16.1828 13.1219C15.9553 13.5011 15.457 13.6311 15.067 13.4036L11.687 11.3994C11.362 11.2044 11.1561 10.8469 11.1561 10.4677V6.48105Z"
                fill="white"
              />
            </svg>
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