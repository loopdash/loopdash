<template>
  <div>
    <slot name="footer">
      <footer
        class="px-4 md:px-8 py-24 max-w-4xl mb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex justify-center items-center"
      >
        <a
          href="/"
          title="Go to Loopdash"
          class="text-center font-semibold mx-auto mb-10 text-4xl
          text-brand-black dark:text-white max-w-md"
        >
          Loopdash
          <!-- <svg
            width="315px"
            height="68px"
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
          </svg> -->

          <div
            class="mt-6 text-sm text-gray-500  flex items-center justify-center"
          >
            <p v-if="$fetchState.pending">Fetching mountains...</p>
            <p v-else-if="$fetchState.error">An error occurred :(</p>
            <div
              class="flex px-3 py-1 bg-green-100 font-mono text-green-700
            items-center mr-3 pl-0 text-sm rounded-md"
            >
              <span class="mb-4 mx-4">
                <span class="flex absolute h-2 w-2 mt-1">
                  <span
                    :class="{
                      'bg-red-400': isDown,
                      'bg-green-400 animate-ping': !isDown
                    }"
                    class="absolute inline-flex h-full w-full rounded-full  opacity-75"
                  />
                  <span
                    :class="{
                      'bg-red-600': isDown,
                      'bg-green-600': !isDown
                    }"
                    class="relative inline-flex rounded-full h-2 w-2"
                  />
                </span>
              </span>

              <span>{{ message }}</span>
            </div>
          </div>
        </a>
      </footer>
    </slot>
  </div>
</template>

<script>
export default {
  mounted () {
    const response = await fetch(
      'https://api.loopdash.com/api/get-server-status'
    ).then(res => res.json())
    this.isDown = response.data.isDown
    this.message = response.data.message
  },
  data () {
    return {
      averageUptime: 'nullasdf',
      isDown: null,
      message: null
    }
  }
}
</script>
