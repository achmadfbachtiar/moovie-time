<template>
  <div class="col-span-1">
    <div style="border-radius: 8px; background: #0E1723; width: 100%;">
      <div class="border-b border-solid border-gray-400">
        <p class="p-5 semi-bold text-white">
          Sort Result By
        </p>
      </div>
      <div class="border-b border-solid border-gray-400">
        <div class="p-5">
          <div id="sortDropdownButton" class="p-3 flex items-center justify-between" style="background: #29313C; border-radius: 4px;" data-dropdown-toggle="sort-dropdown">
            <p class="regular text-white text-sm">
              Popularity
            </p>
            <img src="@/assets/icons/down.svg" alt="">
          </div>
          <div id="sort-dropdown" class="z-10 hidden bg-black divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li v-for="(item, index) in sorts" :key="index">
                <p class="regular text-white mx-3">
                  {{ item.label }}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="border-b border-solid border-gray-400">
        <p class="p-5 semi-bold text-white">
          Genres
        </p>
      </div>
      <div>
        <div class="p-5">
          <div v-for="(item, index) in categories" :key="index" class="p-3 flex items-center justify-between">
            <p class="regular text-white text-sm">
              {{ item.label }}
            </p>
            <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-red-500 bg-gray-100 border-gray-300 rounded focus:ring-red-500 focus:ring-1">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SortingCard',
  props: {},
  data () {
    return {
      sorts: [
        {
          label: 'Popularity Ascending',
          code: 'p-asc'
        },
        {
          label: 'Popularity Descending',
          code: 'p-desc'
        },
        {
          label: 'Release Date Ascending',
          code: 'd-asc'
        },
        {
          label: 'Release Date Descending',
          code: 'd-desc'
        },
        {
          label: 'Rating Ascending',
          code: 'r-asc'
        },
        {
          label: 'Rating Descending',
          code: 'r-dsc'
        }
      ],
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
</style>
