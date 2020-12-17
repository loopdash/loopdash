<template>
  <div class="w-full md:w-1/2 px-3 mb-6">
    <div class="p-8 bg-white shadow rounded-lg">
      <div class="flex items-center mb-4">
        <img class="h-12 w-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1556474835-b0f3ac40d4d1?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt="">
        <div class="pl-4">
          <p class="text-md">
            <span class="font-extrabold">
              Brandon Olmi,
            </span>
            <span class="font-bold text-blue-400">
              Founder
            </span>
          </p>
          <div class="flex">
            <StarIcon size="16" class="text-yellow-400" />
            <StarIcon size="16" class="text-yellow-400" />
            <StarIcon size="16" class="text-yellow-400" />
            <StarIcon size="16" class="text-yellow-400" />
            <StarIcon size="16" class="text-yellow-400" />
          </div>
        </div>
      </div>
      <p class="leading-loose text-gray-500">
        Loopdash did a fantastic job with our website, was very prompt from start to finish. Helpful and made great suggestions to get the site we were looking for!
      </p>
    </div>
  </div>
</template>

<script>
import { StarIcon } from 'vue-feather-icons'

export default {
  components: { StarIcon }
}
</script>
