<template>
  <div
    class="search"
    :class="{ 'search-active': getHeaderSearch }"
  >
    <b-container class="search-container">
      <b-row>
        <b-col>
          <input
            ref="search"
            v-model="searchItem"
            type="text"
            class="search-input"
            placeholder="Поиск"
            @keyup.enter="getCollection($event.target.value), addHistory($event.target.value)"
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
              @click="getCollection(item), addHistory(item)"
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
import { mapActions, mapGetters } from "vuex";
import { eventBus } from "@/main.js";

export default {
  data: () => ({
    searchItem: "",
    items: [
      "Wallpapers",
      "Textures & Patterns",
      "Nature",
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
    ],
    collection: null
  }),
  computed: {
    ...mapGetters(["getHeaderSearch"])
  },
  methods: {
    ...mapActions(["getCollection", "setCollection", "updateHistory"]),
    /**
     * Method allows to get current collection of images
     * Emit's event bus method with collection array
     * @param item Name of collection
     */
    async getCollection(item) {
      if(this.$route.path === '/favorites') {
        this.$router.push('/home')
      }
      this.$refs.search.blur();
      this.searchItem = item;
      const collectionArr = await this.$store.dispatch("getCollection", item);
      eventBus.$emit("collection", collectionArr);
      await this.setCollection(item);
      
    },
    /**
     * Method allows to add current search item to localstorage
     * @param item Name of collection
     */
    async addHistory(item) {
      let historyArr = JSON.parse(localStorage.getItem("history")) || [];
      historyArr.push(item);
      localStorage.setItem("history", JSON.stringify(historyArr));
      await this.updateHistory(localStorage.getItem("history"));
    }
  }
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
  opacity: 0;
  transform: translateY(-300px);
  transition: 0.5s all linear;
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
      color: #fff;
      cursor: pointer;
      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }
  &-active {
    opacity: 1;
    transform: translateY(0);
    background: #000;
  }
  &-favorites {
    opacity: 1;
    transform: translateY(0);
    background: #000;
    padding-bottom: 40px;
    padding-top: 90px;
  }
}
.empty {
  width: 60px;
}
</style>