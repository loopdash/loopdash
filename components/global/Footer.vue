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
          <div
            class="mt-6 text-sm  flex items-center justify-center"
          >
            <div
              class="flex px-3 py-1 font-mono items-center mr-3 pl-0 text-sm rounded-md"
              :class="{
                'bg-yellow-100 text-yellow-800': response.data.isDown,
                'bg-green-100 text-green-800': !response.data.isDown
              }"
            >
              <span class="mb-4 mx-4">
                <span class="flex absolute h-2 w-2 mt-1">
                  <span
                    :class="{
                      'bg-yellow-500 animate-ping': response.data.isDown,
                      'bg-green-500 animate-ping': !response.data.isDown
                    }"
                    class="absolute inline-flex h-full w-full rounded-full  opacity-75"
                  />
                  <span
                    :class="{
                      'bg-yellow-600': response.data.isDown,
                      'bg-green-600': !response.data.isDown
                    }"
                    class="relative inline-flex rounded-full h-2 w-2"
                  />
                </span>
              </span>

              <span>{{ response.data.message }}</span>
            </div>
          </div>
        </a>
      </footer>
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    response: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>
