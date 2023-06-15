<template>
  <div class="max-w-screen py-10" style="background-color: #1E232A;">
    <vueper-slides
      class="no-shadow"
      :visible-slides="3"
      :slide-ratio="1 / 4"
      :arrows="false"
      autoplay
      :duration="5000"
      :gap="10"
    >
      <vueper-slide
        v-for="(item, i) in highlight"
        :key="i"
      >
        <template #content>
          <HighlightCard :item="item" />
        </template>
      </vueper-slide>
      <template #bullets="{ bulletIndexes, goToSlide, currentSlide }">
        <div
          v-for="(slideIndex, index) in bulletIndexes"
          :key="index"
          class="bg-gray-300 rounded-full mx-1"
          :class="{'active': currentSlide === slideIndex}"
          role="tab"
          :aria-label="`Slide ${i + 1}`"
          style="height: 12px; width: 12px;"
          @click="goToSlide(slideIndex)"
        />
      </template>
    </vueper-slides>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import HighlightCard from '~/components/molecules/HighlightCard.vue'

export default {
  name: 'BannerCarousel',
  components: { VueperSlides, VueperSlide, HighlightCard },
  computed: {
    ...mapState('movies', [
      'highlight'
    ])
  }
}
</script>

<style scoped>
  .active {
    width: 60px !important;
    background: #E74C3C;
  }
</style>
