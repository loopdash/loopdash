<template>
  <main>
    <GlobalNav />
    <Hero
      title="Website and app development"
      heading="Need a better website?"
      lead="Let's make it great. We partner with business and brands to build better websites and apps."
    />

    <div class="max-w-6xl p-1 flex justify-center items-center mx-auto mb-3">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl">
        <TeamMember name="Anthony" position="Developer" bio="He handles most of the WordPress development." />
        <TeamMember name="Gary" position="Developer" bio="He runs the business and codes a little." />
        <TeamMember name="Jenna" position="Operations" bio="She manages all of our projects and deployments." />
        <TeamMember name="Sean" position="Developer" bio="He codes and supports our WordPress instances." />
        <TeamMember name="Zach" position="Developer" bio="He builds web apps, websites and manages servers." />
      </div>
    </div>

    <ProConList />

    <About />
    <Testimonials />
    <CallToAction />
    <Footer />
  </main>
</template>
