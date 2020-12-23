<template>
  <div class="mb-10">
    <h6 class="font-extrabold text-gray-700 text-lg mb-2">
      {{ question }}
    </h6>
    <p class="text-gray-500 text-lg">
      {{ answer }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
      required: true,
      default: null
    },
    answer: {
      type: String,
      required: true,
      default: null
    }
  }
}
</script>
