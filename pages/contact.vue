<template>
  <main>
    <GlobalNav />
    <Hero
      title="Contact Loopdash"
      heading="Improve your site in 3 steps."
      lead="The first step to a better site is knowing what's wrong."
      :show="false"
    />
    <div class="w-full max-w-xl m-auto bg-indigo-100 rounded">
      <FullForm />
    </div>
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
