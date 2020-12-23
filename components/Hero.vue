<template>
  <section>
    <div class="py-16 px-3 mb-10">
      <div class="max-w-3xl text-center mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 p-4">
        <h1 class="text-base text-blue-500 font-semibold tracking-wide uppercase">
          {{ hero.title }}
        </h1>
        <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
          {{ hero.heading }}
        </h2>
        <p class="mt-4 text-xl text-gray-500 lg:mx-auto">
          {{ hero.lead }}
        </p>

        <div class="mt-5 sm:mt-8 sm:flex sm:justify-start lg:justify-center">
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
  }
}
</script>
