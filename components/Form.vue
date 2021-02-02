<template>
  <div class="w-full">
    <div
      v-if="submitted"
      :class="{ 'border-green-500 bg-green-500': successful, 'border-red-500 bg-red-500': !successful }"
      class="p-y-2 px-3 text-white border-1 rounded border-solid "
    >
      {{ message }}
    </div>
    <div class="grid grid grid-cols-10 gap-3">
      <input
        v-model="email"
        type="email"
        name="email"
        placeholder="you@something.com"
        class="col-span-12 md:col-span-7 border-solid border-2
                py-3 rounded
               focus:ring-blue-400
        bg-gradient-to-b from-gray-100 to-gray-50 px-3"
      >
      <button
        :disabled="disabled"
        class="col-span-12 md:col-span-3 px-5 py-3 text-base font-bold
        rounded-md text-white bg-blue-900 hover:bg-blue-800"
        @click.prevent="handleClick"
      >
        Get your plan
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

        fetch('https://api.loopdash.com/api/send-email', requestOptions)
          .then((response) => {
            if (response) {
              self.submitted = true
              self.successful = true
              self.message = 'Message sent successfully'
            }
          })
          .catch(function (error) {
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
