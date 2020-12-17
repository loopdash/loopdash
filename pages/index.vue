<template>
  <main>
    <Nav />
    <Banner />
    <Hero
      v-bind="{hero}"
    />
    <TextSet />
    <div class="max-w-7xl mx-auto mb-16 px-3 space-y-10 md:space-y-0 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
      <Feature v-bind="{feature}" />
      <Feature v-bind="{feature}" />
      <Feature v-bind="{feature}" />
    </div>
    <div class="flex flex-wrap max-w-5xl mx-auto mb-6">
      <TextSet />
      <Testimonial />
      <Testimonial />
    </div>
    <CallToAction />
  </main>
</template>

<script>
export default {
  // async fetch () {
  //   // this.hero = await this.$content('index').only(['title', 'heading', 'lead']).fetch()
  //   this.hero = {
  //     title: 'Website & app development',
  //     heading: 'Is your website underperforming?',
  //     lead: 'Discover how to get more leads, visitors, and a better web presence through our complimentary website evaluation.'
  //   }

  //   this.feature = {
  //     title: 'Something',
  //     description: 'We have 290 Tailwind CSS variables in thematically connected categories to allow you to work effectively.'
  //   }
  // },
  data () {
    return {
      hero: {
        title: 'Website & app development',
        heading: 'Is your website working for you?',
        lead: 'Discover how to get more leads, visitors, and a better web presence through our complimentary website evaluation.'
      },
      feature: {
        title: 'Something',
        description: 'We have 290 Tailwind CSS variables in thematically connected categories to allow you to work effectively.'
      }
    }
  }
}
</script>
