<template>
  <div>
    <slot name="hero">
      <section class="container mx-auto px-4 pt-20 pb-24">
        <div class="mb-8 text-center mx-auto max-w-3xl pt-4">
          <h1 class="text-base text-blue-500 font-semibold tracking-wide uppercase font-mono">
            {{ title }}
          </h1>
          <h2 class="mt-2 leading-12 font-bold tracking-tight text-4xl md:text-5xl mb-4">
            {{ heading }}
          </h2>
          <p class="text-xl md:text-lg lg:text-xl xl:text-2xl text-grey-dark leading-normal text-gray-500 lg:mx-auto">
            {{ lead }}
          </p>
        </div>

        <div v-if="show == true" class="mb-8 flex flex-center justify-center">
          <div class="flex justify-center items-center w-full max-w-lg">
            <Form />
          </div>
        </div>

        <div v-if="show == true" class="mx-auto mb-6 md:mb-2 max-w-2xl">
          <carousel :per-page="1">
            <slide>
              <img :src="'peak.png'" alt="" class="shadow-lg rounded-lg">
            </slide>
            <slide>
              <img :src="'instil-website.png'" alt="" class="shadow-lg rounded-lg">
            </slide>
            <slide>
              <img :src="'sixth-city-website.png'" alt="" class="shadow-lg rounded-lg">
            </slide>
            <slide>
              <img :src="'perfect-fit-website.png'" alt="" class="shadow-lg rounded-lg">
            </slide>
            <slide>
              <img :src="'mps-intel-application.png'" alt="" class="shadow-lg rounded-lg">
            </slide>
          </carousel>
        </div>

        <div v-if="show == true" class="markdown text-lg mt-6 text-center md:text-left flex justify-center">
          <div class="flex items-center border-r-2 border-gray-200 pr-3">
            ⭐️⭐️⭐️⭐️⭐️
          </div>
          <p class="pl-3">
            <span class="font-bold">Rated 5 stars</span> by over <span class="font-bold text-blue-500">9 customers</span>
          </p>
        </div>
      </section>
    </slot>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
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
    },
    show: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    images () {
      const images = [
        'mps-intel-application.png',
        'instil-website.png',
        'sixth-city-website.png',
        'perfect-fit-website.png',
        'peak.png'
      ]
      return images[Math.floor(Math.random() * images.length)]
    }
  }
}
</script>
