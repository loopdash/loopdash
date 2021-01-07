<template>
  <div class="w-full md:w-1/3 px-3 mb-6">
    <div class="p-8 bg-white shadow rounded-lg">
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
            <StarIcon size="16" class="text-yellow-400" />
            <StarIcon size="16" class="text-yellow-400" />
            <StarIcon size="16" class="text-yellow-400" />
            <StarIcon size="16" class="text-yellow-400" />
            <StarIcon size="16" class="text-yellow-400" />
          </div>
        </div>
      </div>
      <p class="text-gray-500 text-md">
        {{ testimonial }}
      </p>
    </div>
  </div>
</template>

<script>
import { StarIcon } from 'vue-feather-icons'

export default {
  components: { StarIcon },
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
