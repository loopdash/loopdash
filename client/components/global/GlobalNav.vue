<template>
  <div>
    <slot name="global-nav">
      <header class="flex-row site-header pa-5 align-center border-b border-gray-200">
        <nav>
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="inset-y-0 left-0 flex items-center">
                <a href="/" class="font-mono mono">Loopdash</a>
              </div>
              <div class="invisible md:visible lg:visible xl:visible flex-1 flex font-mono">
                <div class="invisible md:visible lg:visible xl:visible sm:ml-6">
                  <div class="flex space-x-4">
                    <a href="/about" class="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-blue-600">About</a>
                    <a href="/services/web-design-development" class="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-blue-600">Web Design</a>
                    <a href="/services/hosting" class="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-blue-600">Hosting</a>
                    <div class="flex px-3 py-2">
                      <span
                        class="mr-1 text-sm font-medium text-gray-400"
                      >Status</span>
                      <span>
                        <span class="flex absolute h-2 w-2 mt-1">
                          <span
                            :class="{ 'bg-red-400': isDown,'bg-green-400 animate-ping': !isDown}"
                            class="absolute inline-flex h-full w-full rounded-full  opacity-75"
                          />
                          <span
                            :class="{ 'bg-red-600': isDown, 'bg-green-600': !isDown}"
                            class="relative inline-flex rounded-full h-2 w-2"
                          />
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <MenuIcon class="visible sm:visible md:invisible hover:text-blue-500 text-gray-600" @click.prevent="handleMenuClick" />
            </div>
          </div>
          <div
            :class="{ 'hidden': !showMenu, '': showMenu }"
          >
            <div class="px-2 pt-2 pb-3 space-y-1 font-mono">
              <a href="/about" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-900">About</a>
              <a href="/services/web-design-development" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-blue-700">Web Design</a>
              <a href="/services/hosting" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-blue-700">Hosting</a>
              <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-blue-700">Calendar</a>
            </div>
          </div>
        </nav>
      </header>
    </slot>
  </div>
</template>

<script>
import { MenuIcon } from 'vue-feather-icons'

export default {
  components: { MenuIcon },
  async fetch () {
    const response = await fetch(
      'http://localhost:8080/api/get-server-status'
    ).then(res => res.json())
    this.isDown = response.data.isDown
  },
  data () {
    return {
      isDown: null,
      showMenu: false
    }
  },
  methods: {
    handleMenuClick () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
