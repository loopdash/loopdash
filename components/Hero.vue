<template>
  <section>
    <div class="py-16 px-3 mb-10">
      <div class="max-w-4xl mx-auto text-center lg:pt-10 lg:pb-24 px-4 sm:px-6 lg:px-8 p-4">
        <h1 class="text-base text-blue-500 font-semibold tracking-wide uppercase">
          {{ hero.title }} {{ averageUptime }}
        </h1>
        <h2 class="mt-2 leading-12 font-extrabold tracking-tight text-5xl">
          {{ hero.heading }}
        </h2>
        <p class="mt-4 text-xl text-gray-500 lg:mx-auto">
          {{ hero.lead }}
        </p>

        <div class="mt-5 sm:mt-8 sm:flex justify-center">
          <div class="rounded-md shadow mb-3">
            <a href="/form" class="w-full flex items-center justify-center px-8 py-2 border-2 border-blue-600 text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 py-3 md:text-lg transition-all">
              Our process
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    hero: {
      type: Object,
      required: true,
      default: null
    }
  },
  async fetch () {
    const response = await fetch(
      'http://localhost:8080/api/get-server-status'
    ).then(res => res.json())
    this.averageUptime = `${response.data.averageUptime.toFixed(2)}%`
  },
  data () {
    return {
      averageUptime: null
    }
  }
}
</script>
