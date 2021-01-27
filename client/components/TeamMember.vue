<template>
  <div class="bg-gray-100 rounded-xl p-6 mb-1">
    <div class="flex flex-rows items-center justify-center">
      <img :src="file" alt="" class="w-20 h-20 p-1">
      <div class="ml-6">
        <span class="block font-semibold mb-0 text-lg text-gray-700">
          {{ name }}
        </span>
        <span class="text-gray-500">
          {{ bio }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    file: {
      type: String,
      required: true,
      default: null
    },
    name: {
      type: String,
      required: true,
      default: null
    },
    bio: {
      type: String,
      required: true,
      default: null
    }
  }
}
</script>
