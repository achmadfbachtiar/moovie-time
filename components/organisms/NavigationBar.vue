<template>
  <nav class="fixed w-full z-20 top-0 left-0 z-50" :class="isTransparent === true ? 'transparent-5-percent' : 'solid'">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex grow pr-10">
        <img src="@/assets/images/moovie_time_logo.svg" class="mr-7 pointer" @click="() => { this.$router.replace('/') }">
        <div class="flex grow px-5 py-2 rounded-md items-center" style="background: #24282E;">
          <img src="@/assets/icons/take.svg" class="mr-3" alt="">
          <input
            type="text"
            class="focus:outline-none focus:ring-transparent caret-white text-white grow outline-none"
            style="background: #24282E;"
            placeholder="Find movie"
          >
          <img src="@/assets/icons/search.svg" alt="" style="height: 20px; width: auto;">
        </div>
      </div>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" /></svg>
      </button>
      <div id="navbar-default" class="hidden w-full md:block md:w-auto">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li class="pointer">
            <a id="dropdownDefaultButton" class="flex semi-bold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page" data-dropdown-toggle="dropdown">
              <img src="@/assets/icons/grid.svg" alt="" class="mr-2">
              CATEGORIES
            </a>
          </li>
          <li>
            <NuxtLink to="/content?category=movie">
              <p class="semi-bold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0">
                MOVIES
              </p>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/content?category=tv_shows">
              <p class="semi-bold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0">
                TV SHOWS
              </p>
            </NuxtLink>
          </li>
          <li>
            <a href="#" class="semi-bold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">
              LOGIN
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 relative z-20">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li v-for="(item, index) in categories" :key="index">
          <p class="regular text-black mx-3">
            {{ item.label }}
          </p>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    isTransparent: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      categories: [
        {
          label: 'ACTION',
          code: 'action'
        },
        {
          label: 'ADVENTURE',
          code: 'adventure'
        },
        {
          label: 'ANIMATION',
          code: 'animation'
        },
        {
          label: 'COMEDY',
          code: 'comedy'
        },
        {
          label: 'CRIME',
          code: 'crime'
        },
        {
          label: 'DOCUMENTARY',
          code: 'documentary'
        },
        {
          label: 'DRAMA',
          code: 'drama'
        },
        {
          label: 'FAMILY',
          code: 'family'
        },
        {
          label: 'FANTASY',
          code: 'fantasy'
        },
        {
          label: 'HISTORY',
          code: 'history'
        },
        {
          label: 'HORROR',
          code: 'horror'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .solid {
    background: #292E36
  }
  .transparent-5-percent {
    background: rgba(255, 255, 255, 0.25);
  }
</style>
