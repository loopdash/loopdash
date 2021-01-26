<template>
  <div>
    <div class="flex justify-end w-full mb-2">
      <div
        v-if="submitted"
        :class="{ 'border-green-500 bg-green-500': successful, 'border-red-500 bg-red-500': !successful }"
        class="p-y-2 px-3  text-white border-1 rounded border-solid "
      >
        {{ message }}
      </div>
    </div>

    <div class="w-full md:w-auto max-w-md mb-3">
      <input
        v-model="email"
        type="email"
        name="email"
        placeholder="Enter your email"
        class="border-solid border-2 focus:border-blue-200 py-3 rounded gray-500 bg-gray-50 px-3 w-full"
      >
    </div>
    <div>
      <button
        :disabled="disabled"
        :class="{ 'bg-blue-600 hover:bg-blue-600': disabled, 'hover:bg-blue-700 bg-blue-900': !disabled }"
        class="inline-flex items-center w-full md:w-auto justify-center px-5 py-3 text-base font-bold rounded-md text-white"
        @click.prevent="handleClick"
      >
        Get started
      </button>
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

        fetch('http://localhost:8080/api/send-email', requestOptions)
          .then((response) => {
            if (response) {
              self.submitted = true
              self.successful = true
              self.message = 'Message sent successfully'
            }
          }
          ).catch(function (error) {
            if (error) {
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
