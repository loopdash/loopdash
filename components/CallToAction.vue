<template>
  <div class="bg-gradient-to-br from-blue-800 to-blue-700">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl text-white font-extrabold tracking-tight sm:text-4xl mb-9">
        <span class="block">Having website issues?</span>
        <span class="block text-blue-300">Get a complimentary site audit.</span>
      </h2>

      <div class="">
        <div class="w-full mb-6">
          <input
            v-model="email"
            type="email"
            name="email"
            placeholder="Your email"
            class="border-solid border-2 border-grey-light py-3 rounded gray-500 bg-gray-50 px-3 w-full"
          >
        </div>
        <div class="">
          <button
            class="inline-flex items-center justify-center px-5 py-3 text-base font-bold rounded-md text-blue-600 bg-blue-300 hover:bg-blue-50"
            @click="handleClick"
          >
            Get your review
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },
  computed: {
    isDisabled () {
      return this.email.length > 0
    }
  },
  methods: {
    handleClick () {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: this.email })
      }
      fetch('http://localhost:8080/api/send_email', requestOptions).then(
        (response) => {
          console.log(response)
        }
      )
    }
  }
}
</script>
