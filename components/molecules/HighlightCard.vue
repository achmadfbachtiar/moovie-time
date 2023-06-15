<template>
  <div class="flex items-center justify-center card-container mx-10" @click="goToDetail(item.id)">
    <HighlightCardPoster :img="item.image" />
    <HighlightCardInformation :item="item" />
  </div>
</template>

<script>
import HighlightCardInformation from '../atoms/HighlightCardInformation.vue'
import HighlightCardPoster from '../atoms/HighlightCardPoster.vue'

export default {
  name: 'HighlightCard',
  components: { HighlightCardPoster, HighlightCardInformation },
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    goToDetail (id) {
      this.$router.push(`/${id}`)
    }
  }
}
</script>

<style scoped>
  .card-container {
    height: 364px;
    width: 541px;
  }
</style>
