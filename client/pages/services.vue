<template>
  <main>
    <GlobalNav />
    <Hero
      title="Loopdash Services"
      heading="We offer much more than code"
      show="false"
    />

    <section class="container mx-auto px-4 pb-24 max-w-2xl">
      <div class="max-w-6xl flex justify-center items-center mx-auto mb-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-xl">
          <Service name="anthony" position="Developer" bio="He handles some of the WordPress development." />
          <TeamMember name="gary" position="Developer" bio="He does business stuff and writes a little code." />
          <TeamMember name="jenna" position="Operations" bio="She manages all of our projects and deployments." />
          <TeamMember name="sean" position="Developer" bio="He codes and supports our WordPress instances." />
          <TeamMember name="zach" position="Developer" bio="He builds web apps, websites and manages servers." />
        </div>
      </div>
    </section>
    <CallToAction />
    <Footer />
  </main>
</template>
