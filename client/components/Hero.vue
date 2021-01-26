<template>
  <section class="relative container mx-auto px-8 pt-8 pb-20 max-w-7xl">
    <div class="relative flex flex-wrap flex-col md:flex-row lg:items-center -mx-8 pt-16 pb-21">
      <div class="md:w-1/2 px-8">
        <div class="mb-4 text-center md:text-left">
          <h1 class="text-base text-blue-500 font-semibold tracking-wide uppercase font-mono">
            {{ title }}
          </h1>
          <h2 class="mt-2 leading-12 font-bold tracking-tight text-5xl mb-6">
            {{ heading }}
          </h2>
          <p class="text-xl md:text-lg lg:text-xl xl:text-2xl text-grey-dark leading-normal text-gray-500 lg:mx-auto">
            {{ lead }}
          </p>
        </div>

        <div class="md:hidden px-8 pt-2 mb-6 md:mb-2">
          <div class="shadow-lg">
            <img src="/mps-screenshot.png" alt="">
          </div>
        </div>

        <Form />

        <div class="markdown text-lg mt-6 text-center md:text-left flex justify-center md:justify-start">
          <div class="flex items-center border-r-2 border-gray-200 pr-3">
            <StarIcon size="16" class="text-yellow-400" />
            <StarIcon size="16" class="text-yellow-400" />
            <StarIcon size="16" class="text-yellow-400" />
            <StarIcon size="16" class="text-yellow-400" />
            <StarIcon size="16" class="text-yellow-400" />
          </div>
          <p class="pl-3">
            <span class="font-bold">Rated 5 stars</span> by over <span class="font-bold text-blue-500">9 customers</span>
          </p>
        </div>
      </div>
      <div class="hidden md:block md:w-1/2 px-8 pt-2 lg:pt-16">
        <div class="shadow-lg">
          <img src="/mps-screenshot.png" alt="">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { StarIcon } from 'vue-feather-icons'

export default {
  components: { StarIcon },
  props: {
    title: {
      type: String,
      required: true,
      default: null
    },
    heading: {
      type: String,
      required: true,
      default: null
    },
    lead: {
      type: String,
      required: true,
      default: null
    }
  }
}
</script>
