<template>
  <div
    ref="history"
    class="history"
    :class="{ 'history-active': getHeaderHistory}"
  >
    <b-container class="history-container">
      <b-row class="history-row">
        <b-col class="history-wrapper">
          <h1 class="history-title">
            Ваши запросы
          </h1>
          <ul
            v-if="items.length"
            class="history-list"
          >
            <li
              v-for="item of items"
              :key="item"
              class="history-list__item"
              @click="getCollection(item)"
            >
              {{ item }}
            </li>
          </ul>
          <h4
            v-else
            class="history-empty"
          >
            История пуста
          </h4>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { eventBus } from "@/main.js";
import _ from "lodash";
export default {
  data: () => ({
    items: []
  }),
  computed: {
    ...mapGetters(["getHistory", "getHeaderHistory"])
  },

  watch: {
    /**
     * When history comonent loads
     * run start component
     */
    getHeaderHistory() {
      this.startComponent();
    }
  },
  /**
   * Starts start component
   */
  mounted() {
    this.startComponent();
  },
  methods: {
    /**
     * Method gets history array items
     */
    startComponent() {
      this.items = _.uniq(JSON.parse(this.getHistory));
    }
  }
};
</script>
<style lang="scss" scoped>
.history {
  opacity: 0;
  transform: translateY(-300px);
  transition: 0.5s all linear;
  &-container {
    max-width: 1200px;
  }
  &-title {
    font-family: SF UI Display Medium;
    font-size: 36px;
    line-height: 43px;
    color: #ffffff;
    text-align: center;
    margin-bottom: 40px;
  }
  &-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: #fff;
    &__item {
      position: relative;
      font-size: 18px;
      margin-left: 20px;
      margin-top: 7px;
      cursor: pointer;
      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }
  &-empty {
    text-align: center;
    font-family: SF UI Display light;
    color: #fff;
    font-size: 18px;
  }
  &-active {
    opacity: 1;
    transform: translateY(-150px);
  }
  &-favorites {
    opacity: 1;
    transform: translateY(0);
    background: #000;
    padding-bottom: 40px;
    padding-top: 90px;
  }
}
</style>