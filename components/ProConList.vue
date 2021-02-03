<template>
  <section class="bg-gradient-to-b from-blue-600 to-blue-500 py-12 overflow-x-hidden bg-repeat">
    <div class="container px-4 mx-auto max-w-7xl">
      <div class="flex flex-wrap lg:flex-nowrap">
        <div class="w-full lg:w-1/2 px-2 mb-7">
          <h3 class="text-3xl font-extrabold mb-2 text-blue-50">
            Are you...
          </h3>
          <div class="bg-white shadow rounded-xl">
            <div class="px-6 py-8">
              <div class="flex items-start pb-4">
                <div class="mr-3 p-1 bg-red-100 text-red-500 rounded-md">
                  <XIcon size="16" />
                </div>
                <div>
                  <p class="mb-1 text-md md:text-xl leading-6 font-medium text-gray-600">
                    <span
                      class="font-extrabold text-red-500"
                    >Sick of your site breaking</span> when you update it?
                  </p>
                </div>
              </div>
              <div class="flex items-start pb-4">
                <div class="mr-3 p-1 bg-red-100 text-red-500 rounded-md">
                  <XIcon size="16" />
                </div>
                <div>
                  <p class="mb-1 text-md md:text-xl leading-6 font-medium text-gray-600">
                    Tired of
                    <span class="font-extrabold text-red-500">
                      wasting
                      hours</span> trying to build your own site?
                  </p>
                </div>
              </div>
              <div class="flex items-start pb-4">
                <div class="mr-3 p-1 bg-red-100 text-red-500 rounded-md">
                  <XIcon size="16" />
                </div>
                <div>
                  <p class="mb-1 text-md md:text-xl leading-6 font-medium text-gray-600">
                    Annoyed with freelancers who
                    <span class="font-extrabold text-red-500">
                      never communicate?
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 px-2 mb-7">
          <h3 class="text-3xl font-extrabold mb-2 text-blue-50">
            Do you...
          </h3>
          <div class="bg-white shadow rounded-xl">
            <div class="px-6 py-8">
              <div class="flex items-start pb-4">
                <div class="mr-3 p-1 bg-green-100 text-green-500 rounded-md">
                  <CheckIcon size="16" />
                </div>
                <div>
                  <p class="mb-1 text-md md:text-xl leading-6 font-medium text-gray-600">
                    Ready to be able to <span
                      class="font-extrabold
                      text-green-500"
                    >change anything</span> you want?
                  </p>
                </div>
              </div>
              <div class="flex items-start pb-4">
                <div class="mr-3 p-1 bg-green-100 text-green-500 rounded-md">
                  <CheckIcon size="16" />
                </div>
                <div>
                  <p class="mb-1 text-md md:text-xl leading-6 font-medium text-gray-600">
                    Want a brand new site in <span
                      class="font-extrabold
                      text-green-500"
                    >2 weeks</span>?
                  </p>
                </div>
              </div>
              <div class="flex items-start pb-4">
                <div class="mr-3 p-1 bg-green-100 text-green-500 rounded-md">
                  <CheckIcon size="16" />
                </div>
                <div>
                  <p class="mb-1 text-md md:text-xl leading-6 font-medium text-gray-600">
                    Want to work with devs that
                    <span class="font-extrabold text-green-500">
                      communicate often</span>?
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
