<template>
  <div class="mx-auto max-w-7xl mx-auto mb-16w px-3 py-10 space-y-10 md:space-y-0 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
    <div>
      <div class="flex-shrink-0 mb-4">
        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-700 to-blue-500 text-white">
          <LayoutIcon />
        </div>
      </div>
      <dt class="text-lg leading-6 font-medium text-gray-900">
        Need a new website or a redesign?
      </dt>
      <dd class="mt-2 text-base text-gray-500">
        Don't have a site or need to make some changes to your current one? Let's chat. Our sites are user-friendly, responsive, and obtain more qualified leads.
      </dd>
    </div>
    <div>
      <div class="flex-shrink-0 mb-4">
        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-700 to-blue-500 text-white">
          <RefreshCwIcon />
        </div>
      </div>
      <dt class="text-lg leading-6 font-medium text-gray-900">
        Doing the same task over and over?
      </dt>
      <dd class="mt-2 text-base text-gray-500">
        If so, it's time to automate. Automation lets you focus on the important parts of your business.
      </dd>
    </div>
    <div>
      <div class="flex-shrink-0 mb-4">
        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-700 to-blue-500 text-white">
          <TrendingUpIcon />
        </div>
      </div>
      <dt class="text-lg leading-6 font-medium text-gray-900">
        Have an idea for a startup?
      </dt>
      <dd class="mt-2 text-base text-gray-500">
        We've built a number of MVPs.
      </dd>
    </div>
  </div>
</template>

<script>
import { LayoutIcon, RefreshCwIcon, TrendingUpIcon } from 'vue-feather-icons'

export default {
  components: { LayoutIcon, RefreshCwIcon, TrendingUpIcon },
  props: {
    feature: {
      type: Object,
      required: true,
      default: null
    }
  }
}
</script>
