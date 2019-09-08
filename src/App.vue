<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/app/components/TheHeader";

export default {
  components: {
    Header
  }
}
</script>
