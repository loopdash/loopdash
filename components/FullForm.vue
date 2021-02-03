<template>
  <div>
    <div
      v-if="submitted"
      :class="{ 'border-green-500 bg-green-500': successful, 'border-red-500 bg-red-500': !successful }"
      class="p-y-2 px-3 text-white border-1 rounded border-solid "
    >
      {{ message }}
    </div>
    <div class="mb-4">
      <label for="name" class="block text-md font-medium text-gray-700 mb-1">Full name<sup>*</sup></label>
      <input
        v-model="name"
        type="text"
        name="name"
        value=""
        size="40"
        class="border-solid border-2 border-grey-light py-3 rounded gray-500 bg-gray-50 px-3 w-full"
        aria-required="true"
        aria-invalid="false"
      >
    </div>

    <div class="mb-4">
      <label for="name" class="block text-md font-medium text-gray-700 mb-1">Email<sup>*</sup></label>
      <input
        v-model="email"
        type="email"
        name="email"
        value=""
        size="40"
        class="border-solid border-2 border-grey-light py-3 rounded gray-500 bg-gray-50 px-3 w-full"
        aria-required="true"
        aria-invalid="false"
      >
    </div>

    <div class="mb-4">
      <label for="name" class="block text-md font-medium text-gray-700 mb-1">Website<sup>*</sup></label>
      <input
        v-model="website"
        type="text"
        name="website"
        value=""
        size="40"
        class="border-solid border-2 border-grey-light py-3 rounded gray-500 bg-gray-50 px-3 w-full"
        aria-required="true"
        aria-invalid="false"
      >
    </div>

    <div class="mb-4">
      <label for="name" class="block text-md font-medium text-gray-700 mb-1">Phone</label>
      <input
        v-model="phone"
        type="phone"
        name="phone"
        value=""
        size="40"
        class="border-solid border-2 border-grey-light py-3 rounded gray-500 bg-gray-50 px-3 w-full"
        aria-required="true"
        aria-invalid="false"
      >
    </div>

    <button
      :disabled="disabled"
      class="col-span-12 md:col-span-3 px-7 py-4 text-base font-bold
      rounded-md text-white bg-blue-900 hover:bg-blue-800"
      @click.prevent="handleClick"
    >
      Get your free site plan
    </button>
  </div>
</template>

<script>
import { isNil } from 'lodash'

export default {
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      website: '',
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
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            phone: this.phone,
            website: this.website
          })
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
