<template>
  <button class="px-4 py-2 mx-2 font-semibold text-sm text-white rounded-full shadow-sm" :style="{backgroundColor: background}" @click="goToDetail(id)">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  props: {
    background: {
      type: String,
      default: '#FF0000'
    },
    label: {
      type: String,
      default: ''
    },
    id: {
      type: String,
      default: ''
    }
  },
  methods: {
    goToDetail (id) {
      this.$router.push(`/${id}`)
    }
  }
}
</script>
