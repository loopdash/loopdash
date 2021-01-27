<template>
  <div>
    <slot name="global-nav">
      <header class="flex-row site-header pa-5 align-center border-b border-gray-200">
        <nav>
          <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div class="relative flex items-center justify-between h-16">
              <div class="inset-y-0 left-0 flex items-center">
                <a href="/">
                  <svg
                    width="157px"
                    height="34px"
                    viewBox="0 0 633 129"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    >
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g id="Artboard" transform="translate(-12.000000, -13.000000)">
                        <text id="loopdash" font-family="SFMono-Semibold, SF Mono" font-size="100" font-weight="500" fill="#000000">
                          <tspan x="157.46875" y="124">loopdash</tspan>
                        </text>
                        <path
                          id="Oval"
                          d="M76.5,133 C107.151804,133 132,108.151804 132,77.5 C132,46.8481964 107.151804,22 76.5,22 C45.8481964,22 21,46.8481964 21,77.5 C21,108.151804 45.8481964,133 76.5,133 Z"
                          stroke="#1A57F2"
                          stroke-width="17"
                          stroke-linecap="round"
                          stroke-dasharray="29"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
              <div class="invisible md:visible lg:visible xl:visible flex-1 flex font-mono">
                <div class="invisible md:visible lg:visible xl:visible sm:ml-6">
                  <div class="flex space-x-4">
                    <a href="/about" class="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-blue-600">About</a>
                    <a href="/services/web-design-development" class="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-blue-600">Web Design</a>
                    <a href="/services/hosting" class="px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-blue-600">Hosting</a>
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
  methods: {
    handleMenuClick () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>
