<template>
  <div class="max-w-screen py-10 relative" style="background-color: #1E232A;">
    <div class="max-w-screen-xl mx-auto p-4 relative z-10">
      <div class="flex items-center justify-between">
        <div class="flex">
          <SectionTitle :title="contentCategory === 'movie' ? 'MOVIES' : 'TV SHOWS'" />
        </div>
      </div>
      <div class="grid grid-cols-5 py-10 gap-10">
        <SortingCard />
        <div class="col-span-4">
          <div v-if="contentCategory === 'movie'" class="grid grid-cols-4 gap-10">
            <div v-for="(item, index) in movies" :key="index" class="col-auto">
              <ItemCard :item="item" />
            </div>
            <div class="col-span-4 flex items-center justify-center">
              <BaseButton label="Load More" />
            </div>
          </div>
          <div v-else class="grid grid-cols-4 gap-10">
            <div v-for="(item, index) in tvs" :key="index" class="col-auto">
              <ItemCard :item="item" />
            </div>
            <div class="col-span-4 flex items-center justify-center">
              <BaseButton label="Load More" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="absolute top-0 left-0 transparent-5-percent" style="width: 100%; height: 333px;" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BaseButton from '~/components/atoms/BaseButton.vue'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import ItemCard from '~/components/molecules/ItemCard.vue'
import SortingCard from '~/components/molecules/SortingCard.vue'

export default {
  name: 'ContentSection',
  components: { BaseButton, SectionTitle, ItemCard, SortingCard },
  computed: {
    contentCategory () {
      return this.$route.query.category
    },
    ...mapState('movies', [
      'movies',
      'tvs'
    ])
  },
  mounted () {
    if (this.contentCategory === 'movie') {
      this.$store.dispatch('movies/getList', 12)
    } else {
      this.$store.dispatch('movies/getListTV', 12)
    }
  },
  watch: {
    contentCategory (newState) {
      if (this.contentCategory === 'movie') {
        this.$store.dispatch('movies/getList', 12)
      } else {
        this.$store.dispatch('movies/getListTV', 12)
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
