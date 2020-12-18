<template>
  <main class="flex h-100 bg-gradient-to-br from-blue-800 to-blue-700">
    <div class="w-full md:w-1/2 max-w-sm m-auto bg-indigo-100 rounded p-5">
      <div class="bg-white p-5 rounded-xl">
        <h1 class="mt-2 text-3xl leading-8 font-extrabold text-blue-600">
          Let's work together
        </h1>
        <h2 class="my-4 text-lg text-gray-500 font-normal lg:mx-auto">
          Get in touch to let us know what you’re looking for and one of our solutions architects will get back to you soon.
        </h2>

        <div class="mb-4">
          <label for="name" class="block text-md font-medium text-gray-700 mb-1">Full name</label>
          <input
            type="text"
            name="fullname"
            value=""
            size="40"
            class="border-solid border-2 border-grey-light py-3 rounded gray-500 bg-gray-50 px-3 w-full"
            aria-require–d="true"
            aria-invalid="false"
          >
        </div>

        <div class="mb-4">
          <label for="name" class="block text-md font-medium text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value=""
            size="40"
            class="border-solid border-2 border-grey-light py-3 rounded gray-500 bg-gray-50 px-3 w-full"
            aria-require–d="true"
            aria-invalid="false"
          >
        </div>

        <div class="mb-4">
          <label for="name" class="block text-md font-medium text-gray-700 mb-1">Phone</label>
          <input
            type="phone"
            name="phone"
            value=""
            size="40"
            class="border-solid border-2 border-grey-light py-3 rounded gray-500 bg-gray-50 px-3 w-full"
            aria-require–d="true"
            aria-invalid="false"
          >
        </div>

        <div class="mb-4">
          <label for="name" class="block text-md font-medium text-gray-700 mb-1">Website</label>
          <input
            type="text"
            name="website"
            value=""
            size="40"
            class="border-solid border-2 border-grey-light py-3 rounded gray-500 bg-gray-50 px-3 w-full"
            aria-require–d="true"
            aria-invalid="false"
          >
        </div>

        <button href="#form" class="w-full flex items-center justify-center px-8 py-2 border-2 border-blue-600 text-base font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-lg md:px-5 transition-all">
          Send message
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {

  data () {
    return {
    }
  }
}
</script>
