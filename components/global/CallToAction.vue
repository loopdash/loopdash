<template>
  <div>
    <slot name="call-to-action" class="flex justify-end w-full mb-2">
      <div class="bg-gradient-to-br from-blue-800 to-blue-700">
        <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-20 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl text-white font-extrabold tracking-tight sm:text-4xl mb-9">
            <span class="block">Ready to improve your site?</span>
            <span class="block text-blue-300">Grab your complimentary review.</span>
          </h2>

          <div class="max-w-lg w-full">
            <Form />
          </div>
        </div>
      </div>
    </slot>
  </div>
</template>
