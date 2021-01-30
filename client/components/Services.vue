<template>
  <div class="flex self-center max-w-6xl mx-auto mb-16 px-4 py-7 space-y-10 md:space-y-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
    <div>
      <div class="flex-shrink-0 mb-4">
        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-700 to-blue-500 text-white">
          <LayoutIcon />
        </div>
      </div>
      <dt class="text-lg leading-6 font-medium text-gray-900">
        Website Design and Development
      </dt>
      <dd class="mt-2 text-base text-gray-500">
        Your website connects the world to your business. We build effective sites and web apps that quickly bring your customers the right content.
      </dd>
    </div>
    <div>
      <div class="flex-shrink-0 mb-4">
        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-700 to-blue-500 text-white">
          <CheckSquareIcon />
        </div>
      </div>
      <dt class="text-lg leading-6 font-medium text-gray-900">
        WordPress Support
      </dt>
      <dd class="mt-2 text-base text-gray-500">
        Let us manage Maintenance, updates and backups as well as making any changes or fixes whenever you need.
      </dd>
    </div>
    <div>
      <div class="flex-shrink-0 mb-4">
        <div class="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-700 to-blue-500 text-white">
          <LayersIcon />
        </div>
      </div>
      <dt class="text-lg leading-6 font-medium text-gray-900">
        Hosting
      </dt>
      <dd class="mt-2 text-base text-gray-500">
        Whether you're looking to create a website, blog or online store Loopdash can get you started with hosting tailored to your needs.
      </dd>
    </div>
  </div>
</template>

<script>
import { LayersIcon, LayoutIcon, CheckSquareIcon } from 'vue-feather-icons'

export default {
  components: { LayersIcon, LayoutIcon, CheckSquareIcon }
}
</script>
