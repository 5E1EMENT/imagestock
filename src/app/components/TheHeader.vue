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


<script>
import Navbar from './TheNavbar'
import Search from './TheSearch'
export default {
  components: {
    Navbar,
    Search
  },
  data: () => ({
    collection: null
  })
}
</script>

<style lang="scss" scoped>
.header {
  &-wrapper {
    background-color: #000;
    color: #fff;
    padding-top: 40px;
    padding-bottom: 90px;
    height: 369px;
  }
  &-container {
    max-width: 1478px;
    padding: 0;
  }
}
</style>