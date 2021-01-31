<template>
  <div class="bg-gray-50 rounded-xl p-6 mb-1">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-3 md:col-span-2">
        <img
          :src="'/' + name + '.png'"
          :alt="'a memoji of' + name"
          class="object-contain w-24 h-24"
        >
      </div>
      <div
        class="col-span-9 md:col-span-10 flex flex-wrap flex-col self-center"
      >
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
