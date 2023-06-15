<template>
  <div>
    <div style="height: 6px; width: 112px; background: #E74C3C;" />
    <p class="semi-bold text-white text-2xl">
      {{ title }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'SectionTitle',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>
</style>
