<template>
  <main>
    <Nav />
    <!-- <Banner /> -->
    <Hero
      v-bind="{hero}"
    />

    <ProConList />
    <About />
    <Testimonials />
    <CallToAction />
  </main>
</template>

<script>
export default {
  data () {
    return {
      hero: {
        title: 'Website and app development',
        heading: 'Does your website suck?',
        lead: 'At Loopdash we build apps and site to make your business more efficient.'
      },
      feature: {
        title: 'Something',
        description: 'We have 290 Tailwind CSS variables in thematically connected categories to allow you to work effectively.'
      }
    }
  }
}
</script>
