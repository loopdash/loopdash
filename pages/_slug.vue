<template>
  <div>
    <global-nav>
      <template #global-nav />
    </global-nav>
    <mini-hero :title="article.title" :heading="article.heading">
      <template #mini-hero />
    </mini-hero>
    <article class="px-8 mb-16 mx-auto max-w-2xl">
      <nuxt-content :document="article" />
    </article>
    <call-to-action>
      <template #call-to-action />
    </call-to-action>
  </div>
</template>

<script>
import CallToAction from '../components/global/CallToAction.vue'
import MiniHero from '../components/global/MiniHero.vue'
export default {
  components: { MiniHero, CallToAction },
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    return { article }
  }
}
</script>
