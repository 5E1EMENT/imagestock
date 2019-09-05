<template>
  <header
    ref="headerWrapper"
    class="header-wrapper"
  >
    <b-container class="header-container">
      <Navbar />
      <Search />
    </b-container>
  </header>
</template>

<style lang="scss" scoped>
.header {
  &-wrapper {
    background-color: #000;
    color: #fff;
    padding: 90px 0;
    height: 369px;
  }
  &-container {
    max-width: 1478px;
    padding: 0;
  }
}
</style>
<script>
import Navbar from './HomePageNavbar'
import Search from './HomePageSearch'
export default {
  components: {
    Navbar,
    Search
  }
}
</script>