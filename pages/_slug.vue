<template>
  <div>
    <global-nav>
      <template #global-nav />
    </global-nav>

    <div v-if="page.template == 'document'">
      <section class="container mx-auto px-4 pt-20 pb-24 max-w-2xl">
        <div class="mb-8 text-center mx-auto max-w-3xl pt-4">
          <h1 class="text-base text-blue-500 font-semibold tracking-wide uppercase font-mono">
            {{ page.title }}
          </h1>
          <h2 class="mt-2 leading-12 font-bold tracking-tight text-5xl mb-4">
            {{ page.heading }}
          </h2>
        </div>
        <nuxt-content :document="page" />
      </section>
    </div>
    <div v-else>
      <div class="px-8 mb-16 mx-auto max-w-2xl">
        <Hero :title="page.title" :heading="page.heading">
          <template #Hero />
        </Hero>
        <nuxt-content :document="page" />
      </div>
      <CallToAction>
        <template #CallToAction />
      </CallToAction>
      <Footer>
        <template #Footer />
      </Footer>
    </div>
  </div>
</template>

<script>
import CallToAction from '../components/global/CallToAction.vue'
import Hero from '../components/global/Hero.vue'
import Footer from '../components/global/Footer.vue'

export default {
  components: { Hero, CallToAction, Footer },
  async asyncData ({ $content, params }) {
    const page = await $content('pages', params.slug).fetch()
    return { page }
  }
}
</script>
