<template>
  <div>
    <div class="flex-shrink-0 mb-4">
      <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-700 to-blue-500 text-white">
        <ClockIcon />
      </div>
    </div>
    <dt class="text-lg leading-6 font-medium text-gray-900">
      {{ feature.title }}
    </dt>
    <dd class="mt-2 text-base text-gray-500">
      {{ feature.description }}
    </dd>
  </div>
</template>

<script>
import { ClockIcon } from 'vue-feather-icons'

export default {
  components: { ClockIcon },
  props: {
    feature: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>
