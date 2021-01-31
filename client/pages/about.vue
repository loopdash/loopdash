<template>
  <main>
    <GlobalNav />
    <Banner />
    <Hero
      title="About Loopdash"
      heading="We try to avoid writing code"
      show="false"
    />
    <section class="container mx-auto px-4 pb-24 max-w-2xl">
      <div class="mb-8 max-w-3xl pt-4">
        <p class="mb-6 text-lg text-gray-500">
          At Loopdash, we don’t write applications we don't have to. It’s not because we don’t enjoy what we do, quite the opposite. But for us apps are a means to an end - a way to solve a problem. We've been around a while, so we have a few guidelines to ensure we leave things better than we found them.
        </p>

        <h3 class="font-bold mb-1 text-lg text-blue-500">
          If a solution exists, we won’t rebuild it
        </h3>

        <p class="mb-6 text-lg text-gray-500">
          Simply because there's no reason for us to. If we know of a SaaS product that solves 95% of the problem, we will tell you about it. Simple as that. We won’t rebuild our own version just because we can. And frankly, we think it’s bad business to even try.
        </p>

        <h3 class="font-bold mb-1 text-lg text-blue-500">
          We try to not code
        </h3>

        <p class="mb-6 text-lg text-gray-500">
          So before we do, we think of all other practical solutions. We're not lazy, we just act in our clients' best interest. That’s how we’ve always operated and how we always will.
        </p>

        <h3 class="font-bold mb-1 text-lg text-blue-500">
          Is maintaining it worthwhile
        </h3>

        <p class="mb-6 text-lg text-gray-500">
          We don't write code where the costs outweighs the value. We keep this top of mind throughout the project lifecycle.
        </p>
      </div>
    </section>
    <TeamMembers />
    <CallToAction />
    <Footer />
  </main>
</template>
