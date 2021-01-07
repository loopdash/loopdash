<template>
  <section>
    <slot name="global-nav">
      <div class="bg-gray-100 py-8 px-3 mb-10">
        <div class="max-w-4xl mx-auto text-center lg:pt-10 px-4 sm:px-6 lg:px-8 p-4">
          <h1 class="text-base text-blue-500 font-semibold tracking-wide uppercase font-mono">
            {{ title }}
          </h1>
          <h2 class="text-blue-600 mt-2 leading-12 font-extrabold tracking-tight text-5xl">
            {{ heading }}
          </h2>
          <p class="text-blue-500 mt-4 text-xl  lg:mx-auto">
            {{ lead }}
          </p>
        </div>
      </div>
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
