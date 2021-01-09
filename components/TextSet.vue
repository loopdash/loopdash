<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 v-if="h2" class="text-base text-blue-600 font-semibold tracking-wide uppercase font-mono">
        {{ h2 }}
      </h2>
      <h3 v-if="h3" class="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
        {{ h3 }}
      </h3>

      <p v-if="p" class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        {{ p }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    h2: {
      type: String,
      required: false,
      default: null
    },
    h3: {
      type: String,
      required: false,
      default: null
    },
    p: {
      type: String,
      required: false,
      default: null
    }
  }
}
</script>
