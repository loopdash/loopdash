<template>
  <main>
    <GlobalNav />
    <Banner />
    <Hero
      title="Website & app development"
      heading="Need a better website?"
      lead="We collaborate with brands to improve their websites and apps."
    />

    <ProConList />

    <TeamMembers />
    <Testimonials />
    <CallToAction />
    {{ response }}
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
