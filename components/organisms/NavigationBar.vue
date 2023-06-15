<template>
  <nav class="border-gray-200 dark:bg-gray-900" style="background: #292E35;">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex grow pr-10">
        <img src="@/assets/images/moovie_time_logo.svg" class="mr-7">
        <div class="flex grow px-5 py-2 rounded-md" style="background: #24282E;">
          <img src="@/assets/icons/take.svg" class="mr-3" alt="">
          <input
            type="text"
            class="dark:focus:outline-none caret-white text-white grow"
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
          <li>
            <a href="#" class="flex semi-bold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page" id="dropdownDefaultButton" data-dropdown-toggle="dropdown">
              <img src="@/assets/icons/grid.svg" alt="" class="mr-2">
              CATEGORIES
            </a>
          </li>
          <li>
            <a href="#" class="semi-bold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">
              MOVIES
            </a>
          </li>
          <li>
            <a href="#" class="semi-bold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">
              TV SHOWS
            </a>
          </li>
          <li>
            <a href="#" class="semi-bold block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:p-0" aria-current="page">
              LOGIN
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
        </li>
        <li>
          <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar'
}
</script>
