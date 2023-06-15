<template>
  <div class="max-w-screen py-10 relative" style="background-color: #15191E;">
    <div class="max-w-screen-xl mx-auto p-4">
      <div class="grid grid-cols-3">
        <div class="col-auto flex items-center">
          <p class="regular text-gray-500">
            ©  2021 MoovieTime. All rights reserved.
          </p>
        </div>
        <div class="col-auto flex items-center justify-center">
          <img src="@/assets/images/moovie_time_logo_grey.svg" alt="">
        </div>
        <div class="col-auto flex items-center justify-end">
          <p class="regular text-gray-500">
          Made with Nuxt
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>

<style scoped>
  .card-container {
    height: 364px;
    width: 541px;
  }
</style>
