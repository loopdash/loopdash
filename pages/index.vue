<template>
  <main>
    <GlobalNav />
    <Hero
      title="Website and app development"
      heading="Is your website bad?"
      lead="Let's make it great. We partner with business and brands to build better websites and apps."
    />

    <ProConList />
    <About />
    <Testimonials />
    <CallToAction />
    <Footer />
  </main>
</template>

<script>
export default {
  data () {
    return {
      feature: {
        title: 'Something',
        description: 'We have 290 Tailwind CSS variables in thematically connected categories to allow you to work effectively.'
      }
    }
  }
}
</script>
