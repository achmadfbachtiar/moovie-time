<template>
  <div class="max-w-screen py-10 relative">
    <div class="max-w-screen-xl mx-auto p-4 relative z-10">
      <div class="flex items-center justify-between">
        <div class="flex">
          <p class="medium text-white">
            RECOMMENDATION MOVIES
          </p>
        </div>
      </div>
      <div class="grid grid-cols-5 py-10 gap-10">
        <div v-for="(item, index) in similars.slice(0, 5)" :key="index" class="col-auto">
          <ItemCard :item="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ItemCard from '~/components/molecules/ItemCard.vue'

export default {
  name: 'RecommendationSection',
  components: { ItemCard },
  props: {
    similars: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .active {
    width: 60px !important;
    background: #E74C3C;
  }
</style>
