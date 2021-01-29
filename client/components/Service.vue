<template>
  <div class="bg-gray-50 rounded-xl p-6 mb-1">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-3 md:col-span-2">
        {{ icon }}
        <img :src="name + '.png'" :alt="name" class="object-contain w-20 h-20">
      </div>
      <div class="col-span-9 md:col-span-10 flex flex-wrap flex-col self-center">
        <p class="block font-semibold mb-0 text-lg text-gray-800">
          {{ name }}
        </p>
        <p class="text-gray-500">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
      default: null
    },
    name: {
      type: String,
      required: true,
      default: null
    },
    description: {
      type: String,
      required: true,
      default: null
    }
  }
}
</script>
