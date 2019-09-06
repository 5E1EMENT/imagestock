<template>
  <div>
    <Navbar />
    <div
      id="favorites-wrapper"
      class="favorites-wrapper"
    >
      <b-container class="favorites-container">
        <Masonry />
      </b-container>
    </div>
  </div>
</template>
<script>
import Header from "@/app/components/TheHeader";
import Navbar from "@/app/components/TheNavbar";
import Masonry from "@/app/components/TheMasonry.vue";

export default {
  components: {
    Navbar,
    Masonry
  }
};
</script>
<style lang="scss" scoped>
.favorites {
    &-wrapper {
    background-color: #fff;
    padding: 77px 0;
  }
  &-container {
    max-width: 1478px;
    position: relative;
  }
}
</style>