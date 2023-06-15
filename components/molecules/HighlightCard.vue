<template>
  <div class="flex items-center justify-center card-container mx-10">
    <HighlightCardPoster />
    <HighlightCardInformation />
  </div>
</template>

<script>
import HighlightCardInformation from '../atoms/HighlightCardInformation.vue'
import HighlightCardPoster from '../atoms/HighlightCardPoster.vue'

export default {
  name: 'HighlightCard',
  components: { HighlightCardPoster, HighlightCardInformation }
}
</script>

<style scoped>
  .card-container {
    height: 364px;
    width: 541px;
  }
</style>
