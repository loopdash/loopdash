<template>
  <div class="w-full md:w-1/3 md:px-4 mb-10 md:mb-7">
    <div class="flex items-center mb-4">
      <img class="h-12 w-12 rounded-full object-cover" :src="`${image}`" alt="">
      <div class="pl-4">
        <p class="text-md">
          <span class="font-extrabold">
            {{ name }},&nbsp;
          </span>
          <span class="font-bold text-blue-400">
            {{ position }}
          </span>
        </p>
        <div class="flex">
          ⭐️⭐️⭐️⭐️⭐️
        </div>
      </div>
    </div>
    <p class="text-gray-500 text-md">
      {{ testimonial }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
      default: null
    },
    position: {
      type: String,
      required: true,
      default: null
    },
    testimonial: {
      type: String,
      required: true,
      default: null
    },
    image: {
      type: String,
      required: true,
      default: null
    }
  }
}
</script>
