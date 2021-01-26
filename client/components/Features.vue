<template>
  <div class="mx-auto max-w-7xl mx-auto mb-16w px-3 py-10 space-y-10 md:space-y-0 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
    <div>
      <div class="flex-shrink-0 mb-4">
        <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-700 to-blue-600 text-white">
          <LayoutIcon />
        </div>
      </div>
      <dt class="text-xl leading-6 font-bold text-gray-600 font-mono">
        Need a new website?
      </dt>
      <dd class="mt-2 text-lg text-gray-500">
        Don't have a site or need to make some changes to your current one? Our sites are user-friendly, responsive, and obtain more qualified leads.
      </dd>
    </div>
    <div>
      <div class="flex-shrink-0 mb-4">
        <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-700 to-blue-600 text-white">
          <RefreshCwIcon />
        </div>
      </div>
      <dt class="text-xl leading-6 font-bold text-gray-600 font-mono">
        Doing busy work?
      </dt>
      <dd class="mt-2 text-lg text-gray-500">
        If you're doing the same task over and over it's time to automate. From formatting CSVs, to bulk sending emails, we can help build a system to decrease busy work.
      </dd>
    </div>
    <div>
      <div class="flex-shrink-0 mb-4">
        <div class="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-blue-700 to-blue-600 text-white">
          <TrendingUpIcon />
        </div>
      </div>
      <dt class="text-xl leading-6 font-bold text-gray-600 font-mono">
        Have startup idea?
      </dt>
      <dd class="mt-2 text-lg text-gray-500">
        Building a company is hard. Unless your a technical founder, funding can feel impossible. Our MVP approach will help you pitch your app to investors and maximaze your chance of securing funding.
      </dd>
    </div>
  </div>
</template>

<script>
import { LayoutIcon, RefreshCwIcon, TrendingUpIcon } from 'vue-feather-icons'

export default {
  components: { LayoutIcon, RefreshCwIcon, TrendingUpIcon }
}
</script>
