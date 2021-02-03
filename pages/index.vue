<template>
  <main>
    <GlobalNav />
    <Hero
      title="Website & app development"
      heading="Hate your website?"
      lead="If so, you need a website plan. We'll show you how to <a
            href='/contact'
            class='text-blue-600 font-extrabold'>improve your site in 3 steps</a>. Just click the blue button below."
    />

    <ProConList />
    <TeamMembers />

    <div class="flex flex-wrap items-center py-16 md:py-24 px-4">
      <div class="w-full md:w-5/12 px-4 mr-auto ml-auto overflow-scroll h-80 hidden md:block">
        <img src="andvari-associates.png" alt="" class="shadow-lg rounded-lg">
      </div>
      <div class="w-full md:w-5/12 md:px-4 ml-auto mr-auto">
        <h3 class="text-3xl mb-2 font-semibold leading-normal">
          From WordPress to Shopify
        </h3>
        <p class="text-lg leading-relaxed mt-4 mb-4 text-gray-700">
          We have built sites with all types of tech - so we know how to improve your conversion rate, SEO, and performance. No matter the technology, we have a plan that ensures that your brand is in the best position for future growth.
        </p>
        <div class="block pb-6">
          <span class="text-xs font-semibold font-mono inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 uppercase last:mr-0 mr-2 mt-2">
            WordPress
          </span>
          <span class="text-xs font-semibold font-mono inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 uppercase last:mr-0 mr-2 mt-2">
            React
          </span>
          <span class="text-xs font-semibold font-mono inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 uppercase last:mr-0 mr-2 mt-2">
            Shopify
          </span>
          <span class="text-xs font-semibold font-mono inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 uppercase last:mr-0 mr-2 mt-2">
            Node
          </span>
          <span class="text-xs font-semibold font-mono inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 uppercase last:mr-0 mr-2 mt-2">
            Rails
          </span>
          <span class="text-xs font-semibold font-mono inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 uppercase last:mr-0 mr-2 mt-2">
            Ruby
          </span>
          <span class="text-xs font-semibold font-mono inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 uppercase last:mr-0 mr-2 mt-2">
            PHP
          </span>
          <span class="text-xs font-semibold font-mono inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 uppercase last:mr-0 mr-2 mt-2">
            Vue
          </span>
        </div>
      </div>
    </div>

    <Testimonials />
    <CallToAction />
    <Footer
      :response="response"
    />
  </main>
</template>

<script>
export default {
  async asyncData ({ $http }) {
    const response = await fetch(
      'https://api.loopdash.com/api/get-server-status'
    ).then(res => res.json())
    return { response }
  },
  data () {
    return {
      response: null
    }
  }
}
</script>
