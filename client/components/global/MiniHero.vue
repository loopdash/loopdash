<template>
  <section>
    <slot name="mini-hero" class="pb-18 max-w-7xl mx-auto lg:text-center mb-8">
      <h2 v-if="title" class="text-base text-blue-600 font-semibold tracking-wide uppercase font-mono">
        {{ title }}
      </h2>

      <h3 v-if="heading" class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        {{ heading }}
      </h3>

      <p v-if="lead" class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        {{ lead }}
      </p>
    </slot>
  </section>
</template>

<script>
export default {
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
