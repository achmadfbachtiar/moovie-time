<template>
  <div class="p-5 bg-neutral-950 relative information-container">
    <div class="information-container absolute top-0 left-0 overlay" />
    <div class="flex">
      <img src="@/assets/icons/star.svg" alt="" class="mr-1">
      <p class="bold text-white">
        7.3
      </p>
    </div>
    <div class="flex py-3">
      <p class="medium text-white text-3xl">
        Space Sweepers
      </p>
    </div>
    <div class="flex items-center">
      <p class="regular text-white">
        2021
      </p>
      <div class="rounded-full mx-2 round-separator" />
      <p class="regular text-white">
        Sci-Fi
      </p>
    </div>
    <div class="flex items-center pt-3">
      <p class="regular text-white text-xs">
        When the crew of a space junk collector ship called The Victory discovers a humanoid robot named Dorothy that's known to be a weapon of mass destruction, they get involved in a risky business deal which puts their lives at stake.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HighlightCardInformation'
}
</script>

<style scoped>
  .information-container {
    height: 324px;
    width: 299px;
  }
  .round-separator {
    height: 6px;
    width: 6px;
    background: #808080;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.3);
  }
</style>
