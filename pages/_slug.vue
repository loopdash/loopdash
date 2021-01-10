<template>
  <div>
    <global-nav>
      <template #global-nav />
    </global-nav>

    <div v-if="page.template == 'document'">
      <div class="px-8 py-12 mb-16 mx-auto max-w-2xl">
        <h1 class="text-3xl font-bold mb-4">
          {{ page.title }}
        </h1>
        <nuxt-content :document="page" />
      </div>
    </div>
    <div v-else>
      <mini-hero :title="page.title" :heading="page.heading">
        <template #mini-hero />
      </mini-hero>
      <div class="px-8 mb-16 mx-auto max-w-2xl">
        <nuxt-content :document="page" />
      </div>
      <call-to-action>
        <template #call-to-action />
      </call-to-action>
    </div>
  </div>
</template>

<script>
import CallToAction from '../components/global/CallToAction.vue'
import MiniHero from '../components/global/MiniHero.vue'
export default {
  components: { MiniHero, CallToAction },
  async asyncData ({ $content, params }) {
    const page = await $content('pages', params.slug).fetch()
    return { page }
  }
}
</script>
