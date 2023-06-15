<template>
  <div class="flex flex-col items-start justify-center pointer item-container">
    <div class="bg-red-300 flex items-center justify-center overflow-hidden bg-center bg-cover relative poster-container">
      <div class="flex items-center justify-center absolute top-0 right-0 rating-container">
        <p class="bold text-white text-md">
          7.0
        </p>
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/en/0/05/Space_Sweepers.jpg" alt="" class="poster-image">
    </div>
    <p class="semi-bold text-white mt-3">
      Wonder Woman 1984
    </p>
    <p class="regular text-white text-sm">
      2020
    </p>
  </div>
</template>

<script>

export default {
  name: 'HighlightCard',
  props: {}
}
</script>

<style scoped>
  .item-container {
    width: 220px;
  }
  .poster-container {
    height: 330px;
    width: 220px;
  }
  .poster-image {
    height: 100%;
    width: auto;
  }
  .rating-container {
    height: 32px;
    width: 48px;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
