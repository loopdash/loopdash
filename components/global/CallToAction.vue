<template>
  <div>
    <slot name="call-to-action">
      <div class="bg-gradient-to-br from-blue-800 to-blue-700">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl text-white font-extrabold tracking-tight sm:text-4xl mb-9">
            <span class="block">Having website issues?</span>
            <span class="block text-blue-300">Get a complimentary site audit.</span>
          </h2>

          <div class="max-w-md w-full">
            <Form />
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>
