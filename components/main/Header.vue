<template>
  <nav class="bg-white border-gray-200 dark:bg-gray-900">

      <div class="max-w-screen-xl flex  items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><circle cx="6" cy="18" r="3" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><circle cx="18" cy="17" r="3" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/><path fill="currentColor" d="M21 3L9 6v4l12-3z"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 18v-8m12 7V7M9 10V6l12-3v4M9 10l12-3"/></g></svg>
          <span  class="hidden md:block self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Song Verse Hub</span>
        </a>
        <MainSearch/>
        <div class="flex">
          <ul class="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>
                  Lang
                </summary>
                <MainLanguageSelector />
              </details>
            </li>
          </ul>
       </div>
    </div>
  </nav>



</template>