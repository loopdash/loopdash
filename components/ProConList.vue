<template>
  <section class="-mt-24 max-w-4xl mx-auto pb-16 overflow-x-hidden">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap lg:flex-nowrap">
        <div class="w-full lg:w-1/2 px-2 mb-5">
          <div class="shadow rounded-xl">
            <div class="text-white rounded-t-xl px-6 pt-6 pb-4 bg-red-600 text-red-100">
              <h3 class="text-2xl font-extrabold mb-2">
                Are you...
              </h3>
            </div>
            <div class="p-6">
              <div class="flex items-start py-4">
                <div class="mr-3 p-1 bg-red-100 text-red-500 rounded-md">
                  <XIcon size="16" />
                </div>
                <div>
                  <p class="mb-2 text-lg leading-6 font-medium text-gray-600">
                    Tired of trying to DIY the perfect website?
                  </p>
                </div>
              </div>
              <div class="flex items-start py-4">
                <div class="mr-3 p-1 bg-red-100 text-red-500 rounded-md">
                  <XIcon size="16" />
                </div>
                <div>
                  <p class="mb-2 text-lg leading-6 font-medium text-gray-600">
                    Sick of working with developers who don’t understand your business?
                  </p>
                </div>
              </div>
              <div class="flex items-start py-4">
                <div class="mr-3 p-1 bg-red-100 text-red-500 rounded-md">
                  <XIcon size="16" />
                </div>
                <div>
                  <p class="mb-2 text-lg leading-6 font-medium text-gray-600">
                    Annoyed with freelancers who never communicate?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2 mb-5">
          <div class="shadow rounded-xl">
            <div class="text-white rounded-t-xl px-6 pt-6 pb-4 bg-green-600 text-green-100">
              <h3 class="text-2xl font-extrabold mb-2">
                Do you...
              </h3>
            </div>
            <div class="p-6">
              <div class="flex items-start py-4">
                <div class="mr-3 p-1 bg-green-100 text-green-500 rounded-md">
                  <CheckIcon size="16" />
                </div>
                <div>
                  <p class="mb-2 text-lg leading-6 font-medium text-gray-600">
                    Want a tech partner to guide you?
                  </p>
                </div>
              </div>
              <div class="flex items-start py-4">
                <div class="mr-3 p-1 bg-green-100 text-green-500 rounded-md">
                  <CheckIcon size="16" />
                </div>
                <div>
                  <p class="mb-2 text-lg leading-6 font-medium text-gray-600">
                    Want a team that understands your brand?
                  </p>
                </div>
              </div>
              <div class="flex items-start py-4">
                <div class="mr-3 p-1 bg-green-100 text-green-500 rounded-md">
                  <CheckIcon size="16" />
                </div>
                <div>
                  <p class="mb-2 text-lg leading-6 font-medium text-gray-600">
                    Want developers to collaborate with, rather than make excuses?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { XIcon, CheckIcon } from 'vue-feather-icons'

export default {
  components: { CheckIcon, XIcon }
}
</script>
