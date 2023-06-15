<template>
  <div class="flex flex-col items-start justify-center pointer item-container">
    <div class="bg-red-300 flex items-center justify-center overflow-hidden bg-center bg-cover relative poster-container">
      <div class="flex items-center justify-center absolute top-0 right-0 rating-container">
        <p class="bold text-white text-md">
          {{ item.imDbRating }}
        </p>
      </div>
      <img :src="item.image" alt="" class="poster-image">
      <ItemCardHover :rating="item.imDbRating" :id="item.id" />
    </div>
    <p class="semi-bold text-white mt-3">
      {{ item.title }}
    </p>
    <p class="regular text-white text-sm">
      {{ item.year }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ItemCardHover from './ItemCardHover.vue'

export default {
  name: 'ItemCard',
  components: { ItemCardHover },
  computed: {
    ...mapState('movies', [
      'movie'
    ])
  },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  mounted () {
  }
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
    width: 100%;
  }
  .rating-container {
    height: 32px;
    width: 48px;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
