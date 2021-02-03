<template>
  <main>
    <GlobalNav />
    <Hero
      title="Website & app development"
      heading="Hate your website?"
      lead="If so, you need our website plan. We'll show you how to <a
            href='/contact'
            class='text-blue-600 font-extrabold'>improve your site in 3 steps</a>. Just click the blue button below."
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
  async asyncData({ $http }) {
    const response = await fetch(
      "https://api.loopdash.com/api/get-server-status"
    ).then(res => res.json());
    return { response };
  },
  data() {
    return {
      response: null
    };
  }
};
</script>
