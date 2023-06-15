<template>
  <div class="absolute top-0 left-0 bg-black flex flex-col items-center justify-center poster-container transition-opacity duration-400 ease-in opacity-0 hover:opacity-100">
    <div class="flex items-center justify-center">
      <img src="@/assets/icons/star.svg" alt="" class="mr-2 star">
      <p class="semi-bold text-white text-xl">
        {{ rating }}
      </p>
    </div>
    <div class="flex items-center justify-center my-10">
      <p class="semi-bold text-white text-xl">
        {{ genre }}
      </p>
    </div>
    <div class="flex items-center justify-center z-50">
      <BaseButton label="View" :id="id" />
    </div>
  </div>
</template>

<script>
import BaseButton from '../atoms/BaseButton.vue'

export default {
  name: 'ItemCardHover',
  components: { BaseButton },
  props: {
    genre: {
      type: String,
      default: 'GENRE'
    },
    rating: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
  .star {
    height: 32px;
    width: 32px;
  }
</style>
