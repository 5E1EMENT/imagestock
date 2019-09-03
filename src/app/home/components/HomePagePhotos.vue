<template>
  <div class="photos-wrapper">
    <b-container class="photos-container">
      <ul class="photos-buttons">
        <li class="photos-buttons__item order">
          <img
            src="@/app/assets/photos/photos-btn__order.svg"
            alt
            class="photos-button"
          >
        </li>
        <li class="photos-buttons__item decompose">
          <img
            src="@/app/assets/photos/photos-btn__decompose.svg"
            alt
            class="photos-button"
          >
        </li>
      </ul>
      <div class="photos-container__img">
        <ul class="photos-img__list">
          <li
            v-for="image of images"
            :key="image.id"
            class="photos-img__item"
          >
            <img
              :src="image.urls.small"
              alt="image"
              class="photos-img__picture"
            >
          </li>
        </ul>
      </div>
    </b-container>
  </div>
</template>
<script>
import { setTimeout } from "timers";
import { mapActions } from "vuex";

export default {
  data: () => ({
    images: [],
    imgUrl: ""
  }),
  async mounted() {
    const photos = await this.$unsplash.photos.listPhotos();
    const photosArr = await photos.json();
    this.images = photosArr;
    console.log(this.images[0]);
  }
};
</script>
<style lang="scss" scoped>
.photos {
  &-buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    margin: 0;
    margin-bottom: 72px;
    &__item {
      margin: 0 10px;
      cursor: pointer;
    }
  }
  &-wrapper {
    background-color: #fff;
    padding: 77px 0;
  }
  &-container {
    max-width: 1478px;
  }
  &-img {
    &__list {
      display: grid;
      grid-gap: 27px;
      grid-template-columns: 1fr 1fr 1fr;
      list-style-type: none;
    }
    &__picture {
      border-radius: 5px;
      width: 100%;
    }
  }
}
</style>