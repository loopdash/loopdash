<template>
  <div>
    <slot name="footer">
      <footer class="px-4 md:px-8 py-24 max-w-4xl mb-24 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 flex justify-center items-center">
        <a href="/" title="Go to Loopdash" class="text-center font-semibold mx-auto mb-10 text-4xl text-brand-black dark:text-white max-w-sm">
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

          <div class="mt-6 text-sm text-gray-500  flex items-center justify-center">
            <span class="px-3">
              © <!-- -->2021<!-- --> Loopdash {{ averageUptime }}
            </span>
            •
            <div class="flex px-3 py-2">
              <span
                class="mr-1"
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
        </a>
      </footer>
    </slot>
  </div>
</template>

<script>
export default {
  async fetch () {
    const response = await fetch(
      'http://localhost:8080/api/get-server-status'
    ).then(res => res.json())
    this.averageUptime = `${response.data.averageUptime.toFixed(2)}%`
    this.isDown = response.data.isDown
  },
  data () {
    return {
      averageUptime: null,
      isDown: null
    }
  }
}
</script>
