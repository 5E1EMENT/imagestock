<template>
  <div>
    <Photos />
  </div>
</template>
<script>
import Header from "@/app/components/TheHeader";
import Photos from "./components/HomePagePhotos";
export default {
  components: {
    Photos
  },
  metaInfo: {
      title: 'Image Stock'
    }
};
</script>
<style scoped>
</style>