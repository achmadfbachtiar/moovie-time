<template>
  <div class="flex flex-col bg-gray-200 p-5" style="height: 284px; width: 100%; border-radius: 14px;">
    <div class="flex justify-between w-full">
      <div class="flex" style="max-height: 48px;">
        <div class="rounded-full bg-gray-300" style="height: 48px; width: 48px;" />
        <div class="flex flex-col justify-center ml-3">
          <p class="bold text-slate-900 text-sm">
            Nama
          </p>
          <p class="regular text-slate-900 text-xs">
            December 18, 2020
          </p>
        </div>
      </div>
      <div class="flex items-center justify-center px-3 bg-gray-300" style="height: 52px; border-radius: 7px;">
        <img src="@/assets/icons/star.svg" alt="" class="mr-1" style="margin-top: -13px;">
        <p class="semi-bold text-slate-900 text-3xl m-0">
          8.0
        </p>
      </div>
    </div>
    <p class="regular text-sm mt-5 italic">
      It isn't as easy as saying 'Wonder Woman 1984' is a good or bad movie. The pieces are there, and there are moments I adore, but it does come across as a bit of a mess, even though the action sequences are breathtaking. If you're a fan of the original film, you'll be more willing to take the ride, but for those more indifferent, it may be a bit of a blander sit. If you can and are planning to watch it, the theatrical experience is the way to go - there is nothing like seeing these stunning sets, fun action scenes and hearing Zimmer's jaw-dropping score like on the big screen.
    </p>
  </div>
</template>

<script>

export default {
  name: 'ReviewCard',
  props: {}
}
</script>

<style scoped>
</style>
