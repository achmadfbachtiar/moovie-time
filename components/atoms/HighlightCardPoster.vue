<template>
  <div class="bg-slate-100 flex items-center justify-center overflow-hidden bg-center bg-cover relative poster-container">
    <div class="poster-container absolute top-0 left-0" />
    <img :src="img" alt="" class="poster-image">
  </div>
</template>

<script>
export default {
  name: 'HighlightCardPoster',
  props: {
    img: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .poster-container {
    height: 364px;
    width: 243px;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .poster-image {
    height: 100%;
    width: auto;
  }
</style>
