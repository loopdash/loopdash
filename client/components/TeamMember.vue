<template>
  <div class="bg-gray-50 rounded-xl p-6 mb-1">
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-1">
        <img :src="name + '.png'" :alt="name" class="object-contain w-20 h-20">
      </div>
      <div class="col-span-5 flex flex-wrap flex-col self-center">
        <p class="block font-semibold mb-0 text-lg text-gray-800">
          {{ name.charAt(0).toUpperCase() + name.slice(1) }},
          <span class="text-gray-400">
            {{ position }}
          </span>
        </p>
        <p class="text-gray-500">
          {{ bio }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    position: {
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
