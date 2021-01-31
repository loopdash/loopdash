<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-blue-600">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-blue-800 text-white">
            <MessageCircleIcon class="md:hidden" />
            <CalendarIcon class="hidden md:inline" />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            <span class="md:hidden">
              Need help with your site? <a href="sms:3305061300&body=Hello" class="font-bold text-link text-white underline">Text us your problem</a>
            </span>
            <span class="hidden md:inline">
              Improve your site in 30 minutes.
            </span>
          </p>
        </div>
        <div class="hidden md:inline leading-loose order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          <a href="https://calendly.com/loopdash" class="flex font-extrabold items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-blue-50">
            Book a free meeting
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CalendarIcon, MessageCircleIcon } from 'vue-feather-icons'

export default {
  components: { CalendarIcon, MessageCircleIcon }
}
</script>
