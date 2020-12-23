<template>
  <div class="bg-gradient-to-br from-blue-800 to-blue-700">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl text-white font-extrabold tracking-tight sm:text-4xl mb-9">
        <span class="block">Having website issues?</span>
        <span class="block text-blue-300">Get a complimentary site audit.</span>
      </h2>

      <div class="max-w-md w-full">
        <div class="flex justify-end w-full mb-2">
          <div
            v-if="submitted"
            :class="{ 'border-green-500 bg-green-500': successful, 'border-red-500 bg-red-500': !successful }"
            class="font-bold p-y-2 px-3  text-white border-1 rounded border-solid "
          >
            {{ message }}
          </div>
        </div>

        <div class="w-full mb-3">
          <label class="font-extrabold text-blue-100 mb-1">
            Your email
          </label>
          <input
            v-model="email"
            type="email"
            name="email"
            placeholder="Your email"
            class="border-solid border-2 focus:border-blue-200 py-3 rounded gray-500 bg-gray-50 px-3 w-full"
          >
        </div>
        <div>
          <button
            :disabled="disabled"
            :class="{ 'hover:bg-blue-100 bg-blue-50': disabled, 'bg-blue-400': !disabled }"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-bold rounded-md text-blue-600"
            @click.prevent="handleClick"
          >
            Get your review
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isNil } from 'lodash'

export default {
  data () {
    return {
      email: '',
      message: '',
      submitted: false,
      successful: false
    }
  },
  computed: {
    formIsValid () {
      return !isNil(this.email) && this.emailIsValid()
    },
    disabled () {
      return !this.formIsValid || this.successful
    }
  },
  methods: {
    handleClick () {
      const self = this

      if (this.formIsValid) {
        self.formSubmitted = true
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: this.email })
        }

        fetch('http://localhost:8080/api/send_email', requestOptions)
          .then((response) => {
            if (response) {
              console.log(response)
              self.submitted = true
              self.successful = true
              self.message = 'Message sent'
            }
          }
          ).catch(function (error) {
            if (error) {
              console.log(error)
              self.submitted = true
              self.successful = false
              self.message = 'Something went wrong'
            }
          })
      }
    },
    emailIsValid () {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(this.email).toLowerCase())
    }
  }
}
</script>
