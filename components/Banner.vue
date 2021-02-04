<template>
  <div class="bg-blue-600 hover:bg-blue-700 cursor-pointer">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center center-between flex-wrap md:align-center">
        <a href="/get-your-plan" class="md:hidden w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-blue-800 text-white">
            <MessageCircleIcon />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            Hate your website? Text us
          </p>
        </a>

        <a
          href="https://calendly.com/loopdash"
          class="hidden md:flex w-0
          flex-1 flex items-center"
          target="_blank"
        >
          <span class="flex p-2 rounded-lg bg-blue-800 text-white">
            <CalendarIcon />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            Hate your website? Get your custom website plan
          </p>
        </a>
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
