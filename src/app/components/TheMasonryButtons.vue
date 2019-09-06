<template>
  <ul
    id="photos-buttons"
    class="photos-buttons"
  >
    <li class="photos-buttons__item">
      <img
        src="@/app/assets/photos/photos-btn__order.svg"
        alt
        class="photos-button order"
      >
    </li>
    <li class="photos-buttons__item">
      <img
        src="@/app/assets/photos/photos-btn__decompose.svg"
        alt
        class="photos-button decompose"
      >
    </li>
  </ul>
</template>
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
    }
  }
}

/* Inver photos decompose btn color */
.decompose {
  filter: invert(100%);
}

/* Media queries*/
@media only screen and (max-width: 540px) {
  .decompose {
    filter: invert(0%);
  }
  .order {
    filter: invert(100%);
  }
}
</style>