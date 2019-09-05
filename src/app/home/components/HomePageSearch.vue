<template>
  <div class="search">
    <b-container class="search-container">
      <b-row>
        <b-col>
          <input
            type="text"
            class="search-input"
            placeholder="Поиск"
          >
        </b-col>
      </b-row>
      <b-row class="search-row">
        <b-col class="search-wrapper">
          <ul class="search-list">
            <li
              v-for="item of items"
              :key="item"
              class="search-list__item"
            >
              {{ item }}
            </li>
            <li class="search-list__item empty" />
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      "Wallpapers",
      "Textures & Patterns",
      "Nature",
      "Current Events",
      "Architecture",
      "Business & Work",
      "Film",
      "Animals",
      "Travel",
      "Fashion",
      "Food & Drink",
      "Spirituality",
      "Experemental",
      "People",
      "Health",
      "Arts & Culture"
    ]
  })
};
</script>
<style lang="scss" scoped>

/* Placeholder color */
::-webkit-input-placeholder {
  color: #fff;
  opacity: 1;
} /* webkit */
::-moz-placeholder {
  color: #fff;
  opacity: 1;
} /* Firefox 19+ */
:-moz-placeholder {
  color: #fff;
  opacity: 1;
} /* Firefox 18- */
:-ms-input-placeholder {
  color: #fff;
  opacity: 1;
} /* IE */

/* Remove scrollbar */
::-webkit-scrollbar {
  width: 0;
}

.search {
  &-container {
    max-width: 1200px;
  }
  &-row {
    overflow-x: visible;
  }
  &-input {
    width: 100%;
    padding-bottom: 30px;
    border: none;
    outline: none;
    background-color: transparent;
    font-family: SF UI Display Light;
    font-size: 72px;
    line-height: 86px;
    text-align: center;
    color: #fff;
    position: relative;
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 0;
      background: #fff;
    }
  }
  &-wrapper {
    padding: 0;
    position: relative;

    &:after {
      content: "";
      display: block;
      position: absolute;
      top: -20px;
      height: 1px;
      width: 100%;
      background: rgb(2, 0, 36);
      background: linear-gradient(
        90deg,
        rgba(2, 0, 36, 0) 0%,
        rgba(255, 255, 255, 1) 49%,
        rgba(0, 0, 0, 0) 100%
      );
    }
    &::before {
      z-index: 11;
      content: "";
      position: absolute;
      display: block;
      width: 100px;
      height: 100%;
      -webkit-box-shadow: inset -45px 0px 30px 0px rgba(0, 0, 0, 0.86);
      -moz-box-shadow: inset -45px 0px 30px 0px rgba(0, 0, 0, 0.86);
      box-shadow: inset -45px 0px 30px 0px rgba(0, 0, 0, 0.86);
      right: 0;
    }
  }
  &-list {
    margin: 0;
    padding: 0;
    display: -webkit-box;
    overflow: auto;
    flex-wrap: nowrap;
    width: 1200px;
    list-style-type: none;
    position: relative;

    &__item {
      position: relative;
      margin-left: 20px;
      cursor: pointer;
      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }
}
.empty {
    width: 60px;
}
</style>