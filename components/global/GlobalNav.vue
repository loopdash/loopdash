<template>
  <div>
    <slot name="global-nav">
      <header class="flex-row site-header pa-5 align-center border-b border-gray-200">
        <nav>
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="inset-y-0 left-0 flex items-center">
                <a href="/" class="font-mono font-bold">
                  Loopdash
                </a>
              </div>
              <div class="invisible md:visible lg:visible xl:visible flex-1 flex-end flex font-mono">
                <div class="invisible md:visible lg:visible xl:visible sm:ml-6">
                  <div class="flex space-x-4">
                    <a href="/about" class="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-blue-600">About</a>
                    <a href="/services" class="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-blue-600">Services</a>
                  </div>
                </div>
              </div>
              <button
                class="btn items-center justify-center text-lg font-semibold flex self-center cursor-pointer visible h-10 w-10 sm:visible md:invisible hover:text-gray-800 text-gray-400 bg-gray-200 border-1 border-gray-300 rounded-md"
                @click.prevent="handleMenuClick"
              >
                <MenuIcon v-if="!showMenu" />
                <XIcon v-else />
              </button>
            </div>
            <div
              :class="{ 'hidden': !showMenu, '': showMenu }"
            >
              <div class="px-2 pt-2 pb-3 space-y-1 font-mono">
                <a href="/about" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500">About</a>
                <a href="/services" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-500">Services</a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </slot>
  </div>
</template>

<script>
import { MenuIcon, XIcon } from 'vue-feather-icons'

export default {
  components: { MenuIcon, XIcon },
  data () {
    return {
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
