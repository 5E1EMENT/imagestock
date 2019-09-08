<template>
  <div class="loader">
    <img
      src="@/app/assets/photos/photos-loader.svg"
      alt="loading"
      class="loader-img"
    >
  </div>
</template>
<style lang="scss" scoped>
.loader {
    display: block;
    text-align: center;
    position: relative;
    margin-top: 50px;
    img {
      text-align: center;
      animation: spin 2s linear infinite;
    }
}

/* Loader spin animation */
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>