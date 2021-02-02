<template>
  <main>
    <GlobalNav />
    <Banner />
    <Hero
      title="Website & app development"
      heading="Can you update your site?"
      lead="Suprisingly most people <span
            class='text-blue-600 font-extrabold'>can't change their
             website</span>. We're here to help. Get your free website
      improvement plan today."
    />

    <ProConList />

    <TeamMembers />
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
