<template>
  <div class="max-w-screen py-10 relative" style="background-color: #1E232A;">
    <div class="max-w-screen-xl mx-auto p-4 relative z-10">
      <div class="flex items-center justify-between">
        <div class="flex">
          <SectionTitle title="Discover Movies" />
        </div>
        <div class="flex jutify-end">
          <BaseButton label="Popularity" />
          <BaseButton label="Release Date" background="#21252A" />
        </div>
      </div>
      <div class="grid grid-cols-5 py-10 gap-10">
        <div v-for="(item, index) in 10" class="col-auto" :key="index">
          <ItemCard />
        </div>
      </div>
    </div>
    <div class="absolute top-0 left-0" style="width: 100%; height: 333px; background-color: #292E35;"></div>
  </div>
</template>

<script>
import BaseButton from '~/components/atoms/BaseButton.vue'
import SectionTitle from '~/components/atoms/SectionTitle.vue'
import ItemCard from '~/components/molecules/ItemCard.vue'

export default {
  name: 'DiscoverSection',
  components: { BaseButton, SectionTitle, ItemCard }
}
</script>

<style scoped>
  .active {
    width: 60px !important;
    background: #E74C3C;
  }
</style>
